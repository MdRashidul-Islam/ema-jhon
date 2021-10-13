import React from 'react';
import './Cart.css'

const Cart = (props) => {
        const {cart}= props
        
let total=0;
for (const product of cart){
        total= total+ product.price
}

        return (
                <div>
                    <h3>Order Review</h3>
                    <h3>order items: {cart.length}</h3>
                    <h3>total:{total}</h3>
                </div>
        );
};

export default Cart;