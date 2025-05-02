import React, { useState }from 'react';
import './Product.css';

function Product() {
    const [state, setState] = useState({
        cart: [],
        total: 0
    });
    const currenyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }
    const getTotal = () => {
        return state.total.toLocaleString(undefined, currenyOptions);
    }   
    return (
        <div className='wrapper'>
            <div>
                Shopping Cart: {state.cart.length} total items
            </div>
            <div>Total : {getTotal()}</div>
            <div className='product'><span role='img' aria-label='ice-cream'></span></div>
            <button>Add</button><button>Remove</button>
        </div>
    )
}
export default Product;