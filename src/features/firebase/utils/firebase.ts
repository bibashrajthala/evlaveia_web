import { initializeApp } from 'firebase/app';
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	sendEmailVerification,
} from 'firebase/auth';
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from 'firebase/firestore';
import { firebaseConfig } from './config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const q = query(collection(db, 'users'), where('uid', '==', user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, 'users'), {
				uid: user.uid,
				name: user.displayName,
				authProvider: 'google',
				email: user.email,
			});
		}
		return res.user;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		// console.error(err);
		alert(err.message);
	}
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
	try {
		const res = await signInWithEmailAndPassword(auth, email, password);

		if (!res?.user?.emailVerified) {
			await sendEmailVerification(res.user);
			alert('Check you email for email verification');
			return false;
		}

		return res.user;

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		// console.error(err);
		alert(err.message);
	}
};

const registerWithEmailAndPassword = async (
	name: string,
	email: string,
	password: string
) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;

		await logout();

		await addDoc(collection(db, 'users'), {
			uid: user.uid,
			name,
			authProvider: 'local',
			email,
		});
		await sendEmailVerification(res.user);

		return true;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		// console.error(err);
		alert(err.message);
	}
};

const sendPasswordResetMail = async (email: string) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert('Password reset link sent!');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		// console.error(err);
		alert(err.message);
	}
};

const logout = async () => {
	await signOut(auth);
};

export {
	auth,
	db,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordResetMail,
	logout,
};
