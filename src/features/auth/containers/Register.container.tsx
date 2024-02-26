// images
import GoogleIcon from '../../../assets/auth/login/google.png';
import AppleIcon from '../../../assets/auth/login/apple.png';

// components
import RegisterForm from '../components/RegisterForm.component';

// firebase
import { signInWithGoogle } from '../../firebase/utils/firebase';

const RegisterContainer = () => {
	const handleGoogleLogin = async () => {
		await signInWithGoogle();
	};

	const handleAppleLogin = () => {};

	return (
		<div className="flex min-h-screen items-center justify-center bg-[#f8f8f8] py-20">
			<div className="flex w-11/12 flex-col gap-y-10 rounded-3xl border border-[#effcf8] bg-white p-6 text-sm sm:w-fit sm:min-w-[450px] sm:p-12 2xl:min-w-[600px]">
				{/* heading */}
				<div className="text-center">
					<h2 className="text-gyj-black-900 text-[1.8rem] font-semibold capitalize leading-10 ">
						Sign Up
					</h2>
					<p className="text-gyj-black-750  mt-2">
						Let’s get started. Fill the details below to continue.
					</p>
				</div>

				{/* form  */}
				<RegisterForm />

				{/* OAuth buttons */}
				<div className="flex flex-col items-center gap-y-4">
					<p className="text-evl-black-500">Or continue with</p>

					<div className="flex items-center gap-3">
						<button
							onClick={handleGoogleLogin}
							className="flex aspect-square w-[60px] items-center justify-center rounded-lg bg-[#f6f6f6] duration-200 hover:bg-slate-100"
						>
							<img
								src={GoogleIcon}
								alt="google"
								width={26}
								height={26}
								className="object-contain"
							/>
						</button>

						<button
							onClick={handleAppleLogin}
							className="flex aspect-square w-[60px] items-center justify-center rounded-lg bg-[#f6f6f6] duration-200 hover:bg-slate-100"
						>
							<img
								src={AppleIcon}
								alt="apple"
								width={26}
								height={26}
								className="object-contain"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterContainer;
