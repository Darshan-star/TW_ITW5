import React from 'react'
import Hotel from './Hotel'
import Searchitem from './Searchitem'

import 'bootstrap/dist/css/bootstrap.min.css';
import websitelogo from './imagesvid/websitelogo.png'
// import HomeLower from './HomeLower'



// import vid2 from './imagesvid/vid2.mp4'
// import TextOnHover from './TextOnHover';
import Footer from './Footer';


import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <div>
       <div className="roomResult">

       <Navbar className="hell p-0 m-0" bg="black"  fixed="top" expand="lg" variant="dark">
        <Container>
                 <Navbar.Brand ><img src={websitelogo} alt="img" height={60}></img></Navbar.Brand>
          {/* <Navbar.Brand className=" p-3 log text-white" href="#home">PARADISE INN</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ">
              <Nav.Link className="helll  " as={Link} to="/">Home</Nav.Link>
              

              <NavDropdown className=" helll" title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item  as={Link} to="/mumbai">Mumbai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/chennai">Chennai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/delhi">Delhi</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/kolkata">Kolkata</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/Goa">Goa</NavDropdown.Item>
                {/* <NavDropdown.Dvider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}

              </NavDropdown>
              <Nav.Link className="helll active" as={Link} to="/rooms">Rooms</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/services">Restaurant</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/explore">Explore</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link className="helll" as={Link} to="/contact">Contact Us</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
 
          <div className="text-center tobut">
            <button className='btn btn-dark  helll' >Book Now</button>
            </div>
        </Container>
       
      </Navbar>



      <div className="outer_div22 mb-5">
        <img src="https://wallpaperaccess.com/full/8183887.jpg" />

        <div className="content d-flex align-items-center">
          <div className="container text-center ">
            {/* <h1>Welcome to Paradise Inn </h1>
            <h2 className="text-center">CHENNAI</h2> */}
            <h3 className="">Home/Rooms</h3>

          </div>
        </div>
      </div>



        
            <Searchitem />
            <Hotel/>

            <Footer/>
          </div>
    </div>
  )
}

export default Rooms
