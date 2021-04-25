import React, { createContext, useContext, useState } from 'react';
import './Login.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import CreateUser from '../CreateUser/CreateUser';
import { UserContext } from '../../App';
import SignInUser from '../SignInUser/SignInUser';
import { useHistory, useLocation } from 'react-router';
export const InfoContext = createContext();

const Login = () => {
	let history = useHistory();
	let location = useLocation();
	const provider = new firebase.auth.GoogleAuthProvider();
	let { from } = location.state || { from: { pathname: '/' } };
	const [ loggedInInfo, setLoggedInInfo ] = useState({ name: '', email: '', isValidUser: false });
	const [ isNewUser, setIsNewUser ] = useState(false);
	const [logInInfo, setLogInInfo] = useState({ email: '', password: '' });
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
	const [ user, setUser ] = useContext(UserContext);

	//update userName
	const updateUser = (name) => {
		// console.log('update user is being called',name);
		let user = firebase.auth().currentUser;
		user
			.updateProfile({
				displayName: name
			})
			.then(function() {
				console.log('updated successfully');
			})
			.catch(function(error) {
				console.log('error happened');
			});
	};

	//google login
	const handleGoogleLogin = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				var credential = result.credential;
				var token = credential.accessToken;
				
				const userInfo = result.user;
				const newUser = { ...user };
				console.log('successful', userInfo);
				newUser.name = userInfo.displayName;
				newUser.email = userInfo.email;
				newUser.isValidUser = true;
				setUser(newUser);
				setSuccess('You are Successfully LoggedIn');
				setError('');
				history.replace(from);
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				
				var email = error.email;
				
				var credential = error.credential;
				setSuccess('');
				setError(errorMessage);
			});
		// event.preventDefault();
	};

	//create new user
	const handleSubmit = (event) => {
		console.log('submitting', user.email, user.password);
		if (user.isValidUser) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.password)
				.then((userCredential) => {
					const userinfo = userCredential.user;

					const newUser = { ...user };
					newUser.isValidUser = true;
					setUser(newUser);
					updateUser(user.name);
					setSuccess('You are Successfully LoggedIn');
					setError('');
					history.replace(from);
				})
				.catch((error) => {
					var errorCode = error.code;
					var errorMessage = error.message;
					setSuccess('');
					setError(errorMessage);
					// ..
				});
			// console.log("user is ready to submit");
		}
		event.preventDefault();
	};

	// handle login
	const handleLogIn = (event) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(logInInfo.email, logInInfo.password)
			.then((userCredential) => {
				var user = userCredential.user;
				console.log('successful', user);
				const { displayName, email } = user;
				const newUser = { ...user };
				newUser.name = displayName;
				newUser.email = email;
				newUser.isValidUser = true;
				setUser(newUser);
				setSuccess('You are Successfully LoggedIn');
				setError('');
				history.replace(from);
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				setSuccess('');
				setError(errorMessage);
			});
		// console.log(logInInfo.email,logInInfo.password);
		event.preventDefault();
	};

	return (
		<div className="d-flex container custom-container justify-content-center align-items-center">
			
			<div className="inner-container">
				<h3 className="text-danger">{ error}</h3>
				<h3 className="text-success">{ success}</h3>
				{isNewUser ? (
					<CreateUser
						handleSubmit={handleSubmit}
						setIsNewUser={setIsNewUser}
						setLoggedInInfo={setLoggedInInfo}
					/>
				) : (
					<SignInUser
						handleLogIn={handleLogIn}
						setIsNewUser={setIsNewUser}
						logInInfo={logInInfo}
						setLogInInfo={setLogInInfo}
					/>
				)}
				<p className="text-center">or</p>
				<div className="mt-1 button-container">
					<button onClick={handleGoogleLogin} className="login-button">
						<span>
							<img
								className="text-left"
								src="https://i.ibb.co/TgdQSf5/Group-573.png"
								alt="Group-573"
								border="0"
							/>
						</span>
						continue with google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
