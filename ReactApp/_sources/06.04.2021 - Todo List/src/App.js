import React, { useState, useRef } from "react";
import "./App.css";

function App() {
	const [item, setItem] = useState("");
	const [items, setItems] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(null);

	const inputRef = useRef(null); // needed to keep focus on the input field
	const addItem = function (e) {
		e.preventDefault(); // prevents page refresh when button clicked (becasue it is in a form)
		if (currentIndex !== null) {
			// true when we edit an existing element from the items list
			const arr = [...items]; // create new array to re-render the App
			arr[currentIndex] = item; // modifies the element with the selected index
			setItems(arr); // update list of items with edit and re-render
		} else {
			// true when adding a new element to the items list
			setItems([...items, item]); // update list of items without edit and re-render
		}
		setCurrentIndex(null); // resets index after ed it
		setItem(""); // erases item from input field
		inputRef.current.focus(); // keeps focus on input field
	};

	const edit = function (index) {
		setItem(items[index]); // selects the current item based on the selected index (click)
		setCurrentIndex(index); // udates the curent index function of the selected element from ul list
	};

	return (
		<div className="container">
			<form>
				<label>To do list</label>
				<input ref={inputRef} type="text" value={item} onChange={(e) => setItem(e.target.value)}></input>
				<button onClick={(e) => addItem(e)}>Add me</button> {/* (e) is needed for .preventDefault() */}
				<ul>
					{items.map((element, index) => (
						<li onClick={() => edit(index)} key={index}>
							{element}
						</li>
					))}
				</ul>
			</form>
		</div>
	);
}

export default App;
