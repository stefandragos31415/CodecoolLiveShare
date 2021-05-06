import React, { useState } from "react";

export default function NewTask(props) {
	const [task, setTask] = useState("");

	return (
		<div id="menu">
			<label>Your new to-do</label>
			<input type="text" value={task} placeholder="enter new task" onChange={(e) => setTask(e.target.value)} />
			<button onClick={() => props.create(task)}>add task</button>
		</div>
	);
}
