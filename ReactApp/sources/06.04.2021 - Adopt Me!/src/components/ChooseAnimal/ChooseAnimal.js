import React, { useState } from "react";
import "./ChooseAnimal.css";

function ChooseAnimal() {
	const animals = ["dog", "cat"];
	const colors = ["black", "white", "brown"];

	const [chosenAnimal, setChosenAnimal] = useState(animals[0]);
	const [chosenColor, setChosenColor] = useState(colors[0]);
	const [animalName, setAnimalName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [petRating, setPetRating] = useState(0);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	function changeAnimal(e) {
		setChosenAnimal(e);
	}

	function changeColor(e) {
		setChosenColor(e);
	}

	function incrementRating() {
		setPetRating(petRating + 1);
	}

	function adoptPet() {
		if (!animalName || !firstName || !lastName) {
			// console.log("eroare");
			setErrorMessage(`Please enter some text for animal name, first name and last name.`);
			setSuccessMessage("");
		} else {
			setSuccessMessage(
				`Congrats ${firstName} ${lastName}, you adopted a ${chosenColor} ${chosenAnimal}, with the name ${animalName}, and a rating of ${petRating}`
			);
			setErrorMessage("");
		}
	}

	return (
		<div className="search-params">
			<form>
				<label>Animal:</label>
				<select onChange={(e) => changeAnimal(e.target.value)}>
					{animals.map((animal, index) => (
						<option key={index} value={animal}>
							{animal}
						</option>
					))}
				</select>
				<label>Color:</label>
				<select onChange={(e) => changeColor(e.target.value)}>
					{colors.map((color, index) => (
						<option key={index} value={color}>
							{color}
						</option>
					))}
				</select>
				<label>
					Give a name to the {chosenColor} {chosenAnimal}:
				</label>
				<input onChange={(e) => setAnimalName(e.target.value)} type="text"></input>
				<label>Your first name:</label>
				<input onChange={(e) => setFirstName(e.target.value)} type="text"></input>
				<label>Your last name:</label>
				<input onChange={(e) => setLastName(e.target.value)} type="text"></input>
			</form>
			<img src={`./images/${chosenColor}-${chosenAnimal}.jpg`}></img>
			<h3 className="pet-rating">Pet rating: {petRating}</h3>
			<button onClick={() => incrementRating()}>Increment</button>
			<p className={successMessage ? "message success" : "message error"}>
				{successMessage}
				{errorMessage}
			</p>
			<button onClick={() => adoptPet()}>Adopt</button>
		</div>
	);
}

export default ChooseAnimal;
