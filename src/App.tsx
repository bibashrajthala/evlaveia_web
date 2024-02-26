// css
import './global.css';

import { Outlet } from 'react-router-dom';

// providers
import UserContextProvider from './features/user/context/User.context';

const App = () => {
	return (
		<div className="font- text-black antialiased">
			<UserContextProvider>
				<Outlet />
			</UserContextProvider>
		</div>
	);
};

export default App;
