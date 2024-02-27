import { ReactNode, createContext, useEffect, useState } from 'react';

// firebase
import { auth } from '../../firebase/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import type { User } from 'firebase/auth';

type InitialState = {
	name: string;
	user?: User | null;
	setName: React.Dispatch<React.SetStateAction<string>>;
	setCurrentUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
};

const initialState: InitialState = {
	name: '',
	user: null,
	setName: () => {},
	setCurrentUser: () => {},
};

export const UserContext = createContext(initialState);

type UserContextProviderProps = {
	children: ReactNode;
};

const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [name, setName] = useState('');

	const [user, loading] = useAuthState(auth);
	// const [user, loading, error] = useAuthState(auth);

	const [currentUser, setCurrentUser] = useState<User | null | undefined>(user);

	useEffect(() => {
		if (user) setCurrentUser(user);
	}, [user]);

	const loadingContent = (
		<div className="flex h-screen w-full items-center justify-center text-center">
			Loading...
		</div>
	);

	if (loading) {
		return <>{loadingContent}</>;
	}

	return (
		<UserContext.Provider
			value={{ name, user: currentUser, setName, setCurrentUser }}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
