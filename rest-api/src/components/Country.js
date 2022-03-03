import React from 'react';
import "./Country.css"

const Country = (props) => {
    const{name,population,flag,region}=props.country;
    return (
        <div className='country'>
            <h2>{name}</h2>
            <p>Population: {population}</p>
            <img src={flag} alt="" />
            <p>Region: {region}</p>
            <button onClick={()=>props.handleCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;