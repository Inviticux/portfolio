import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../styles/devices.css';

const DevicesPage = () => {
    const navigate = useNavigate();

    return (
        <div className='devices-root'>
            <button onClick={() => navigate('/')}>Back</button>
            <p>devices</p>
        </div>
    );
};

export default DevicesPage;