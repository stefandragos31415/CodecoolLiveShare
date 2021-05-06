import React from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import NewTask from "./components/NewTask";

function App() {
	const [tasks, setTasks] = useState([]);

	const renderTasks = () => {
		fetch("http://localhost:6789/tasks")
			.then((response) => response.json())
			.then((data) => setTasks(data));
	};
	useEffect(() => {
		renderTasks();
	}, []);

	const createTask = (newTask) => {
		fetch(`http://localhost:6789/tasks`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: newTask }),
		}).then(() => {
			renderTasks();
		});
	};

	const deleteTask = async (id) => {
		await fetch(`http://localhost:6789/tasks/${id}`, { method: "DELETE" });
		renderTasks();
	};

	return (
		<>
			<h1>ToDo List</h1>
			<NewTask create={createTask} />
			<Tasks tasks={tasks} delete={deleteTask} />
		</>
	);
}

export default App;
