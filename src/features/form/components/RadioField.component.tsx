import { useFormContext } from 'react-hook-form';

// components
import ErrorField from './ErrorField.component';
import HelperText from './HelperText.component';

// utils
import { cn } from '../../../utils/cn';

// types
import { IRadioFieldProps } from '../types/formElements.types';

const RadioField: React.FC<IRadioFieldProps> = ({
	label,
	options,
	helperText = '',
	name,
	disabled = false,
	type = 'radio',
	...rest
}) => {
	// retrieve all useForm() hook methods
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<fieldset>
			<div>
				<p className="relative text-base font-medium capitalize text-evl-black-900">
					{label}
				</p>
			</div>

			<div className="relative mt-1 flex flex-wrap items-center gap-2 sm:gap-5">
				{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
				{options?.map(({ label, value }: any) => (
					<div key={value} className="flex items-center gap-1.5">
						<input
							{...register(name)} // register with same name for all radio buttons
							{...rest}
							type={type}
							id={value}
							value={value}
							disabled={disabled}
							className={cn(
								'border-solname border border-evl-black-500 bg-white text-evl-primary checked:ring-0 checked:ring-offset-0 focus:ring-0'
							)}
							aria-describedby={label}
						/>
						<label htmlFor={value} className="capitalize text-evl-black-750">
							{label}
						</label>
					</div>
				))}
			</div>

			{/* for error message or helper messages */}
			<div className="mt-1">
				{helperText !== '' && <HelperText helperText={helperText} />}
				{errors[name] && <ErrorField name={name} />}
			</div>
		</fieldset>
	);
};

export default RadioField;
