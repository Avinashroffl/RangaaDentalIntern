import React from "react";
import "./App.css";
import Header from "./Header.js";
import Input from "./Input.js";
import Login from "./login.js";

export let islogin = true;
console.log(islogin);

function App() {
	return (
		<>
			{islogin ? (
				<>
					<Header />
					<input type='text' placeholder='Search' style={{ float: "right" }} />
					<Input />
				</>
			) : (
				<Login />
			)}
		</>
	);
}

export default App;
