import axios from "axios";
import React, { useState, useEffect } from "react";
import useStock from "./useStock";

export default function Phone() {
	const [phoneList, setPhoneList] = useState([]);
	const [dataLoading, setDataLoading] = useState(true);
	const [selectedPhone, setSelectedPhone] = useState(null);
	const [infoText, setInfoText] = useState("");
	const stockColor = useStock(selectedPhone);

	const API_URL = "http://apps.loopevo.com/apis/phones";

	function getPhoneData() {
		axios
			.post(`${API_URL}/phones.php`)
			.then((response) => {
				console.log(response.data);
				setPhoneList(response.data);
				console.log(response.data[0]);
				setSelectedPhone(response.data[0]);
				setDataLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function updatePhoneHandler(event) {
		const updatedPhone = phoneList.find((element) => event === element.id);
		console.log(updatedPhone);
		setSelectedPhone(updatedPhone);
	}

	useEffect(() => {
		getPhoneData();
	}, []);

	if (dataLoading) {
		return <h1>Data loading ... </h1>;
	}

	return (
		<div className="phone-picker">
			<img src={`${API_URL}/images/${selectedPhone.image}`} alt={selectedPhone.name}></img>
			<h3>{selectedPhone.name}</h3>
			<div className="dot" style={{backgroundColor: stockColor}}></div>
			<select onChange={(event) => updatePhoneHandler(event.target.value)}>
			{phoneList.map( (element) => (
				<option value={element.id} key={element.id}>{element.name}</option>
			))}
			</select>
			<p style={{color: stockColor, display: stockColor==="green" && "none" }}>Hurry up, there are only {selectedPhone.stock} products left in the stock!</p>
		</div>
	);
}
