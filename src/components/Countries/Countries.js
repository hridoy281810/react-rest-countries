import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    // step 1
    const [countries ,setCountries] = useState([]);
    // step2 
    useEffect(()=>{
        // step 3
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h1>Hello from Countries: {countries.length}</h1>
         {
            countries.map(country => <Country
              country={country}
    
                ></Country>)
            
         }
        
        </div>
    );
};

export default Countries;