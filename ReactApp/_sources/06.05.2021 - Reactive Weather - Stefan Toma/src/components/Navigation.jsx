import {Link} from "react-router-dom";
import Search from "./search";
import React from "react";
import {Navbar, Nav} from "react-bootstrap";


export default function Navigation() {
return (

    <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link>
                    <Link className="nav-link" to={"/"}>Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="nav-link" to={"/city/bucharest,ro"}>Bucharest</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="nav-link" to={"/city/warsaw,pl"}>Warsaw</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className="nav-link" to={"/city/budapest,hu"}>Budapest</Link>
                </Nav.Link>
            </Nav>
            <Search></Search>
        </Navbar.Collapse>
    </Navbar>
)
}

