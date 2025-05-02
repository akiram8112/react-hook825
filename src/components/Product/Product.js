import React, { useState} from 'react';
import './Product.css';

const products = [
    {
     emoji: '🍦',
     name: 'ice cream',
     price: 5
    },
    {
     emoji: '🍩',
     name: 'donuts',
     price: 2.5,
    },
    {
     emoji: '🍉',
     name: 'watermelon',
     price: 4
    }
];
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
    const add = (product) => {
        setState({
            cart: [...state.cart, product.name],
            total: state.total + product.price
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
            <div>
                {products.map((product)=>(
                    <div key={product.name}>
                        <div className='product'><span role='img' aria-label={product.name}>{product.emoji}</span></div>
                        <button onClick={ add }>Add</button><button onClick={ remove }>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Product;