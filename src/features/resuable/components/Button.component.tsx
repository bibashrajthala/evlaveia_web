import React, { ReactNode } from 'react';

// utils
import { cn } from '../../../utils/cn';

// types
type IButtonProps = {
	variant?: 'primary' | 'secondary' | 'outlined' | 'tertiary';
	className?: string;
	children: ReactNode;
	size?: 'large' | 'small';
	isSubmitting?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({
	variant = 'primary',
	className = '',
	children,
	disabled = false,
	isSubmitting = false,
	size = 'large',
	...rest
}) => {
	return (
		<>
			<button
				className={cn(
					'flex min-w-max max-w-fit items-center justify-center rounded border border-solid text-sm font-medium 2xl:text-base',
					{
						'border-transparent bg-evl-primary px-8 py-2 text-white transition-all duration-200 ease-in hover:bg-[#01a76f] ':
							variant === 'primary',
						' border-evl-primary px-8 py-2 text-evl-primary transition-all duration-150 ease-in-out hover:bg-zinc-100':
							variant === 'outlined',
						'gap-1 border-none text-evl-primary transition-opacity duration-150 ease-in hover:opacity-80':
							variant === 'secondary',
						'gap-1 rounded-md border-none bg-evl-black-900 px-2.5 py-1.5 text-white transition-opacity duration-150 ease-in hover:opacity-90 2xl:px-3 2xl:py-2.5':
							variant === 'tertiary',
						'cursor-not-allowed': isSubmitting || disabled,
						'px-8 py-2 text-sm ': size === 'large',
						'!px-4 text-xs': size === 'small',
					},
					className
				)}
				disabled={disabled || isSubmitting}
				{...rest}
			>
				{isSubmitting ? (
					<div className="flex animate-pulse justify-center">Processing...</div>
				) : (
					<> {children}</>
				)}
			</button>
		</>
	);
};

export default Button;
