import type { VariantProps } from 'class-variance-authority'

import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { cn } from '@/utils/lib/utils'

import { buttonVariants } from './buttonVariants'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = ({
	ref,
	className,
	variant,
	size,
	asChild = false,
	...props
}: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
	const Comp = asChild ? Slot : 'button'
	return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
}
Button.displayName = 'Button'

export { Button }
