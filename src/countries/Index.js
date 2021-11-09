import React , {useState , useEffect} from 'react'
import Cart from './components/Cart/Cart'

import Country from './components/country/Country'

function Index() {

    const [countries , setCountries] = useState([]) 

    const [cart , setCart] = useState([]) 


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data)) 
        .catch(err => console.log(err)) 
    },[])

    // console.log(countries);

    const handleAddCountry = (country) => {
        console.log(country);
        const newCart = [...cart , country] 
        setCart(newCart)
    }

    return (
        <div style={{textAlign : 'center'}}>
            <h3> {countries.length}</h3>
            <Cart cart={cart}/> 
            <div>
                {
                    countries.map(country => (
                        <div>
                            <Country 
                                country={country}
                                handleAddCountry={handleAddCountry}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Index
