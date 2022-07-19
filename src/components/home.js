import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/hero'
import Carousel from '../components/carousel'

const Home = (props) => {
    return(
        <div>
            <Hero title="Be relentless" subTitle="My motto: Sanctum vitae et Programming" text="Checkout my projects below" />
            <Carousel />
        </div>
    );
}


export default Home;