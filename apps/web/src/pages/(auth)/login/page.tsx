import { Link } from '@tanstack/react-router'

import {
	Button,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from '@/components/ui'

import { useLoginForm } from './hooks'

export const LoginPage = () => {
	const { form, functions, state } = useLoginForm()

	return (
		<div className="h-screen flex flex-col justify-center">
			<div className="mx-auto w-full flex flex-col justify-center sm:w-[350px] space-y-6">
				<div className="flex flex-col text-center space-y-2">
					<h1 className="text-2xl font-semibold tracking-tight">Вход в систему</h1>
					<p className="text-sm text-muted-foreground">Введите имя пользователя и пароль</p>
				</div>

				<Form {...form}>
					<form onSubmit={functions.onSubmit}>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel />
									<FormControl>
										<Input placeholder="Имя пользователя" {...field} />
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel />
									<FormControl>
										<Input placeholder="Пароль" {...field} />
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button className="mt-4 w-full" disabled={state.loading}>
							Войти
						</Button>
					</form>
					<p>
						Нет аккаунта?{' '}
						<Link to="/register" className="text-blue-500">
							{' '}
							зарегистрироваться
						</Link>
					</p>
				</Form>
			</div>
		</div>
	)
}
