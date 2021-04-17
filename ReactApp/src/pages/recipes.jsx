import {useParams} from "react-router";
import {useEffect, useState} from "react";
import getRecipeById from "../data";

const Recipe = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [image, setImage] = useState("")
    const [instructions, setInstructions] = useState("")

    useEffect(() => {
        const recipe = getRecipeById(recipeId)
        setRecipe(recipe.title)
        setImage(recipe.image)
        setIngredients(recipe.ingredients)
        setInstructions(recipe.instructions)
    }, [recipeId])

    return (
        <div>
            <div className="container">
                <h1 style={{textAlign:"center"}}>{recipe}</h1>
                <img src={image}></img>
                {ingredients.map((ingredient) =>
                  <div>
                    <strong>{ingredient.quantity} {ingredient.name}</strong>
                  </div>
                )}
                <div>
                    {instructions}
                </div>
            </div>
        </div>
  );
}

export default Recipe;
