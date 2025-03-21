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

import { useRegisterForm } from './hooks'

export const RegisterPage = () => {
	const { form, functions, state } = useRegisterForm()

	return (
		<div className="h-screen flex flex-col justify-center">
			<div className="mx-auto w-full flex flex-col justify-center sm:w-[350px] space-y-6">
				<div className="flex flex-col text-center space-y-2">
					<h1 className="text-2xl font-semibold tracking-tight">Зарегистрировать аккаунт</h1>
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
							name="displayName"
							render={({ field }) => (
								<FormItem>
									<FormLabel />
									<FormControl>
										<Input placeholder="Имя профиля" {...field} />
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
							Зарегистрироваться
						</Button>
					</form>
					<p>
						Если у вас уже есть аккаунт,{' '}
						<Link to="/login" className="text-blue-500">
							войти в систему
						</Link>
					</p>
				</Form>
			</div>
		</div>
	)
}
