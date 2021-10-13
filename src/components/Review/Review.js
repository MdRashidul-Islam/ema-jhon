import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import OrderedItem from '../OrderedItem/OrderedItem';

const Review = () => {
        const [products]= useProducts()
        const [cart]=useCart(products)
        return (
                <div className="shop-container">
                 <div className="product-container">
                {
                    cart.map(product=><OrderedItem product={product}></OrderedItem>)    
                }
                 </div>
                <div>
                 <h1>{products.length}</h1> 
                <Cart cart={cart}></Cart> 
                </div>
                   
                </div>
        );
};

export default Review;