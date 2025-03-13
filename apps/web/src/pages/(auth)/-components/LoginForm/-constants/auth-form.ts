import * as v from 'valibot'

const requredMessage = 'Обязательное поле'

export const loginFormSchema = v.object({
	username: v.pipe(v.string(requredMessage), v.minLength(4, 'Минимальное количество символов 4')),
	password: v.pipe(v.string(requredMessage), v.minLength(4, 'Минимальное количество символов 4')),
})

export type LoginFormSchema = v.InferOutput<typeof loginFormSchema>
