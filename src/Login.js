import React, { useState } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

import "./Login.css";

function Login() {
	const [name, setName] = useState("");
	const [photoURL, setPhotoURL] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const loginToApp = (event) => {
		event.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						ui: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						photoURL: userAuth.user.photoURL,
					})
				);
			})
			.catch((error) => {
				alert(error);
			});
	};

	const register = () => {
		if (!name) {
			return alert("Please enter a full name");
		}

		if (!email) {
			return alert("Email required");
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				// update the user
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: photoURL,
					})
					// update the redux data layer with the user data
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: photoURL,
							})
						);
					});
			})
			.catch((error) => {
				alert(error);
			});
	};

	return (
		<div className="login">
			<img
				src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
				alt=""
			/>

			<form>
				<input
					value={name}
					onChange={(event) => setName(event.target.value)}
					placeholder="Full name (required if registering)"
					type="text"
				/>
				<input
					value={photoURL}
					onChange={(event) => setPhotoURL(event.target.value)}
					placeholder="Profile pic URL (otional)"
					type="text"
				/>
				<input
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					placeholder="email"
					type="email"
				/>
				<input
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					placeholder="password"
					type="password"
				/>
				<button type="submit" onClick={loginToApp}>
					Sign In
				</button>
			</form>
			<p>
				Not a member?{" "}
				<span className="login__register" onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
