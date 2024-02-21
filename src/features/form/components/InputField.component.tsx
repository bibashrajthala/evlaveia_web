import { useFormContext } from 'react-hook-form';

// utils
import { cn } from '../../../utils/cn';

// components
import ErrorField from './ErrorField.component';
import HelperText from './HelperText.component';

// types
import { IInputFieldProps } from '../types/formElements.types';

const InputField: React.FC<IInputFieldProps> = ({
	label,
	placeholder = '',
	helperText = '',
	name,
	type = 'text',
	disabled = false,
	fieldSize = 'default',
	required,
	...rest
}) => {
	// retrieve all useForm() hook methods
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<fieldset>
			<label
				htmlFor={name}
				className={cn('font-medium capitalize text-evl-black-900', {
					'text-xs 2xl:text-sm': fieldSize === 'small',
				})}
			>
				{label} {required && <span className="text-gyj-red">*</span>}
			</label>
			<div className="relative mt-1">
				<input
					{...register(name, {
						// valueAsNumber: type === 'number',
						setValueAs: (value) =>
							type === 'number'
								? isNaN(value) || !value
									? undefined
									: Number(value)
								: value,
					})}
					{...rest}
					type={type}
					id={name}
					disabled={disabled}
					className={cn(
						'h-11 w-full rounded border-[0.6px] border-solid border-evl-black-500 px-2  text-sm shadow-sm placeholder:text-sm placeholder:text-evl-black-500 after:inset-x-0 after:bottom-0 after:w-full  after:content-none focus:border focus:border-b-2 focus:border-evl-black-500  focus:border-evl-primary  focus:outline-none focus:ring-0 focus:ring-offset-0',
						{
							'cursor-not-allowed bg-evl-black-50  focus:border-gray-300 ':
								disabled,
							'bg-white ': !disabled,

							'focus:border-gyj-red': !!errors[name],
							'!h-10 text-xs placeholder:text-xs focus:border-b-4 2xl:text-sm  2xl:placeholder:text-sm':
								fieldSize === 'small',
						}
					)}
					placeholder={placeholder}
					aria-describedby={name}
				/>
			</div>

			{/* for error message or helper messages */}
			<div
				className={cn({
					'mt-0.5': fieldSize === 'small',
					'mt-1': fieldSize === 'default',
				})}
			>
				{helperText !== '' && <HelperText helperText={helperText} />}
				{errors[name] && <ErrorField name={name} fieldSize={fieldSize} />}
			</div>
		</fieldset>
	);
};

export default InputField;
