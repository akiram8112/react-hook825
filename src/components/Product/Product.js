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
        cart: []
    });
    const currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    };
    
    const add=(product)=>{
        setState(state=>({
            cart: [...state.cart, product]
        }))
    }
    const getTotal = () =>{
        const total = state.cart.reduce((totalCost, item)=>totalCost+item.price, 0);
        return total.toLocaleString(undefined, currencyOptions);
    }
    const remove = (product) => (
        setState(state=>{
            const cart = [...state.cart];
            const index = cart.findIndex(p=>p.name===product.name);
            if (index<0) {
                return;
            }
            cart.splice(index, 1);
            return ({cart});
        })
    )
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
                        <button onClick={() => add(product)}>Add</button><button onClick={()=>remove(product)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Product;