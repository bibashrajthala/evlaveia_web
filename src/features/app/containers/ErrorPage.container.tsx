import { useRouteError } from 'react-router-dom';

// components
import Error from '../components/Error.component';

export default function ErrorPage() {
	const error = useRouteError();

	// console.error(error);

	return (
		<>
			<Error error={error} />
		</>
	);
}
