import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import websitelogo from './imagesvid/websitelogo.png'
// import HomeLower from './HomeLower'
import './HomeUpper.css'
import Menu from './Menu'
import BootstrapCarouselComponent from './BootstrapCarouselComponent'
import RecentBlogs from './RecentBlogs';
// import vid2 from './imagesvid/vid2.mp4'
// import TextOnHover from './TextOnHover';
import Footer from './Footer';
import Locations from './Components/Locations';
import Menu2 from './Menu2';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import './Menu.css'
import { Link } from "react-router-dom";
import BookingForm from './BookingForm';
const HomeUpper = () => {

  return (
    <>
    <Navbar className="hell p-0 m-0" bg="black"  fixed="top" expand="lg" variant="dark">
        <Container>
                 <Navbar.Brand ><img src={websitelogo} alt="img" height={60}></img></Navbar.Brand>
          {/* <Navbar.Brand className=" p-3 log text-white" href="#home">PARADISE INN</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ">
              <Nav.Link className="helll active " as={Link} to="/">Home</Nav.Link>
              

              <NavDropdown className=" helll" title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item  as={Link} to="/mumbai">Mumbai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/chennai">Chennai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/delhi">Delhi</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/kolkata">Kolkata</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/Goa">Goa</NavDropdown.Item>
                {/* <NavDropdown.Dvider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}

              </NavDropdown>
              <Nav.Link className="helll " as={Link} to="/rooms">Rooms</Nav.Link>
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
  
     {/* <div className="outer_div2">
     <video loop muted autoPlay controls = ''>
        <source src={vid2} type="video/mp4"/>
 
      </video>

 <div className="content d-flex align-items-center">
  <div className="container text-center">
           <h1>Welcome to my Website</h1>
           <h3>Never Say Never</h3>
  </div>
 </div>
      </div> */}

<div className="outer_div2">
   <img src="https://wallpaperaccess.com/full/119807.jpg" alt="img1"/>

   <div className="content d-flex align-items-center">
 <div className="container text-center">
          <h1>PARADISE INN</h1>
          <h2 className="text-center mb-4 mt-3 ">HOTELS</h2>
          <h3>Experience the paradise on earth with Paradise Inn</h3>
          <BookingForm/>
 </div>
</div>
{/* <BookingForm/> */}
     </div>
      {/* <Menu2/> */}

     




     
      <div className="stay mt-5">
         <h1 className="text-center">Services</h1>
         </div>
        <div className="row  outt">
          <div className="col-12 col-md-6 col-xl-4  ">
             
             <div className="side1 side">
                <img src="https://media.cntraveler.com/photos/53e2f492c2d3f39d3610bd02/master/w_1024,h_768,c_limit/subsix-7.jpg" alt="Image1" />
               <div className="content"> <h3 className="side11">Restaurant</h3></div>
             </div>
             <div className="side2 side">
             <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image1" />
               <div className="content"> <h3 className="side11">Gym</h3></div>
              </div>
          </div>

          <div className="col-12 d-none d-xl-block col-sm-0 col-xl-4">
          <div className="center side">
          <img src="https://images.pexels.com/photos/12075913/pexels-photo-12075913.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image1" />
               <div className="content"> <h3 className="side11">Shopping Center</h3></div>
              </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4 ">
            
          <div className=" side3 side">
          <img src="https://images.pexels.com/photos/3722923/pexels-photo-3722923.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image1" />
               <div className="content"> <h3 className="side11">Sports Complex</h3></div>
           </div>
        <div className="side4 side">
        <img src="https://images.pexels.com/photos/1487010/pexels-photo-1487010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image1" />
               <div className="content"> <h3 className="side11">Outdoor</h3></div>
         </div>

          </div>
          

          
        </div>

        <section>
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-xl-8 text-center">
    <div className="stay mt-2">
         <h1 className="text-center ">Testimonials</h1>
         </div>
      
    </div>
  </div>

  <div class="row text-center">
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          class="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 class="mb-3">Maria Smantha</h5>
      <h6 class="text-primary mb-3">Web Developer</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>Thank you so much to the Paradise Inn Team. I left something behind at the hotel and also wanted them to issue another receipt for tax purposes. They immediately worked on it and the receipt was sent in the hour by email.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star-half-alt fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-5 mb-md-0">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXu4-Scl4Wm6xzN9sYMslJ5ru9EY5gpfvHw&usqp=CAU"
          class="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 class="mb-3">Elon Musk</h5>
      <h6 class="text-primary mb-3">CEO,TESLA</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>We had our company annual offsite at Paradise Inn in Mumbai. Paradise Inn was the perfect choice for us: there are multiple large event spaces for various activities and the great staff made sure the events went smoothly.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-md-4 mb-0">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
          class="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 class="mb-3">John Smith</h5>
      <h6 class="text-primary mb-3">Marketing Specialist</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>The service here has just been fantastic; whatever we needed was brought to us right away. Our event coordinator was amazing, she has been most helpful. The food was so delicious; the entire experience was really great.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="far fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
  </div>
</section>


       
        <BootstrapCarouselComponent/>
        {/* <TextOnHover/> */}

        <RecentBlogs/>
        <Locations/>
        <Footer/>
       
    </>
  )
}

export default HomeUpper
