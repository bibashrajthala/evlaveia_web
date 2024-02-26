import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

// context
import { UserContext } from '../../user/context/User.context';

// logout
import { logout } from '../../firebase/utils/firebase';

// components
import Button from '../../resuable/components/Button.component';

const Home = () => {
	const navigate = useNavigate();
	const { name } = useContext(UserContext);

	const handleLogout = async () => {
		await logout();
		navigate('/');
	};
	return (
		<div className="my-40 flex flex-col items-center justify-center gap-2 text-center">
			<h2 className="text-2xl font-semibold">This is Home page.</h2>
			<h4 className="text-3xl font-bold">Hello {name}</h4>
			<Button onClick={handleLogout}>Logout</Button>
		</div>
	);
};

export default Home;
