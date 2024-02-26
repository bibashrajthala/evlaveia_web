import { useNavigate } from 'react-router-dom';

// utils
// import { cn } from '../../../utils/cn';

const EmailSent = () => {
	const navigate = useNavigate();

	const navigateToLogin = () => {
		navigate('/');
	};

	// const handleResentVerificationLink = () => {
	// 	if (resentEmailVerifcationLink?.isLoading) return;
	// 	if (!email) return;
	// 	resentEmailVerifcationLink.mutate(
	// 		{ email: email as string },
	// 		{
	// 			onSuccess: (data) => {
	// 				toast.success(data?.message ? data?.message : 'Successfully resent!');
	// 			},
	// 		}
	// 	);
	// };

	return (
		<>
			<section className="mx-auto my-24 max-w-full space-y-8 rounded-lg bg-white p-16 sm:max-w-2xl md:max-w-3xl">
				<h3 className="text-4xl font-semibold">Check your email to verify</h3>

				<div className="text-gyj-black-750 space-y-20 text-lg">
					<div className="space-y-8">
						<div>
							<p>Hi there,</p>
							<p>
								We’re excited to have you onboard! We have sent a verification
								link on the provided email. Please verify your account.
							</p>
						</div>
						{/* 
						<p>
							Didn’t receive the verification link ?{' '}
							<span
								className={cn('text-gyj-primary font-medium', {
									'cursor-not-allowed': resentEmailVerifcationLink?.isLoading,
									'cursor-pointer': !resentEmailVerifcationLink?.isLoading,
								})}
								onClick={handleResentVerificationLink}
							>
								{resentEmailVerifcationLink?.isLoading
									? 'Sending...'
									: 'Resend'}
							</span>
						</p> */}

						<p>
							Already verified?{' '}
							<span
								className="text-gyj-primary cursor-pointer font-medium"
								onClick={navigateToLogin}
							>
								Log In
							</span>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default EmailSent;
