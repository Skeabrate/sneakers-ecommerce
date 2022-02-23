import { useState, useContext } from 'react';
import firebase from '../firebase';
import AuthContext from '../Context/AuthContext';
import { useInfoOpen } from './useInfoOpen';
import { storage } from '../firebase';
import {
	SIGNED_UP,
	SENT_EMAIL,
	BLOCKED_ACC,
	BLOCKED_ACC_MINI,
	INVALID_EMAIL,
	INVALID_PASSWORD,
	INVALID_ACC_RES,
	CONNECTION_ERROR,
	CONNECTION_ERROR_RES,
	USER_DOESNT_EXIST,
	USER_DOESNT_EXIST_RES,
} from '../helpers/serverResponse.js';

export const useAuth = () => {
	const [loading, setLoading] = useState(false);

	const { setIsAuthenticated } = useContext(AuthContext);
	const resolveInfoOpen = useInfoOpen();

	const logInHandler = function (email, password) {
		setLoading(true);

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ uid, email }) => {
				storage
					.ref(`${uid}`)
					.getDownloadURL()
					.then((url) => {
						window.localStorage.setItem(
							'authToken',
							JSON.stringify([{ token: uid }, { email: email }, { image: url }])
						);
						setIsAuthenticated({
							token: uid,
							email: email,
							image: url,
						});
					})
					.catch((ex) => {
						console.log(ex);
						window.localStorage.setItem(
							'authToken',
							JSON.stringify([
								{ token: uid },
								{ email: email },
								{ image: false },
							])
						);
						setIsAuthenticated({
							token: uid,
							email: email,
							image: false,
						});
					});
			})
			.catch((error) => {
				// var errorCode = error.code;
				var errorMessage = error.message;
				let message;
				console.log(errorMessage);

				if (errorMessage === BLOCKED_ACC) message = BLOCKED_ACC_MINI;
				else if (
					errorMessage === INVALID_EMAIL ||
					errorMessage === INVALID_PASSWORD
				)
					message = INVALID_ACC_RES;
				else if (errorMessage === CONNECTION_ERROR)
					message = CONNECTION_ERROR_RES;
				else message = errorMessage;

				setLoading(false);
				resolveInfoOpen(message, false);

				return message;
			});
	};

	const logOutHandler = function () {
		firebase
			.auth()
			.signOut()
			.then(() => {
				// Sign-out successful.
				if (window.localStorage.getItem('authToken'))
					window.localStorage.removeItem('authToken');
				setIsAuthenticated(false);
				/* navigate('/login'); */
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
			});
	};

	const registerHandler = function (email, password) {
		setLoading(true);

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in

				setLoading(false);
				resolveInfoOpen(SIGNED_UP, true);
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorCode);

				setLoading(false);
				resolveInfoOpen(errorMessage, false);
			});
	};

	const resetPasswordHandler = function (email) {
		setLoading(true);

		firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then(() => {
				// Password reset email sent!
				// ..
				setLoading(false);
				resolveInfoOpen(SENT_EMAIL, true);
			})
			.catch((error) => {
				// var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorMessage);

				if (errorMessage === USER_DOESNT_EXIST)
					resolveInfoOpen(USER_DOESNT_EXIST_RES, false);

				setLoading(false);
			});
	};

	return {
		loading,
		logInHandler,
		logOutHandler,
		registerHandler,
		resetPasswordHandler,
	};
};
