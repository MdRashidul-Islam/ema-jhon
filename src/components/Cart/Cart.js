import React from 'react';
import './Cart.css'

const Cart = (props) => {
        const {cart}= props
let totalQuantity=0;       
let total=0;
for (const product of cart){
        if(!product.quantity){
                product.quantity=1
        }
        total= total+ product.price * product.quantity
        totalQuantity= totalQuantity+ product.quantity
}

        return (
                <div>
                    <h3>Order Review</h3>
                    <h3>order items: {totalQuantity}</h3>
                    <h3>total:{total}</h3>
                    <h3>{props.children}</h3>
                </div>
        );
};

export default Cart;