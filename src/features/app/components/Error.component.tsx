type ErrorProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	error: any;
};
const Error = ({ error }: ErrorProps) => {
	return (
		<div>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error?.statusText || error?.message}</i>
			</p>
		</div>
	);
};

export default Error;
