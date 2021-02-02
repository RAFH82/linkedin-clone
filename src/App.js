import React from "react";
import "./App.css";
import Header from "./Header.js";

function App() {
	return (
		<div className="app">
			<Header />
			{/* App body */}
			<div className="app__body">
				<Sidebar />
			</div>
			{/* sidebar */}
			{/* feed */}
			{/* widgets */}
		</div>
	);
}

export default App;
