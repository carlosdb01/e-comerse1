import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ShoppinCart from './ShoppinCart';


const NavBar = () => {

  const navigate = useNavigate()
  
  const [show, setShow] = useState(false);
  
  const token  = localStorage.getItem("token")

  
  const handleClose = () => setShow(false);
  const handleShow = () => {
  if(token){
    setShow(true);
  } else {
    navigate("/login")
  }
}

    const logout = () =>{
      localStorage.setItem("token", "")
      navigate("/login")
    }
return (
      <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/#/">E.Comerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#/">Home</Nav.Link>
              <Nav.Link href="/#/products/:id">Products</Nav.Link>
              <Nav.Link href="/#/purchases">Purchases</Nav.Link>
              {
                token ? (
                  <Nav.Link as={Button} onClick={logout}> Log out </Nav.Link>
                   ) :(        
                    <Nav.Link href="/#/login">Login</Nav.Link>
                )
              }
            </Nav>
                <Nav.Link as={Button} onClick={handleShow} > My car </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ShoppinCart show={show} handleClose={handleClose} />
    </>

)
};

export default NavBar;