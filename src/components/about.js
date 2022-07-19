import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/hero';
import Content from '../components/content';

const About = () => {

    return(
        <div>
            <Hero title="About Me"/>
            <Content>
                    <p>Hello, my name is Ayorinde. I'm a front-end developer with experience in ReactJs, PHP, and SQL</p>

                    <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

                    <p>I'm constantly learning new things. currently those things include gaining more experience with React, MongoDb, Express JS, and Node JS</p>

                    <p>My latest project, feltech Blog, is a cookbook for developers. You can check it out <a href="https://felayo.github.io" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months</p>

                    <p>When I'm not learning something new chances are I'm creating some YouTube videos. You can find those <a href="http://www.youtube.com/c/GarrettLove1" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>
        </div>
    );
}


export default About;

