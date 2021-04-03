// import productList from "./productList";
import React, { useState, useEffect } from "react";
import { productOfTheDay, productList } from "./productList";

const App = () => {
	const [filteredProductList, setFilteredProductList] = useState(productList);

	const [filterName, setFilterName] = useState("");
	const [filterCategory, setFilterCategory] = useState("");
	const [filterPrice, setFilterPrice] = useState("");
	const [countProductsInCart, setCountProductsInCart] = useState(0);

	//const randomItem = Math.floor(Math.random() * productList.length);
	const promotedProduct = productList[productOfTheDay];
	promotedProduct.newPrice = Math.round(parseInt(promotedProduct.price.substring(1)) / 2);
	const today = new Date();
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const monthName = monthNames[today.getMonth()];
	const formatedDate = `${today.getDate()} ${monthName}`;

	const categories = [""];
	productList.forEach((product) => {
		if (!categories.includes(product.category)) {
			categories.push(product.category);
		}
	});
	categories.sort();
	// console.log(categories);

	function resetFilters() {
		setFilterName("");
		setFilterCategory("");
		setFilterPrice(0);
	}

	function filterProducts() {
		console.log("s-a schimbat state-ul");

		const filteredProducts = productList.filter((product) => {
			if (
				product.name.toLowerCase().includes(filterName.toLowerCase()) &&
				product.category.includes(filterCategory) &&
				Number(product.price.substring(1)) >= filterPrice
			) {
				return true;
			}
			return false;
		});
		setFilteredProductList(filteredProducts);
	}

	function toggleProductStatus(product) {
		// product?.inCart = !product.inCart;
		if (product.inCart) {
			product.inCart = false;
			setCountProductsInCart(countProductsInCart - 1);
		} else {
			product.inCart = true;
			setCountProductsInCart(countProductsInCart + 1);
		}
		setFilteredProductList([...filteredProductList]);
	}

	useEffect(() => {
		// cod care se ruleaza cand schimb ceva din arrayul de mai jos
		filterProducts();
	}, [filterName, filterCategory, filterPrice]);

	return (
		<>
			<section className="filter">
				<div className="container">
					<input type="text" onChange={(event) => setFilterName(event.target.value)} value={filterName} placeholder="Product name" />

					<select onChange={(event) => setFilterCategory(event.target.value)} value={filterCategory}>
						{categories.map((category, index) => (
							<option key={index} value={category}>
								{category}
							</option>
						))}
					</select>

					<input
						type="number"
						onChange={(event) => setFilterPrice(event.target.value)}
						value={filterPrice}
						min="0"
						step="10"
						placeholder="Price under..."
					/>

					<button className="btn" onClick={() => resetFilters()}>
						Reset all filters
					</button>

					<div>Total bought items: {countProductsInCart}</div>
				</div>
			</section>

			<section className="promotion">
				<h2>Don't miss today's hot deal!</h2>

				<div className="card">
					<div className="card-image">
						<img src={promotedProduct.image} alt={promotedProduct.name} />
					</div>
					<div className="card-body">
						<h3>{promotedProduct.name}</h3>
						<p>{promotedProduct.shortDescription}</p>
						<p className="old-price">{promotedProduct.price}</p>
						<p>
							<span>${promotedProduct.newPrice}</span> only on <span>{formatedDate}</span>
						</p>
						<a href="#" className="btn">
							Buy now
						</a>
					</div>
				</div>
			</section>

			<section className="products">
				{filteredProductList.map((product, index) => (
					<div className="card" key={product.id}>
						<div className="card-image">
							<img src={product.image} alt={product.name} />
						</div>
						<div className="card-body">
							<h3>{product.name}</h3>
							<p>{product.description}</p>
							<p className="price">{product.price}</p>
							<button className="btn" onClick={() => toggleProductStatus(product)}>
								{product.inCart ? "Remove from cart" : "Add to cart"}
							</button>
						</div>
					</div>
				))}
			</section>

			<footer>
				<p>
					We bring you <strong>only the best products</strong> that can be randomly generated!
				</p>
				<p>
					Content from <a href="https://marak.github.io/faker.js/">faker.js</a> with images from{" "}
					<a href="https://picsum.photos/">Lorem Picsum</a>
				</p>
			</footer>
		</>
	);
};

export default App;
