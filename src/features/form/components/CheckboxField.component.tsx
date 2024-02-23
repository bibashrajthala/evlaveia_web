import { useFormContext } from 'react-hook-form';

// components
import ErrorField from './ErrorField.component';
import HelperText from './HelperText.component';

// utils
import { cn } from '../../../utils/cn';

// types
import { ICheckboxFieldProps } from '../types/formElements.types';

const Checkbox: React.FC<ICheckboxFieldProps> = ({
	label,
	options,
	helperText = '',
	name,
	disabled = false,
	type = 'checkbox',
	multiple = false,
	fieldSize = 'default',
	...rest
}) => {
	// retrieve all useForm() hook methods
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<fieldset>
			{multiple && (
				<div>
					<p
						className={cn(
							'text-gyj-black-900  relative font-medium capitalize',
							{
								'text-xs 2xl:text-sm': fieldSize === 'small',
							}
						)}
					>
						{label}
					</p>
				</div>
			)}

			<div className="relative mt-2 flex flex-wrap items-center gap-5">
				{/* for single checkbox */}
				{!multiple && (
					<div className="flex items-center gap-1.5">
						<input
							{...register(name)} // register with same name for all radio buttons
							{...rest}
							type={type}
							id={label}
							disabled={disabled}
							className={cn(
								'text-white accent-evl-primary checked:ring-0 focus:ring-0'
							)}
							aria-describedby={label}
						/>
						<label htmlFor={label} className="capitalize">
							{label}
						</label>
					</div>
				)}

				{/* for multiple checkboxes  */}
				{multiple &&
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					options?.map(({ label, value }: any) => (
						<div key={value} className="flex flex-wrap items-center gap-1.5">
							<input
								{...register(name)} // register with same name for all radio buttons
								{...rest}
								type={type}
								id={label}
								value={value}
								disabled={disabled}
								className={cn(
									'text-white accent-evl-primary checked:ring-0 focus:ring-0'
								)}
								aria-describedby={label}
							/>
							<label
								htmlFor={label}
								className={cn('capitalize', {
									'text-xs 2xl:text-sm ': fieldSize === 'small',
								})}
							>
								{label}
							</label>
						</div>
					))}
			</div>

			{/* for error message or helper messages */}
			<div className="mt-1">
				{!!helperText && <HelperText helperText={helperText} />}
				{errors[name] && <ErrorField name={name} fieldSize={fieldSize} />}
			</div>
		</fieldset>
	);
};

export default Checkbox;
