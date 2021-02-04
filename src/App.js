import React, { useEffect } from "react";
import { auth } from "./firebase";

import Header from "./Header.js";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";

import "./App.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// user is logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoUrl,
					})
				);
			} else {
				// user is logged out
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className="app">
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Sidebar />
					<Feed />
					{/* widgets */}
				</div>
			)}
		</div>
	);
}

export default App;
