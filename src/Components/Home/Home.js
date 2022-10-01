import React, { useEffect, useState } from 'react';
import About from '../About/About';
import './Home.css';

const Home = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(json => setCountries(json))
    },[])
    return (
        <div>
            <h1>Country List : {countries.length}</h1>
            <div className='Countries'>
                {countries.map(cd=><About countries={cd}></About>)}
            </div>

        </div>
    );
};

export default Home;