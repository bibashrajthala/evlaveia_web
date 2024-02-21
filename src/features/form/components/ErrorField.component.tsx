import { useFormContext } from 'react-hook-form';

// utils
import { cn } from '../../../utils/cn';

// types
type IFieldProps = {
	name: string;
	fieldSize?: 'default' | 'small';
};

const ErrorField: React.FC<IFieldProps> = ({ name, fieldSize = 'default' }) => {
	// the useFormContext hook returns the current state of hook form.
	const {
		formState: { errors },
	} = useFormContext();

	if (!name) return null;

	const error = errors[name];

	if (!error) return null;

	return (
		<span
			className={cn('text-sm text-red-500', {
				'text-xs 2xl:text-sm': fieldSize === 'small',
				'text-sm': fieldSize === 'default',
			})}
		>
			{error?.message?.toString()}
		</span>
	);
};
export default ErrorField;
