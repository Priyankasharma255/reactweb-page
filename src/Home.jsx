import React from 'react';
import web from '../src/img/envelope.png';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common name='wlcom to Home page page'
            imgsrc={web}
            visit="/service" 
            btnname="Get Now"    
            />
        </>
    )
}

export default Home; 