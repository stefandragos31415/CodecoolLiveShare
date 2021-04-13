import { useParams } from "react-router";
import { getRecipeById } from "../data";
import React, { useState, useEffect } from "react";

function Recipe() {
	const { recipeId } = useParams();

	const [recipeTitle, setRecipeTitle] = useState("");
	const [recipeIngredients, setRecipeIngredients] = useState([]);
	const [recipeInstructions, setRecipeInstructions] = useState("");
	const [recipeImage, setRecipeImage] = useState("");

	useEffect(() => {
		const recipe = getRecipeById(recipeId);
		setRecipeTitle(recipe.title);
		setRecipeIngredients(recipe.ingredients);
		setRecipeInstructions(recipe.instructions);
		setRecipeImage(recipe.image);
	}, [recipeId]);

	return (
		<div>
			<h1>{recipeTitle}</h1>
			<h2>Ingredients:</h2>
			<ul>
				{recipeIngredients.map((element, index) => (
					<li key={index}>
						<b>{element.quantity}</b> <em>{element.name}</em>
					</li>
				))}
			</ul>
			<h2>Instructions:</h2>
			<p>{recipeInstructions}</p>
			<img src={recipeImage} alt={recipeTitle}></img>
		</div>
	);
}
export default Recipe;
