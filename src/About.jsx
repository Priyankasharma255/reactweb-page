import React from 'react';
import web from '../src/img/envelope.png';
import Common from './Common';

const About = () => {
    return (
        <>
            <Common name='wlcom to About page'
            imgsrc={web}
            visit="/contact" 
            btnname="Contact Now"    
            />
        </>
    )
}

export default About; 