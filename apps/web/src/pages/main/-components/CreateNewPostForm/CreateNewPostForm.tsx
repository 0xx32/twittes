import clsx from 'clsx'
import { Image, Smile } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui'
import { useProfile } from '@/utils/contexts/profile'

import { useCreateNewForm } from './useCreateNewForm'

export const CreateNewPostForm = () => {
	const { profile } = useProfile()

	const { state, refs, functions } = useCreateNewForm()

	React.useLayoutEffect(() => {
		functions.autoResize()
	}, [])

	return (
		<div>
			<div
				className={clsx('rounded-board bg-white/70 p-4  dark:bg-board flex gap-3', {
					'shadow-lg border transition-all': state.fieldFocus,
				})}
			>
				<div>
					{profile.picture && (
						<img src={profile.picture} alt="" className="h-14 w-14 rounded-full" />
					)}
					{!profile.picture && <div className="h-10 w-10 rounded-full bg-accent"></div>}
				</div>

				<form className="flex-1 pt-[6px]" onSubmit={functions.handleSubmit}>
					<textarea
						ref={refs.fieldRef}
						name="new-post"
						onFocus={() => functions.setFieldFocus(true)}
						onBlur={() => functions.setFieldFocus(false)}
						onChange={functions.newPostOnChange}
						className="w-full bg-transparent text-lg font-semibold focus:outline-none"
						placeholder="Что происходит?"
						value={state.newPostValue}
					/>

					<div>
						{state.uploadedFile && (
							<img
								src={`http://localhost:400/${state.uploadedFile.filePath}`}
								className="rounded-board"
								alt=""
							/>
						)}
					</div>

					<div className="mt-3 flex items-center gap-2 border-t pt-3">
						<label className="cursor-pointer">
							<input type="file" className="hidden" onChange={functions.selectFile} />
							<i className="block rounded-full p-2 transition-colors hover:bg-accent/30">
								<Image size={20} />
							</i>
						</label>

						<button type="button">
							<Smile size={20} />
						</button>

						<Button className="ml-a"> Отправить </Button>
					</div>
				</form>
			</div>
		</div>
	)
}
