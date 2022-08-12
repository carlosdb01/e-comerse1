import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const logout = () =>{
      localStorage.setItem("token", "")
      navigate("/login")
    }

    const token  = localStorage.getItem("token")
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <Nav.Link as={Button} onClick={handleShow} placement='end' > <i className="fa-solid fa-cart-plus"></i> My car </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement= 'end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>

)
};

export default NavBar;