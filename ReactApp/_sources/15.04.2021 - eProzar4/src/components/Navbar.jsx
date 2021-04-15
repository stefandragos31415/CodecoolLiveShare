import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function MyNavbar() { 
	return (

		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="/">Promotions</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/category/1">Winter Offer</Nav.Link>
					<Nav.Link href="/category/2">Spring Offer</Nav.Link>
					<Nav.Link href="/category/3">Autumn Offer</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default MyNavbar;