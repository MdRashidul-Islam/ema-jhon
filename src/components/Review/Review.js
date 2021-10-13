import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Review = () => {
        const [products]= useProducts()
        const [cart]=useCart(products)
        return (
                <div>
                    <h1>{products.length}</h1>    
                </div>
        );
};

export default Review;