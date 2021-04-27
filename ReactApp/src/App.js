import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Phone from "./Phone";

function App() {
	return <Phone />;

	// function getStudents() {
	//   axios.get('http://apps.loopevo.com/apis/students/students.php')
	//   .then((response) => {
	//     console.log(response.data);
	//   })
	//   .catch((error) => {
	//     console.log(error);
	//   })
	// }
	// const [data, setData] = useState([]);

	// async function getStudents() {
	// 	const response = await axios("http://apps.loopevo.com/apis/students/students.php");
	// 	console.log(response.data);
	// 	setData(response.data);
	// }

	// useEffect(() => {
	// 	getStudents();
	// }, []);

	// if (data.length === 0) {
	// 	return <h1>Loading</h1>;
	// }

	// return (
	// 	<div className="App">
	// 		<h1>Students list:</h1>
	// 		<ul>
	// 			{data.map((student) => (
	// 				<Student data={student} key={student.id} />
	// 			))}
	// 		</ul>
	// 	</div>
	// );
}

export default App;
