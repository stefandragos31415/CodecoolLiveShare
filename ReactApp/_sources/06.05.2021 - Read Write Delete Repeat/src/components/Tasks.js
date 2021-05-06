import React from "react";

export default function Tasks(props) {
	return (
		<div id="list">
			{props.tasks.map((task) => (
				<div key={task.id}>
					<button onClick={() => props.delete(task.id)}>delete</button>
					<li style={{ display: "inline" }}>{task.title}</li>
					<br></br>
				</div>
			))}
		</div>
	);
}
