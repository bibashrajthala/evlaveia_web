import { Outlet, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

// firebase
import { query, collection, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebase/utils/firebase';
import type { User } from 'firebase/auth';

// firebase
import { UserContext } from '../../user/context/User.context';

const ProtectedRoute = () => {
	const navigate = useNavigate();

	const { user, setName } = useContext(UserContext);

	const fetchUserName = async (user: User) => {
		try {
			const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
			const doc = await getDocs(q);
			const data = doc.docs[0].data();
			setName(data.name);
		} catch (err) {
			// console.error(err);
			alert('An error occured while fetching user data');
		}
	};

	const loadingContent = (
		<>
			<div className="flex h-screen w-full items-center justify-center text-center">
				Loading...
			</div>
		</>
	);

	useEffect(() => {
		user && user.emailVerified
			? fetchUserName(user)
			: navigate('/', { replace: true });
	}, [user]);

	if (user) return <Outlet />;

	return loadingContent;
};

export default ProtectedRoute;
