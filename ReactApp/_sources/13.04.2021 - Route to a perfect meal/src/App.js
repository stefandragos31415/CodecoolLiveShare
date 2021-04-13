//npm install --save bootstrap@latest
//npm install --save react-router-dom
//npm install --save react-responsive-carousel

import "./App.css";

import { Link, HashRouter, Switch, Route } from "react-router-dom";
import Recipe from "./components/Recipe";
import Home from "./components/Home";

function App() {
	return (
		<div>
			<HashRouter>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
						<Link className="navbar-brand" to="/">
							Navbar
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
								<Link className="nav-link" to="/recipe/1">
									Perfection Salad
								</Link>
								<Link className="nav-link" to="/recipe/2">
									Hamburger Pie
								</Link>
								<Link className="nav-link" to="/recipe/3">
									Cherry Pineapple Bologna
								</Link>
							</div>
						</div>
					</div>
				</nav>

				<Switch>
					<Route path="/recipe/:recipeId" component={Recipe}></Route>
					<Route path="/" component={Home}></Route>
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;
