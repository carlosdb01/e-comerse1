import React from 'react';
import '../styles/loadinScreen.css';
import { Spinner } from 'react-bootstrap'

const LoadinScreen = () => {
    return (
        <div className='overlay'>
            <Spinner animation="grow" variant="warning" />
        </div>
    );
};

export default LoadinScreen;