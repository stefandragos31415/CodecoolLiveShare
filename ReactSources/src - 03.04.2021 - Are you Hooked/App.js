import { useState } from "react";
import users from "./fake_data";

const App = () => {
	const [filteredEmployees, setFilteredEmployees] = useState(users);
	const [passwordsMatchError, setPasswordsMatchError] = useState("");
	const [enterPassword, setEnterPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [checkComplexityError, setCheckComplexityError] = useState("");

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

	const checkPassword = function () {
		if (enterPassword === confirmPassword) {
			setPasswordsMatchError("Passwrds match!");
			passwordComplexity();
		} else {
			setPasswordsMatchError("Passwords do not match!");
		}
	};

	const passwordComplexity = function () {
		let errorMessage = "";
		let alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
		let alphabetUpperCase = alphabetLowerCase.toUpperCase();
		let [checkLowerCase, checkUpperCase] = [false, false];
		let specialLetters = "!@#$%^&*";
		let checkSpecialLetter = false;

		for (let i = 0; i < specialLetters.length; i++) {
			if (enterPassword.includes(specialLetters[i])) {
				checkSpecialLetter = true;
			}
		}

		for (let i = 0; i < alphabetLowerCase.length; i++) {
			if (enterPassword.includes(alphabetLowerCase[i])) {
				checkLowerCase = true;
			}
		}
		for (let i = 0; i < alphabetUpperCase.length; i++) {
			if (enterPassword.includes(alphabetUpperCase[i])) {
				checkUpperCase = true;
			}
		}

		if (enterPassword.length < 8) {
			if (errorMessage) {
				errorMessage += " ,and password must be at least 8 characters, ";
			} else {
				errorMessage = "Password must be at least 8 characters";
			}
		}

		if (checkLowerCase === false) {
			if (errorMessage) {
				errorMessage += ", and must contain a lowercase letter";
			} else {
				errorMessage = "Password must contain a lowercase letter";
			}
		}
		if (checkUpperCase === false) {
			if (errorMessage) {
				errorMessage += " ,and must contain a uppercase letter";
			} else {
				errorMessage = "Password must contain a uppercase letter";
			}
		}

		if (checkSpecialLetter === false) {
			if (errorMessage) {
				errorMessage += " ,and must contain a special symbol";
			} else {
				errorMessage = "Password must contain a special symbol";
			}
		}

		if (errorMessage.length === 0) {
			setCheckComplexityError("Good choice of password!");
		} else {
			setCheckComplexityError(errorMessage);
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
					<p className="error">{checkComplexityError}</p>
					<input onChange={(event) => setPassword(event.target.value)} type="text" placeholder="Enter your password" />
					<input onChange={(event) => setPasswordConfirm(event.target.value)} type="text" placeholder="Confirm your password" />
					<button onClick={() => checkPassword()}>Confirm password</button>
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
