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
	const [fieldFocus, setFieldFocus] = React.useState(false)
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
			onSettled: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POSTS] }),
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
		formData.append('image', file)

		const data = await api
			.post('upload', {
				json: formData,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				searchParams: {
					// path: 'posts',
					name: file.name,
				},
			})
			.json<{ filePath: string }>()

		setUploadedFile({ filePath: data.filePath })
	}

	const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]

		if (!file) return

		uploadFile(file)
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!newPostValue.length) return

		try {
			await createNewPostMutation.mutateAsync({
				params: {
					content: newPostValue,
				},
			})

			setNewPostValue('')

			if (fieldRef.current) fieldRef.current.style.height = 'inherit'
		} catch (error) {
			console.error(error)
			if (error instanceof HTTPError) {
				const errorData = await error.response.json<ErrorResponse>()
				toast.error(errorData.message)
			}
		}
	}

	return {
		state: {
			newPostValue,
			fieldFocus,
			uploadedFile,
			isPending: createNewPostMutation.isPending,
		},
		refs: {
			fieldRef,
		},
		functions: {
			autoResize,
			newPostOnChange,
			setFieldFocus,
			selectFile,
			handleSubmit,
		},
	}
}
