import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
        const {img, name, price, star}=props.product
        const { handleAddToCart}=props

        return (
                <div className="product">
                    <img src={img} alt="" />
                    <h4>{name}</h4>
                    <h4>Price: {price}</h4> 
                    <h5>{star}</h5> 
                    <button onClick={()=> handleAddToCart(props.product)} ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>  
                </div>
               
        );
};

export default Product;