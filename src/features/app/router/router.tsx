import { createBrowserRouter } from 'react-router-dom';

// containers
import ErrorPage from '../containers/ErrorPage.container';
import ErrorBoundaryLayout from '../containers/ErrorBoundaryLayout.container';
import App from '../../../App';
import Login from '../../auth/containers/Login.container';
import Register from '../../auth/containers/Register.container';
import ForgotPassword from '../../auth/containers/ForgotPassword.container';
import TermsAndConditions from '../../terms-amd-conditions/containers/TermsAndConditions.container';
import Home from '../../home/containers/Home.container';

// router
export const router = createBrowserRouter([
	{
		element: <ErrorBoundaryLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <App />,
				children: [
					{
						index: true,
						element: <Login />,
					},
					{
						path: 'register',
						element: <Register />,
					},
					{
						path: 'forgot-password',
						element: <ForgotPassword />,
					},
					{
						path: 'terms-and-conditions',
						element: <TermsAndConditions />,
					},
					{
						path: 'home',
						element: <Home />,
					},
				],
			},
		],
	},
]);
