import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country Name: {props.country.name.common}</h2>
            <h3>Capital Name: {props.country.capital}</h3>
            <h4>Population: {props.country.population}</h4>
            <h4>Area: {props.country.area}</h4> 
        </div>
    );
};

export default Country;