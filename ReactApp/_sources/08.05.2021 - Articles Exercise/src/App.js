import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "./components/Article";
import Pagination from "./components/Pagination";

function App() {
	const URL = "http://apps.loopevo.com/apis/posts/posts.php";

	const [articles, setArticles] = useState([]);
	const [pageData, setPageData] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const articlesPerPage = 10;
	const [pages, setPages] = useState([]);

	// la incarcarea paginii, luam datele din URL si le afisam
	useEffect(() => {
		getPosts();
	}, []);

	// se apeleaza atunci cand schimbam pagina
	useEffect(() => {
		calculatePageData(articles);
	}, [currentPage]);

	const getPosts = () => {
		axios
			.get(URL)
			.then((response) => {
				setArticles(response.data);

				// trimitem response.data din API (datele primite)
				calculatePageData(response.data);
				setPages(createPages(response.data));
			})
			.catch(() => {
				console.log("error");
			});
	};

	// calculam indexul de start si indexul de final
	const calculatePageData = (articlesData) => {
		let startIndex = currentPage * articlesPerPage; // 0 * 10 => 0 reprezinta primul articol pe care vrem sa il afisam
		let finalIndex = startIndex + articlesPerPage; // 0 + 10 => reprezinta ultimul articol pe care vrem sa il afisam

		const filteredArticles = articlesData.slice(startIndex, finalIndex);
		setPageData(filteredArticles);
	};

	const changePage = (page) => {
		setCurrentPage(page);
		console.log(pageData);
	};

	const nextPage = () => {
		if (currentPage < pages.length) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage >= 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const createPages = (articlesData) => {
		const numberPages = Math.ceil(articlesData.length / articlesPerPage);
		return Array(numberPages).fill("");
	};

	return (
		<div className="container">
			<h1>Articles Content Management System</h1>
			<div className="articles">
				{pageData.map((article, index) => (
					<Article key={article.id} title={article.title} id={article.id} />
				))}
			</div>

			<Pagination data={pages} change={changePage} next={nextPage} prev={prevPage} currentPage={currentPage} />
		</div>
	);
}

export default App;
