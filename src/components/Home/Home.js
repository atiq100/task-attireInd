import React from 'react';
import Footer from '../shared/Footer/Footer';
import Nav from '../shared/Nav/Nav';
import Product from './product/Product';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Product></Product>
            <Footer></Footer>
        </div>
    );
};

export default Home;