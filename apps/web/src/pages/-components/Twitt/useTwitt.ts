import { HTTPError } from 'ky'
import { toast } from 'sonner'

import {
	useDeletePostsOptimisticMutation,
	usePatchPostsOptimisticMutation,
} from '@/utils/api/hooks'

export const useTwitt = ({ postId }: { postId: string }) => {
	const patchPostsMutation = usePatchPostsOptimisticMutation({ postId })
	const deletePostsMutation = useDeletePostsOptimisticMutation({ postId })

	const deletePost = async (postid: string) => {
		try {
			const response = await deletePostsMutation.mutateAsync({ params: { postId: postid } })

			toast(response.message)
		} catch (error) {
			if (error instanceof HTTPError) {
				const responseJson = await error.response.json<ErrorResponse>()
				toast.error(responseJson.message)
			}
		}
	}

	const editPost = async (postid: string, payload: { content: string; image?: string }) => {
		try {
			await patchPostsMutation.mutateAsync({ params: { postId: postid, ...payload } })

			toast('Публикация обновлена')
		} catch (error) {
			if (error instanceof HTTPError) {
				const responseJson = await error.response.json<ErrorResponse>()
				toast.error(responseJson.message)
			}
		}
	}

	return {
		functions: {
			deletePost,
			editPost,
		},
	}
}
