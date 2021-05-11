import React, { useState } from "react";

function Login() {
	const [email, setEmail] = useState(" ");
	const [password, setPassword] = useState(" ");
	const [error, setError] = useState(" ");

	async function sendData() {
		const response = await fetch("http://localhost:6789/login", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ mail: email, password: password }),
			credentials: "include",
		});

		if (response.status !== 200) {
			setError("wrong password!");
		}
	}
	return (
		<div className="container mt-5 w-25">
			<div>
				<h1 className="h1">Log In</h1>
				<div className="form-group">
					<label>Email address</label>
					<input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email" />
				</div>
				<div className="form-group">
					<label>Password</label>
					<input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
				</div>
				<button onClick={sendData} className="btn btn-primary">
					Submit
				</button>
			</div>
		</div>
	);
}

export default Login;
