// css
import './global.css';

import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<div className="font- text-black antialiased">
			<Outlet />
		</div>
	);
};

export default App;
