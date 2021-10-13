import React from 'react';
import './OrderedItem.css'

const OrderedItem = (props) => {
        const {name, price, quantity} = props.product;
        return (
                <div className="product">
                    <h4>{name}</h4>
                    <p>price: {price}</p>
                    <p>quantity: {quantity}</p>    
                </div>
        );
};

export default OrderedItem;