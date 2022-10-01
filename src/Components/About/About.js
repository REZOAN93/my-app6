import React from 'react';

const About = (props) => {
    const {name,capital,flags}=props.countries;
    return (
        <div className='Country'>
            <h3>{name.common}</h3>
            <h3>{capital}</h3>
            <img id="img" src={flags.png} alt="" />
        </div>
    );
};

export default About;