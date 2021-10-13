import React from 'react';
import './OrderedItem.css'

const OrderedItem = (props) => {
        const {name, price, quantity, key} = props.product;
        const {handleRemove}=props;
        return (
                <div className="product">
                    <h4>{name}</h4>
                    <p>price: {price}</p>
                    <p>quantity: {quantity}</p> 
                    <button onClick={()=>handleRemove(key)}>Remove</button>   
                </div>
        );
};

export default OrderedItem;