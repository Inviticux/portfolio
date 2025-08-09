import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../styles/main.css';
import profilepicture from '../assets/profilepic.jpg'

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className="main-root">

            <div className="header-root ">
                <h1 className="header-title">Felix Pendered</h1>
                <div className="header-button-container">
                    <button className="headerbutton" onClick={() => navigate('/devices')}>My Gear</button>
                    <button className="headerbutton">Previous Projects</button>
                    <button className="headerbutton">Get in Contact</button>
                </div>
            </div>

            <div className='intro-container'>
                <div className='intro-text-container'>
                    <h2 className='name-title'>Hi, i'm Felix!</h2>
                    <h3 className='name-title-role'>Developer | Network Engineer | Manager</h3>
                    <p className='name-title-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae dolor blandit risus tempor varius. Suspendisse vehicula faucibus magna, eu maximus odio eleifend ac. Etiam sit amet magna a dolor convallis feugiat. Suspendisse lobortis justo a mi porta fringilla. Curabitur tristique varius dolor, nec bibendum dolor faucibus sit amet. Nam et ante eros. Aenean aliquet risus quis consequat maximus. Sed neque mauris, tincidunt quis mollis ac, tincidunt id elit. Donec sollicitudin, mi vel bibendum fermentum, lorem orci consequat neque, in varius nunc libero at nisl.</p>
                </div>
                <div className='intro-image-container'>
                    <img className='intro-image' src={profilepicture}></img>
                </div>
            </div>

            <div className='expedu-container'>
                <h3 className='section-title'>My Education and Experience</h3>
                <div className='expedu-item-container'>

                    <div className='expedu-item'>
                        <h4 className='expedu-item-title'>The Henley College - Extended Diploma in IT and Computing</h4>
                        <p className='expedu-item-desc'>My sixth form years were spent at The Henley College, the majority of this course was centred around delivering it soultions in various forms: Games, Hardware Surveys and Simple Applications</p>
                        <p className='expedu-item-grade'> Grade Achieved: DDD - Triple Distinction</p>
                    </div>

                </div>
            </div>

            <div className='skilltech-container'>
                <h3 className='section-title'>Technologies and Skills</h3>
                <div className='skilltech-item-container'>

                    <div className='skilltech-item'>
                        <img className='skilltech-item-img'></img>
                        <p className='skilltech-item-name'>React</p>
                    </div>

                </div>
            </div>

            <div className='projects-container'>
                <h3 className='section-title'>My Previous Projects</h3>
                <div className='project-item-container'>

                    <div className='project-item'>
                        <h4 className='project-item-title'></h4>
                        <img className='project-item-img'></img>
                        <p className='project-item-desc'>A brief description</p>
                    </div>

                </div>
            </div>

            <div className='contact-container'>
                
            </div>
        </div>
    );
};

export default MainPage;