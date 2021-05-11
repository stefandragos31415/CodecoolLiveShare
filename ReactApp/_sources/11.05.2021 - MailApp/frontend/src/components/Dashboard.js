import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Dashboard() {
	const [data, setData] = useState([]);
	const history = useHistory();

	async function getData() {
		const response = await fetch("http://localhost:6789/mails", {
			credentials: "include",
		});

		if (response.status !== 200) {
			history.push("/login");
		} else {
			const data = await response.json();
			setData(data);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	// if (response.status !== 200) {
	// 	setError("wrong password!");
	// } else
	// }

	return (
		<div role="alert">
			{data.map((mail) => (
				<div>
					{mail.id}, {mail.subject}, {mail.text}
				</div>
			))}
		</div>
	);
}

export default Dashboard;
