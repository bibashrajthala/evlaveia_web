import { Outlet, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

// context
import { UserContext } from '../../user/context/User.context';

const PublicRoute = () => {
	const navigate = useNavigate();

	const { user } = useContext(UserContext);

	const loadingContent = (
		<div className="flex h-screen w-full items-center justify-center text-center">
			Loading...
		</div>
	);

	useEffect(() => {
		if (user) navigate('/home', { replace: true });
	}, [user]);

	if (!user) return <Outlet />;

	return <>{loadingContent}</>;
};

export default PublicRoute;
