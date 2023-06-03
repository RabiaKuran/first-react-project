import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar, Container} from "react-bootstrap";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function Navi() {
  const {cartItems} = useSelector(state=> state.cart) 
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useNavigate()


  function handleSignOut() {
    setIsAuthenticated(false) //oturumu kapatıyoruz
    history.push("/")

  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="fixed" >
        <Container>
          <Navbar.Brand href="#">React Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >

              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Messages</Nav.Link>
            
              {cartItems.length>0 && <CartSummary />}
              {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1" /> 
              : <SignedOut signIn={handleSignIn}/>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )


}
