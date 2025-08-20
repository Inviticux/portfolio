import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../styles/main.css';
import profilepicture from '../assets/profilepic.jpg'
import llamalyze from '../assets/llamalyze.jpg';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className="main-root">

            <div className="header-root ">
                <h1 className="header-title">Felix Pendered.</h1>
                <div className="header-button-container">
                    <button className="headerbutton" onClick={() => navigate('/devices')}>My Gear</button>
                    <button className="headerbutton">Previous Projects</button>
                    <button className="headerbutton">Get in Contact</button>
                </div>
            </div>

            <div className='intro-container'>
                <div className='intro-text-container'>
                    <h2 className='name-title'>Hi, i'm Felix!</h2>
                    <h3 className='name-title-role'>An aspiring Developer and Network Engineer</h3>
                    <p className='name-title-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae dolor blandit risus tempor varius. Suspendisse vehicula faucibus magna, eu maximus odio eleifend ac. Etiam sit amet magna a dolor convallis feugiat. Suspendisse lobortis justo a mi porta fringilla. Curabitur tristique varius dolor, nec bibendum dolor faucibus sit amet. Nam et ante eros. Aenean aliquet risus quis consequat maximus. Sed neque mauris, tincidunt quis mollis ac, tincidunt id elit. Donec sollicitudin, mi vel bibendum fermentum, lorem orci consequat neque, in varius nunc libero at nisl.</p>
                </div>
                <div className='intro-image-container'>
                    <img className='intro-image' src={profilepicture}></img>
                </div>
            </div>

            <div className='root-divider'></div>

            <div className='expedu-container'>
                <h3 className='section-title'>My Education and Experience</h3>
                <div className='expedu-item-container'>

                    <div className='expedu-item' onClick={() => window.location.replace('https://www.henleycol.ac.uk/courses/view-all-courses/item/68/ict-computing-extended-diploma#')}>
                        <h4 className='expedu-item-title'>The Henley College - Extended Diploma in IT and Computing</h4>
                        <p className='expedu-item-desc'>My sixth form years were spent at The Henley College, the majority of this course was centred around delivering it soultions in various forms: Games, Hardware Surveys and Simple Applications</p>
                        <ul className="expedu-item-skills-list">
                            <li>It Service Delivery</li>
                            <li>Games Development</li>
                            <li>3D Graphics</li>
                        </ul>
                        <p className='expedu-item-grade'> Grade Achieved: DDD - Triple Distinction</p>
                    </div>

                    <div className='expedu-item' onClick={() => window.location.replace('https://www.plymouth.ac.uk/courses/undergraduate/bsc-computer-science')}>
                        <h4 className='expedu-item-title'>University of Plymouth - BSc Computer Science</h4>
                        <p className='expedu-item-desc'>My university years were spent studying at the university of plymouth. My areas of study were in development of applications from mobile apps to backend applications. Another key part of my studies was networking in which I learned how to setup and use various server architectures and how to increase their perfomance and efficiency</p>
                        <ul className="expedu-item-skills-list">
                            <li>Network Administration</li>
                            <li>Full Stack Development</li>
                            <li>Big Data Analytics</li>
                            <li>Team Cohesion</li>
                            <li>Project Management</li>
                        </ul>
                        <p className='expedu-item-grade'> Grade Achieved: 2:1 - Second Class Honors (Upper Division)</p>
                    </div>

                </div>
            </div>

            <div className='root-divider'></div>

            <div className='skilltech-container'>
                <h3 className='section-title'>Technologies and Skills</h3>
                <div className='skilltech-item-container'>

                    <div className='skilltech-item'>
                        <img className='skilltech-item-img'></img>
                        <p className='skilltech-item-name'>React</p>
                    </div>

                </div>
            </div>

            <div className='root-divider'></div>

            <div className='projects-container'>
                <h3 className='section-title'>My Previous Projects</h3>
                <h4 className='projects-title-desc'>Click to see more about each one</h4>
                <div className='project-item-container'>

                    <div className='project-item' onClick={() => window.location.replace('https://github.com/Inviticux/COMP3000')}>
                        <h4 className='project-item-title'>Llamalyze</h4>
                        <img className='project-item-img' src={llamalyze}></img>
                        <p className='project-item-desc'>An AI Powered Quizzing Platform that allows lecturers to gauge engagement with their lectures</p>
                    </div>

                    <div className='project-item' onClick={() => window.location.replace('https://github.com/Inviticux/networksassesment')}>
                        <h4 className='project-item-title'>Nginx Load Balancer</h4>
                        <img className='project-item-img'></img>
                        <p className='project-item-desc'>A load balancing solution for simple php web instances using Nginx</p>
                    </div>

                    <div className='project-item' onClick={() => window.location.replace('')}>
                        <h4 className='project-item-title'>Compass Point Hotel</h4>
                        <img className='project-item-img' ></img>
                        <p className='project-item-desc'>A simple booking system for a Hotel</p>
                    </div>

                    <div className='project-item' onClick={() => window.location.replace('')}>
                        <h4 className='project-item-title'>Liquorpedia</h4>
                        <img className='project-item-img' ></img>
                        <p className='project-item-desc'>A Cocktail App I helped to make in my second year</p>
                    </div>

                    <div className='project-item' onClick={() => window.location.replace('')}>
                        <h4 className='project-item-title'>Video streaming Experiment</h4>
                        <img className='project-item-img' ></img>
                        <p className='project-item-desc'>I used mininet connected to an external Opendaylight Network Controller to experiment with the effects bandwidth has on video streaming</p>
                    </div>

                </div>
            </div>

            <div className='contact-container'>
                
            </div>
        </div>
    );
};

export default MainPage;