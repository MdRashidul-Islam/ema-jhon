import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {
        return (
<div>
  <div className="header">
  <div>
 <img className="logo" src={logo} alt="" />
</div>

<div>
<InputGroup className="mb-3 w-100">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2">
      Button
    </Button>
  </InputGroup>
</div>

<div>
<NavLink  to="/login">Login</NavLink> 
</div>
  </div>


<div className="nav">
<nav>
<NavLink  to="/Home">Home</NavLink>
<NavLink  to="/shop">Shop</NavLink>
<NavLink  to="/review">Order Review</NavLink>
<NavLink to="/inventory">Inventory</NavLink>   
</nav>      
</div>


</div>
);
};

export default Header;