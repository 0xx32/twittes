import React from 'react'

interface UploadedFile {
	filePath: string
	name: string
}

export const useCreateNewForm = () => {
	const [newPostValue, setNewPostValue] = React.useState('')
	const [fieldFocus, setFieldFocus] = React.useState(false)
	const [uploadedFile, setUploadedFile] = React.useState<UploadedFile | null>(null)
	const fieldRef = React.useRef<HTMLTextAreaElement>(null)

	const autoResize = () => {
		if (!fieldRef.current) return

		fieldRef.current.style.height = 'inherit'
		fieldRef.current.style.height = `${fieldRef.current.scrollHeight}px`
	}

	const newPostOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewPostValue(e.target.value)
		autoResize()
	}

	const uploadFile = (file: File) => {
		const formData = new FormData()
		formData.append('file', file)

		setUploadedFile(null)
	}

	const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return

		uploadFile(file)
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
		},
	}
}
