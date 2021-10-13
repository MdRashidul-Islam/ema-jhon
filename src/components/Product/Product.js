import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Product = (props) => {
        const {img, name, price, star}=props.product
        const { handleAddToCart}=props

        return (
                <div className="product">
                    <img src={img} alt="" />
                    <h4>{name}</h4>
                    <h4>Price: {price}</h4> 
                    <Rating
                     emptySymbol="far fa-star"
                     fullSymbol="fas fa-star "
                     initialRating={star}
                     readonly
                    
                    /> 
                    <br />
                    <button onClick={()=> handleAddToCart(props.product)} ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>  
                </div>
               
        );
};

export default Product;