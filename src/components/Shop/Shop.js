import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
const [products, setProducts]= useState([])
const [cart, setCart]=useState([])
const [searchProduct, setSearchProduct]=useState([])

 useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>{
          setProducts(data);
          setSearchProduct(data);
        })
        },[])

useEffect(()=>{
 if(products.length){
  const savedCart= getStoredCart();
  const storedCart=[];
  for(const key in savedCart){
    const addedProduct=products.find(product=> product.key===key);
    if(addedProduct){
      const quantity= savedCart[key];
      addedProduct.quantity=quantity
      storedCart.push(addedProduct);
    }
    
  }
  setCart(storedCart)
 }
},[products])


const handleAddToCart=(product)=>{
  const newCart = [...cart, product]
  setCart(newCart);
  addToDb(product.key)
  console.log(newCart);
}

const handleSearch=event=>{
const searchText= event.target.value;
const matchedProducts= products.filter(product=> product.name.toLowerCase().includes(searchText.toLowerCase()));
setSearchProduct(matchedProducts)
}

return (
<div className="shop-container">
 <div className="product-container">
   <input onChange={handleSearch} type="text" />
   {
      searchProduct.map(product=><Product
         product={product}
         key={product.key}
         handleAddToCart={ handleAddToCart}
         ></Product>)
   }     
 </div> 


<div>
<Cart cart={cart}></Cart>
</div>  
 </div>
);
};

export default Shop;