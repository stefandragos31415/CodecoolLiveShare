import React, { useState, useRef } from "react";
import "./App.css";

function App() {
	const [item, setItem] = useState("");
	const [items, setItems] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(null);

	const inputRef = useRef(null);

	const addItem = function (e) {
		e.preventDefault();
		if (currentIndex !== null) {
			const arr = [...items];
			arr[currentIndex] = item;
			setItems(arr);
		} else {
			setItems([...items, item]);
		}
		setCurrentIndex(null);
		setItem("");
		inputRef.current.focus();
	};

	const edit = function (index) {
		setItem(items[index]);
		console.log(items[index]);
		setCurrentIndex(index);
	};

	return (
		<div className="container">
			<form>
				<label>To do list</label>
				<input ref={inputRef} type="text" value={item} onChange={(e) => setItem(e.target.value)}></input>
				{/* <input ref={inputRef} value={selectedText} type="text"></input> */}
				<button onClick={(e) => addItem(e)}>Add me</button>
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
