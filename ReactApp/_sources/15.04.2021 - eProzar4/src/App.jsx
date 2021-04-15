import React from "react";
import getProductsForCategory from "./productList";
import MyNavbar from './components/Navbar';
import Promotions from './pages/Promotions';

const App = () => {
    console.log('Products for category with id 1')
    console.log(getProductsForCategory(1))
    console.log('Products for category with id 2')
    console.log(getProductsForCategory(2))
    console.log('Products for category with id 3')
    console.log(getProductsForCategory(3))
    return (
        <>
            <MyNavbar />
            <Promotions />
        </>
    )
};

export default App;
