import React from 'react';
import Footer from '../shared/Footer/Footer';
import Nav from '../shared/Nav/Nav';
import Ads from './Ads/Ads';
import Product from './product/Product';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Product></Product>
            <Ads></Ads>
            <Footer></Footer>
        </div>
    );
};

export default Home;