import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/logout">
					<Logout />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
