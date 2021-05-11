import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="navbar-collapse">
				<div className="navbar-nav">
					<ul className="nav navbar-nav">
						<li>
							<Link className="nav-item nav-link" to="/register">
								SignUp
							</Link>
						</li>
						<li>
							<Link className="nav-item nav-link" to="/login">
								Login
							</Link>
						</li>
						<li>
							<Link className="nav-item nav-link" to="/logout">
								Log OUT
							</Link>
						</li>
						<li>
							<Link className="nav-item nav-link" to="/dashboard">
								Dashboard
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
