import { HTTPError } from 'ky'
import React from 'react'
import { toast } from 'sonner'

import { api } from '@/utils/api'
import { usePostPostsMutation } from '@/utils/api/hooks'

interface UploadedFile {
	filePath: string
}

export const useCreateNewForm = () => {
	const [newPostValue, setNewPostValue] = React.useState('')
	const [fieldFocus, setFieldFocus] = React.useState(false)
	const [uploadedFile, setUploadedFile] = React.useState<UploadedFile | null>(null)
	const fieldRef = React.useRef<HTMLTextAreaElement>(null)

	const createNewPostMutation = usePostPostsMutation()

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
