import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

// context
import { UserContext } from '../../user/context/User.context';

// firebase
import { logInWithEmailAndPassword } from '../../firebase/utils/firebase';

// components
import FormControl from '../../form/components/FormControl.component';
import Button from '../../resuable/components/Button.component';

// validation
import {
	ZEmail,
	ZPassword,
	ZSingleCheckbox,
} from '../validations/login.validation';

const loginSchema = z.object({
	email: ZEmail,
	password: ZPassword,
	rememberMe: ZSingleCheckbox,
});

// extracting the type
export type ILoginSchema = z.infer<typeof loginSchema>;

const defaultValues: ILoginSchema = {
	email: '',
	password: '',
	rememberMe: false,
};
const LoginForm = () => {
	const { setCurrentUser } = useContext(UserContext);
	const navigate = useNavigate();

	const methods = useForm<ILoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues,
	});

	const onSubmit = async (values: ILoginSchema) => {
		// console.log('values', values);
		const user = await logInWithEmailAndPassword(
			values?.email,
			values?.password
		);

		if (user) {
			setCurrentUser(user);
			navigate('/home');
		}
	};
	const handleForgotPassword = () => {
		navigate('/forgot-password');
	};

	const navigateToRegisterPage = () => {
		navigate('/register');
	};
	return (
		<div className="w-full text-evl-black-750">
			{/* provide all useForm() methods to nested inputs throudh useFormContext()  */}
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(onSubmit)}
					className="flex flex-col gap-y-5"
					autoComplete="on"
				>
					<FormControl
						control="input"
						name="email"
						type="text"
						label="Email"
						placeholder="Enter Username or Email"
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

					<div className="-mt-4 flex items-center justify-between text-evl-black-500">
						<FormControl
							control="input"
							type="checkbox"
							multiple={false}
							name="rememberMe"
							label="Remember me"
						/>
						<span className="cursor-pointer" onClick={handleForgotPassword}>
							Forgot Password?
						</span>
					</div>

					<Button
						variant="primary"
						className="w-full max-w-none"
						type="submit"
						//   isSubmitting={loginMutation?.isLoading}
					>
						Login
					</Button>

					<p className="text-center">
						Do not have an account?{' '}
						<span
							className="cursor-pointer text-evl-primary"
							onClick={navigateToRegisterPage}
						>
							Sign Up
						</span>
					</p>
				</form>
			</FormProvider>
		</div>
	);
};

export default LoginForm;
