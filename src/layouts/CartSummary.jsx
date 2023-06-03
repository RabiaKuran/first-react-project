import React from 'react'
import { NavDropdown,Dropdown} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSelector } from "react-redux";
import { Label } from "semantic-ui-react";

export default function CartSummary() {

  const {cartItems} = useSelector(state=> state.cart) 

  return ( 
    <div>
      <DropdownButton title="Sepetiniz" id="navbarScrollingDropdown">
        {
          cartItems.map((cartItem)=>(
          <NavDropdown.Item key={cartItem.product?.id} href="#action3">
            {cartItem.product?.productName}
            <Label>{cartItem.quantity}</Label>
            </NavDropdown.Item>
          ))
        }
        
        <Dropdown.Divider/>
        <Dropdown.Item as={NavLink} to="/cart">
          Sepete git
        </Dropdown.Item>
      </DropdownButton>
    </div>
  )
}
