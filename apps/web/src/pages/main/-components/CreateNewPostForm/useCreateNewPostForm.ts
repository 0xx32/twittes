import { HTTPError } from 'ky'
import React, { useState } from 'react'
import { toast } from 'sonner'

import { api } from '@/utils/api'
import { usePostPostsOptimisticMutation } from '@/utils/api/hooks'
import { useProfile } from '@/utils/contexts/profile'

interface UploadedFile {
	filePath: string
}

export const useCreateNewPostForm = () => {
	const [newPostValue, setNewPostValue] = React.useState('')
	const [uploadedFile, setUploadedFile] = React.useState<UploadedFile | null>(null)
	const fieldRef = React.useRef<HTMLTextAreaElement>(null)
	const [formIsValid, setFormIsValid] = useState(false)

	const { profile } = useProfile()
	const createNewPostMutation = usePostPostsOptimisticMutation({ profile })

	const autoResize = () => {
		if (!fieldRef.current) return

		fieldRef.current.style.height = 'inherit'
		fieldRef.current.style.height = `${fieldRef.current.scrollHeight}px`
	}

	const newPostOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewPostValue(e.target.value)
		autoResize()

		if (e.target.value.length > 0) {
			setFormIsValid(true)
		} else {
			setFormIsValid(false)
		}
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
		setFormIsValid(true)
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
			setFormIsValid(false)

			if (fieldRef.current) fieldRef.current.style.height = 'inherit'
		} catch (error) {
			console.error(error)

			if (error instanceof HTTPError) {
				const errorData = await error.response.json<ErrorResponse>()
				toast.error(errorData.message)
			}
		}
	}

	const removePicture = () => {
		setUploadedFile(null)
		setFormIsValid(false)
	}

	return {
		state: {
			newPostValue,
			formIsValid,
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
