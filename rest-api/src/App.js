import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from "react";
import Country from './components/Country';
import Cart from './components/Cart';

function App() {
  const [countries,setCountries]=useState([]);
  const [cart,setCart]=useState([])
  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then(res=>res.json())
    .then(data=>{
      setCountries(data)
      console.log(data)
    })
  },[])
  const handleCountry=(country)=>{
    console.log("Country Added",country);
    const newCart=[...cart,country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <h2>Country loaded: {countries.length}</h2>
      <h3>Country Added: {cart.length}</h3>
      <Cart cart={cart}></Cart>
      {
        countries.map(country=><Country country={country} handleCountry={handleCountry}></Country>)
      }
      
      
    </div>
  );
}

export default App;
