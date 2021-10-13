import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderedItem from '../OrderedItem/OrderedItem';

const Review = () => {
        const [products]= useProducts()
        const [cart, setCart]=useCart(products);

const handleRemove=(key)=>{
const newCart = cart.filter(product => product.key !== key);
setCart(newCart);
removeFromDb(key);

}


        return (
                <div className="shop-container">
                 <div className="product-container">
                {
                    cart.map(product=><OrderedItem 
                        key={product.key} 
                        product={product}
                        handleRemove={handleRemove}
                        ></OrderedItem>)    
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