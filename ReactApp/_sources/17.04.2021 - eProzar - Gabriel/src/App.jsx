import React from "react";
import getProductsForCategory from "./productList";
import {Nav, Navbar} from 'react-bootstrap';
import { HashRouter, Switch, Route } from "react-router-dom";
import Category from './pages/Category';
import Promotion from './pages/Promotion';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <HashRouter>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Promotions</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#/Category/1">Winter Offer</Nav.Link>
                        <Nav.Link href="#/Category/2">Spring Offer</Nav.Link>
                        <Nav.Link href="#/Category/3">Autumn Offer</Nav.Link>
                    </Nav>
                </ Navbar>
                <Switch>
                    <Route path='/Category/:categoryId' component={Category}></Route>
                    <Route path='/' component={Promotion}></Route>

                </Switch>
            </HashRouter>
        </div>
    )
};

export default App;
