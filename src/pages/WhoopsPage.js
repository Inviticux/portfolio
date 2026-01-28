import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import GeometricRain from '../components/GeometricRain';
import '../styles/whoops.css';

const WhoopsPage = () => {
    const navigate = useNavigate();

    return (
        <div className='whoops-root'>
            <GeometricRain />

            <header className="header-root">
                <h1 className="header-title" onClick={() => navigate('/')}>Felix Pendered.</h1>
                <div className="header-button-container">
                    <button className="headerbutton" onClick={() => navigate('/')}>Return</button>
                </div>
            </header>

            <main className='whoops-content'>
                <h2 className='whoops-title'>Whoops!</h2>
                <p className='whoops-text'>It seems you've reached a page that is being made. Give it some time and it will be ready soon.</p>
                <p className='whoops-text'>In the meantime, click the button below to return to the homepage and continue exploring my portfolio.</p>
                <button className='whoops-button' onClick={() => navigate('/')}>Go to Homepage</button>

            </main>
        </div>
    );
};

export default WhoopsPage;