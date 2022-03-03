import React from 'react';


const Cart = (props) => {
    const cart=props.cart;
    // let total=0;
    // for(let i=0;i<cart.length;i++){
    //     const country=cart[i];
    //     total=total+ country.population;
    // }
    const total=cart.reduce((total,country)=>total+country.population,0)
    return (
        <div>
            <h3>This is cart: {cart.length}</h3>
            <h4>Total Population: {total}</h4>
        </div>
    );
};

export default Cart;