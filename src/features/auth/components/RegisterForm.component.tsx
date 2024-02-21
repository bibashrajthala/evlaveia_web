import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

// components
import FormControl from '../../form/components/FormControl.component';
import Button from '../../resuable/components/Button.component';

// validation
import {
	ZFullName,
	ZEmail,
	ZPassword,
	ZConFirmPassword,
	ZSingleCheckbox,
} from '../validations/register.validation';

const loginSchema = z
	.object({
		name: ZFullName,
		email: ZEmail,
		password: ZPassword,
		confirmPassword: ZConFirmPassword,
		termsAndConditions: ZSingleCheckbox,
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Password doesnot match.',
	});

// extracting the type
export type TRegisterSchema = z.infer<typeof loginSchema>;

const defaultValues: TRegisterSchema = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
	termsAndConditions: false,
};
const LoginForm = () => {
	const navigate = useNavigate();

	const methods = useForm<TRegisterSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues,
	});

	const onSubmit = (_values: TRegisterSchema) => {
		// console.log('values', values);
		navigate('/home');
	};
	const navigateToTermsAndCondition = () => {
		navigate('/terms-and-conditions');
	};

	const navigateToLoginPage = () => {
		navigate('/');
	};
	return (
		<div className="text-gyj-black-750 w-full">
			{/* provide all useForm() methods to nested inputs throudh useFormContext()  */}
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(onSubmit)}
					className="flex flex-col gap-y-4"
				>
					<FormControl
						control="input"
						name="name"
						type="text"
						label="Full Name"
						placeholder="Enter Full Name"
						required
					/>
					<FormControl
						control="input"
						name="email"
						type="text"
						label="Email"
						placeholder="Enter Email"
						required
					/>
					<FormControl
						control="input"
						name="password"
						type="password"
						label="Password"
						placeholder="Enter Password"
						required
					/>
					<FormControl
						control="input"
						name="confirmPassword"
						type="password"
						label="Confirm Password"
						placeholder="Confirm Password"
						required
					/>

					<div className="-mt-3">
						<FormControl
							control="input"
							type="checkbox"
							multiple={false}
							label={
								<p>
									Agree to the{' '}
									<span
										className="cursor-pointer text-evl-primary"
										onClick={navigateToTermsAndCondition}
									>
										Terms and Conditions
									</span>
								</p>
							}
							name="termsAndConditions"
						/>
					</div>

					<Button
						variant="primary"
						className="w-full max-w-none"
						type="submit"
						// isSubmitting={registerMutation?.isLoading}
						disabled={!methods?.watch('termsAndConditions')}
						title={
							!methods?.watch('termsAndConditions')
								? 'Please accept terms and conditions'
								: ''
						}
					>
						Sign Up
					</Button>

					<p className="text-center">
						Already have an account?{' '}
						<span
							className="cursor-pointer text-evl-primary"
							onClick={navigateToLoginPage}
						>
							Log In
						</span>
					</p>
				</form>
			</FormProvider>
		</div>
	);
};

export default LoginForm;
