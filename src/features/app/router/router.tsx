import { createBrowserRouter } from 'react-router-dom';

// error
import ErrorPage from '../containers/ErrorPage.container';
import ErrorBoundaryLayout from '../containers/ErrorBoundaryLayout.container';

// app
import App from '../../../App';

// routes
import PublicRoute from '../../routes/components/Public.route';
import ProtectedRoute from '../../routes/components/Protected.route';

// containers
import Login from '../../auth/containers/Login.container';
import Register from '../../auth/containers/Register.container';
import ForgotPassword from '../../auth/containers/ForgotPassword.container';
import TermsAndConditions from '../../terms-amd-conditions/containers/TermsAndConditions.container';
import Home from '../../home/containers/Home.container';
import EmailSent from '../../email-verification/containers/EmailSent.container';

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
						element: <PublicRoute />,
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
								path: 'email-sent',
								element: <EmailSent />,
							},
						],
					},
					{
						element: <ProtectedRoute />,
						children: [
							{
								path: 'home',
								element: <Home />,
							},
						],
					},
				],
			},
		],
	},
]);
