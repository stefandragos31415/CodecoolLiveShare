import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import getProductsForCategory from "../productList";
 
function Promotions() {

	const today = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];
    const monthName = monthNames[today.getMonth()];
    const formattedDate = `${today.getDate()} of ${monthName}`;

	function randomProduct(categoryId) {
		let products = getProductsForCategory(categoryId);
		console.log(products);
		let randomIndex = Math.floor(Math.random()*getProductsForCategory(categoryId).length);
		return products[randomIndex];
	}

	let product1 = randomProduct(1);
	let product2 = randomProduct(2);
	let product3 = randomProduct(3);

	return (

		<div className="view-size">
		<Carousel className="carousel-container">
			<Carousel.Item>
				<img src={product1.image} className="d-block w-100 h-100" alt={product1.name} />
				<Carousel.Caption>
      				<p>For the {formattedDate} the product {product1.name}: from {product1.price} to {'$' + (Math.floor(product1.price.slice(1) / 2))}</p>
    			</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img src={product2.image} className="d-block w-100 h-100" alt={product2.name} />
				<Carousel.Caption>
      				<p>For the {formattedDate} the product {product2.name}: from {product2.price} to {'$' + (Math.floor(product2.price.slice(1) / 2))}</p>
    			</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img src={product3.image} className="d-block w-100 h-100" alt={product3.name} />
				<Carousel.Caption>
      				<p>For the {formattedDate} the product {product3.name}: from {product3.price} to {'$' + (Math.floor(product3.price.slice(1) / 2))}</p>
    			</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
		</div>
	);
}

export default Promotions;
