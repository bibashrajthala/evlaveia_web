import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

// utils
import { cn } from '../../../utils/cn';

// icons
import { HiEye, HiEyeOff } from 'react-icons/hi';

//components
import ErrorField from './ErrorField.component';
import HelperText from './HelperText.component';

// types
import { IPasswordFieldProps } from '../types/formElements.types';

const PasswordField: React.FC<IPasswordFieldProps> = ({
	label,
	placeholder = '',
	helperText = '',
	name,
	required,
	disabled = false,
	...rest
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const [showPassword, setShowPassword] = useState(false);
	const togglePassword = () => setShowPassword((prev) => !prev);

	return (
		<fieldset>
			<label
				htmlFor={name}
				className="font-medium capitalize text-evl-black-900"
			>
				{label} {required && <span className="text-gyj-red">*</span>}
			</label>
			<div className="relative mt-1">
				<input
					{...register(name)}
					{...rest}
					type={showPassword ? 'text' : 'password'}
					id={name}
					disabled={disabled}
					className={cn(
						'h-11 w-full rounded border-[0.6px] border-solid border-evl-black-500 px-2  text-sm shadow-sm placeholder:text-sm placeholder:text-evl-black-500 focus:border focus:border-b-2 focus:border-evl-black-500 focus:border-evl-primary  focus:outline-none focus:ring-0 focus:ring-offset-0',
						{
							'cursor-not-allowed bg-evl-black-50  focus:border-gray-300 ':
								disabled,
							'bg-white ': !disabled,

							'focus:border-gyj-red ': !!errors[name],
						}
					)}
					placeholder={placeholder}
					aria-describedby={name}
				/>

				{/* if there is no validation error show see password toggle button  */}
				{!errors[name] && (
					<button
						type="button"
						onClick={togglePassword}
						className=" absolute inset-y-0 right-0 mr-3 flex items-center rounded-lg p-1 outline-none"
					>
						{showPassword ? (
							<HiEyeOff className="cursor-pointer text-xl text-gray-500 hover:text-gray-600" />
						) : (
							<HiEye className="cursor-pointer text-xl text-gray-500 hover:text-gray-600" />
						)}
					</button>
				)}
			</div>

			{/* for error message or helper messages */}
			<div className="mt-1">
				{!!helperText && <HelperText helperText={helperText} />}
				{errors[name] && <ErrorField name={name} />}
			</div>
		</fieldset>
	);
};

export default PasswordField;
