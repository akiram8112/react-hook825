import React, { useState} from 'react';
import './Product.css';

function Product() {
    const [state, setState] = useState({
        cart: [],
        total: 0
    });
    const currenyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    };
    const getTotal = () => {
        return state.total.toLocaleString(undefined, currenyOptions);
    }
    const add = () => {
        setState({
            cart: ['ice cream'],
            total: 5
        })
    }
    const remove = () => {
        setState({
            cart: [],
            total: 0
        })
    }
    return (
        <div className='wrapper'>
            <div>
                Shopping Cart: {state.cart.length} total items
            </div>
            <div>Total : {getTotal()}</div>
            <div className='product'><span role='img' aria-label='ice-cream'></span></div>
            <button onClick={ add }>Add</button><button>Remove</button>
        </div>
    )
}
export default Product;