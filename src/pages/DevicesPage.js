import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import GeometricRain from '../components/GeometricRain';
import '../styles/devices.css';

const DevicesPage = () => {
    const navigate = useNavigate();

    return (
        <div className='devices-root'>
            <GeometricRain />

            <header className="header-root">
                <h1 className="header-title" onClick={() => navigate('/')}>Felix Pendered.</h1>
                <div className="header-button-container">
                    <button className="headerbutton" onClick={() => navigate('/')}>Return</button>
                </div>
            </header>

            <main className='devices-content'>
                <h2 className='section-title'>My Devices and Setup</h2>
                <section className='devices-computer-section'>
                </section>
                <h2 className='section-title'>My Homelab and Gaming Setup</h2>
                <section className='devices-homelab-section'>
                </section>
                <h2 className='section-title'>My Gaming Setup</h2>
                <section className='devices-gaming-section'>
                </section>

            </main>
        </div>
    );
};

export default DevicesPage;