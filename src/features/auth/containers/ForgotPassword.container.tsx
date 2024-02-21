// image
import SearchImage from '../../../assets/auth/forgot-password/search.svg';

// components
import ForgotPasswordForm from '../components/ForgotPasswordForm.component';

const ForgotPasswordContainer = () => {
	return (
		<section className="text-gyj-black-750 my-10 mb-28">
			<div className="mx-auto flex max-w-md flex-col justify-center gap-6 py-5">
				<div className="m-auto max-w-md items-center  text-center">
					<h2 className="text-gyj-black-900 text-[1.8rem] font-semibold capitalize">
						Forgot Password?
					</h2>
					<p className="mt-3">
						Dont't worry ! It happens. Please provide you email, we will send
						you link to reset your password.
					</p>
				</div>

				<div className="relative h-64">
					<img
						src={SearchImage}
						alt="Man search image"
						className="h-full w-full rounded-lg"
						sizes="w-full object-contain"
					/>
				</div>

				<div>
					<ForgotPasswordForm />
				</div>
			</div>
		</section>
	);
};

export default ForgotPasswordContainer;
