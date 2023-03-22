import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,capital,population,area,flags} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Capital Name: {capital}</h3>
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4> 
        </div>
    );
};

export default Country;