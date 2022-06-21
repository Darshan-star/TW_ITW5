import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './Menu.css'
import { Link } from "react-router-dom";


const Menu2 = () => {
  return (
    <div>
       <Navbar className="hell"  bg="dark" expand="lg" variant="dark" fixed="top">
    <Container>
     <Navbar.Brand className=" p-3" href="#home">PARADISE INN</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className=" m-2">
         <Nav.Link className=" p-3 " as={Link} to="/">Home</Nav.Link>

         <NavDropdown className=" m-2" title="Locations" id="basic-nav-dropdown">
           <NavDropdown.Item  as={Link} to="/mumbai">Mumbai</NavDropdown.Item>
           <NavDropdown.Item as={Link} to="/chennai">Chennai</NavDropdown.Item>
           <NavDropdown.Item as={Link} to="/delhi">Delhi</NavDropdown.Item>
           <NavDropdown.Item  as={Link} to="/kolkata">Kolkata</NavDropdown.Item>
           <NavDropdown.Item  as={Link} to="/Goa">Goa</NavDropdown.Item>
           {/* <NavDropdown.Dvider />
     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}

         </NavDropdown>
         <Nav.Link className=" p-3" as={Link} to="/services">Restaurant</Nav.Link>
         <Nav.Link className=" p-3" as={Link} to="/explore">Explore</Nav.Link>
         <Nav.Link className=" p-3" as={Link} to="/blogs">Blogs</Nav.Link>
         <Nav.Link className=" p-3" as={Link} to="/contact">Contact Us</Nav.Link>
       </Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>

    </div>
  )
}

export default Menu2
