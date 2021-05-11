import React, { useState } from "react";

function Register() {
	const [email, setEmail] = useState(" ");
	const [password, setPassword] = useState(" ");
	const [validForm, setValidForm] = useState();
	const [error, setError] = useState(" ");

	async function sendData() {
		const response = await fetch("http://localhost:6789/register", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ mail: email, password: password }),
			credentials: "include",
		});
		if (response.status !== 200) {
			setError("please, try again!");
		}
	}

	return (
		<div>
			<div className="container mt-5 w-25">
				<h1 className="h1">Register</h1>
				<div>
					<div className="form-group">
						<label>Email address</label>
						<input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
					</div>
					<button onClick={sendData} disabled={password.length < 6 || email.length === 0} className="btn btn-primary">
						Register
					</button>
					<h1 className="text-danger">{error}</h1>
				</div>
			</div>
		</div>
	);
}

export default Register;
