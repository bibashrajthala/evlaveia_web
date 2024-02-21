import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// components
import FormControl from '../../form/components/FormControl.component';
import Button from '../../resuable/components/Button.component';

// validation
import { ZEmail } from '../validations/forgetPassword.validation';

const forgotPasswordValidationSchema = z.object({
	email: ZEmail,
});

// extracting the type
export type IForgotPasswordValidationSchema = z.infer<
	typeof forgotPasswordValidationSchema
>;

const defaultValues: IForgotPasswordValidationSchema = {
	email: '',
};

const ForgotPasswordForm = () => {
	const methods = useForm<IForgotPasswordValidationSchema>({
		resolver: zodResolver(forgotPasswordValidationSchema),
		defaultValues,
	});

	const onSubmit = (_values: IForgotPasswordValidationSchema) => {
		// console.log('values', values);
	};
	return (
		<div>
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(onSubmit)}
					className="flex flex-col gap-y-4"
				>
					<FormControl
						control="input"
						name="email"
						type="text"
						label="Email"
						placeholder="Enter Email"
						required
					/>

					<Button
						variant="primary"
						className="w-full max-w-none"
						type="submit"
						// isSubmitting={requestPasswordResetCode?.isLoading}
					>
						Send
					</Button>
				</form>
			</FormProvider>
		</div>
	);
};

export default ForgotPasswordForm;
