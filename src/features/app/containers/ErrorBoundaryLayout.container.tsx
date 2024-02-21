import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

// components
import GlobalErrorBoundary from '../components/GlobalErrorBoundary.component';

const ErrorBoundaryLayout = () => (
	<ErrorBoundary FallbackComponent={GlobalErrorBoundary}>
		<Outlet />
	</ErrorBoundary>
);

export default ErrorBoundaryLayout;
