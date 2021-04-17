import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import getProductsForCategory from '../productList';
import Card from 'react-bootstrap/Card';
import './Category.css';

function Category() {
    const {categoryId} = useParams();

    const [recipeData, setRecipeData] = useState([]);

    useEffect(() => {
        setRecipeData(getProductsForCategory(categoryId));
    }, [categoryId])

    const card = recipeData.map((product) => (
      <Card className="Card">
        <Card.Img className='img' variant='top' src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text> {product.description} </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small>{product.price}</small>
        </Card.Footer>
      </Card>
    ));
    console.log(card);


    return (
        <div className='Category'>
                {card}
        </div>
    )
}

export default Category;