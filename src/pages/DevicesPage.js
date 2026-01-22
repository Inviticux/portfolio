import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../styles/devices.css';

const DevicesPage = () => {
    const navigate = useNavigate();

    return (
        <div className='devices-root'>

            <div className="header-root ">
                <h1 className="header-title">Felix Pendered.</h1>
                <div className="header-button-container">
                    <button className="headerbutton" onClick={() => navigate('/')}>Return</button>
                </div>
            </div>

            <div className='devices-content'>
                
                <div className='devices-computer-section'>
                </div>

                <div className='devices-homelab-section'>
                </div>

                <div className='devices-gaming-section'>
                </div>

            </div>
        </div>
    );
};

export default DevicesPage;