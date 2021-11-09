import React from 'react'

const Country = (props) => {

    const flagSize = {
        width : '130px' , 
    }

    return (
        <div style={{display : 'flex' , flexDirection : 'column' , alignItems : 'center' , paddingBottom : '20px' , borderBottom : '1px solid #555'}}>
            <h2> {props.country.name.common}</h2>
            <p style={flagSize}>
                <img style={{width : '100%'}} src={props.country.flags.png} alt="" />
            </p>
            <p>{props.country.capital}</p>
            <p>continent : {props.country.continents}</p>
            <p>population : {props.country.population}</p>
            <button
                onClick={() => props.handleAddCountry(props.country)}
            >
                Add Country
            </button>
        </div>
    )
}

export default Country
