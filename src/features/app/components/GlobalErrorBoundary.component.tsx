('use client');

import { useErrorBoundary } from 'react-error-boundary';

// types
type ErrorProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	error: any;
};

const GlobalErrorBoundary = ({ error }: ErrorProps) => {
	const { resetBoundary } = useErrorBoundary();

	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre style={{ color: 'red' }}>{error.message}</pre>
			<button onClick={resetBoundary}>Try again</button>
		</div>
	);
};

export default GlobalErrorBoundary;
