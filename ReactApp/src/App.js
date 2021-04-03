import { useState } from "react";
import users from "./fake_data";

const App = () => {
	const [filteredEmployees, setFilteredEmployees] = useState(users);
	const [passwordsMatchError, setPasswordsMatchError] = useState("");
	const [enterPassword, setEnterPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	function handleSearch(e) {
		// const inputName = e.target.value.toLowerCase();
		// const result = [];

		// for (let index = 0; index < users.length; index++) { //parcurgem lista de useri
		//     const user = users[index].name; //userul de la iteratia curenta
		//     if (user.toLowerCase().includes(inputName)) { //verificam numele de la iteratia curenta
		//             //contine ce avem in input
		//             console.log(user);
		//             result.push(users[index])iiii;
		//         }
		// }
		// setFilteredEmployees(result);
		// let tempUsers = [...users];
		let filteredUsers = users.filter((user) => user.name.toLowerCase().includes(e.target.value.toLowerCase()));
		setFilteredEmployees(filteredUsers);
	}

	function changeNumber(employee, operation) {
		if (operation === "-") {
			employee.salary = employee.salary - 100;
		} else if (operation === "+") {
			employee.salary = employee.salary + 100;
		}

		// console.log(employee);
		// console.log(filteredEmployees);
		setFilteredEmployees([...filteredEmployees]);
	}

	const checkPasswordMatch = function () {
		if (enterPassword === confirmPassword) {
			setPasswordsMatchError("Passwords match!");
		} else {
			setPasswordsMatchError("Passwords do not match!");
		}
	};

	const setPassword = function (value) {
		setEnterPassword(value);
	};

	const setPasswordConfirm = function (value) {
		setConfirmPassword(value);
	};

	return (
		<>
			<header>
				<div className="container">
					<h1 className="logo">Are you Hooked?</h1>
				</div>
			</header>

			<section>
				<div className="container">
					<p className="error">{passwordsMatchError}</p>
					<p className="error"></p>
					<input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Enter your password" />
					<input onChange={(event) => setPasswordConfirm(event.target.value)} type="password" placeholder="Confirm your password" />
					<button onClick={() => checkPasswordMatch()}>Confirm password</button>
				</div>
			</section>

			<section>
				<div className="container">
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>
									<input onChange={(e) => handleSearch(e)} type="text" placeholder="Name..." />
								</th>
								<th>Age</th>
								<th>Salary</th>
							</tr>
						</thead>
						<tbody>
							{filteredEmployees.map((employee) => (
								<tr key={employee.id}>
									<th>{employee.id}</th>
									<td>{employee.name}</td>
									<td>{employee.age}</td>
									<td>
										<button onClick={() => changeNumber(employee, "-")}>-</button>
										<span>{employee.salary}</span>
										<button onClick={() => changeNumber(employee, "+")}>+</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>

			<footer>
				<div className="container">
					<p>
						API provided by <a href="http://www.dummy.restapiexample.com/">Dummy sample REST API</a>
					</p>
				</div>
			</footer>
		</>
	);
};

export default App;
