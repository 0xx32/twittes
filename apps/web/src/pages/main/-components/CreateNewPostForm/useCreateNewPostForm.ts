import type { InfiniteData } from '@tanstack/react-query'

import { useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import React from 'react'
import { toast } from 'sonner'

import { api } from '@/utils/api'
import { QUERY_KEYS } from '@/utils/api/constants'
import { usePostPostsMutation } from '@/utils/api/hooks'
import { useProfile } from '@/utils/contexts/profile'

interface UploadedFile {
	filePath: string
}

export const useCreateNewPostForm = () => {
	const [newPostValue, setNewPostValue] = React.useState('')
	const [uploadedFile, setUploadedFile] = React.useState<UploadedFile | null>(null)
	const fieldRef = React.useRef<HTMLTextAreaElement>(null)

	const queryClient = useQueryClient()
	const { profile } = useProfile()

	const createNewPostMutation = usePostPostsMutation({
		options: {
			onMutate: async ({ params: newPostData }) => {
				await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.GET_POSTS] })
				const previousPost = queryClient.getQueryData<InfiniteData<Post[]>>([QUERY_KEYS.GET_POSTS])

				const newPost: Post = {
					content: newPostData.content,
					id: 'wadawd12e123',
					image: newPostData.image ?? '',
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
					likes: [],
					creator: {
						username: profile.username,
						displayName: profile.displayName,
						picture: profile.picture,
					},
				}

				queryClient.setQueryData<InfiniteData<Post[]>>(
					[QUERY_KEYS.GET_POSTS],
					(previousInfiniteQueryData: any) => {
						const newData = previousInfiniteQueryData?.pages.map((page: { posts: Post[] }) => ({
							...page,
							posts: [newPost, ...page.posts],
						}))

						return {
							...previousInfiniteQueryData,
							pages: newData,
						}
					}
				)

				return { previousPost, newPost }
			},
			onError: (_err, _modifiedPost, context) => {
				queryClient.setQueryData([QUERY_KEYS.GET_POSTS], context?.previousInfiniteQueryData)
			},
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POSTS] })
			},
		},
	})

	const autoResize = () => {
		if (!fieldRef.current) return

		fieldRef.current.style.height = 'inherit'
		fieldRef.current.style.height = `${fieldRef.current.scrollHeight}px`
	}

	const newPostOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewPostValue(e.target.value)
		autoResize()
	}

	const uploadFile = async (file: File) => {
		const formData = new FormData()
		formData.append('file', file)

		const response = await api.post('upload', {
			method: 'POST',
			body: formData,
		})
		const json = await response.json<{ filePath: string }>()
		setUploadedFile({ filePath: json.filePath })
	}

	const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]

		if (!file) return

		uploadFile(file)
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			await createNewPostMutation.mutateAsync({
				params: {
					content: newPostValue,
					image: uploadedFile?.filePath,
				},
			})

			setNewPostValue('')
			setUploadedFile(null)

			if (fieldRef.current) fieldRef.current.style.height = 'inherit'
		} catch (error) {
			console.error(error)
			if (error instanceof HTTPError) {
				const errorData = await error.response.json<ErrorResponse>()
				toast.error(errorData.message)
			}
		}
	}

	const removePicture = () => setUploadedFile(null)

	return {
		state: {
			newPostValue,

			uploadedFile,
			isPending: createNewPostMutation.isPending,
		},
		refs: {
			fieldRef,
		},
		functions: {
			autoResize,
			newPostOnChange,

			selectFile,
			handleSubmit,
			removePicture,
		},
	}
}
