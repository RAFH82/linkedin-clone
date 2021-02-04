import React from "react";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
	const user = useSelector(selectUser);
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
