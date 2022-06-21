import React, { useEffect } from 'react'
import AOS from 'aos';
import Menu2 from './Menu2'
import Footer from './Footer';
import './Explore.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentBlogs from './RecentBlogs'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './Menu.css'
import websitelogo from './imagesvid/websitelogo.png'
import { Link } from "react-router-dom";
import BookingForm from './BookingForm';
const Explore = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (

    <div>
     


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
              <Nav.Link className="helll " as={Link} to="/rooms">Rooms</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/services">Restaurant</Nav.Link>
              <Nav.Link className="helll active" as={Link} to="/explore">Explore</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link className="helll" as={Link} to="/contact">Contact Us</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
 
          <div className="text-center tobut">
            <button className='btn btn-dark  helll' >Book Now</button>
            </div>
        </Container>
       
      </Navbar>

      <div className="outer_div22">
        <img src="https://wallpaperaccess.com/full/176601.jpg"/>

        <div className="content d-flex align-items-center">
          <div className="container text-center ">
            {/* <h1>Welcome to Paradise Inn </h1>
            <h2 className="text-center">CHENNAI</h2> */}
             <h3 className="">Home/Explore</h3>
            
          </div>
        </div>
      </div>



      <div className="container">

      <div className="row ro1">
            <div>
                <div >
                    <div >
                        <div >
                            <h3 className='text-center mb-4 roo'>Explore our Social Spaces</h3>
                            <hr className=' mb-5'/>
                        </div>
                        <p className='text-center mb-5'>Creating that sense of togetherness is what we’re all about.
                                Our Social Spaces offer an open-plan space, designed to facilitate effortless
                                interaction with others. Discover a warm, kind and safe place where you can ground
                                easily and make long, lasting connections.</p>
                    </div>
                </div>
            </div>
        </div>




        <div className="stay">
          <h1 className="text-center"> WELCOME</h1>
        </div>
        <div className="row div1 ro2 ">
        <div overflow="hidden" className="col-12 col-lg-6 image1">
            <img src="https://wallpaperaccess.com/full/2690577.jpg" />
          </div>
          <div className="col-12 col-lg-6 text-left justify-content-sm-center">

            <p>First timer? Don&#8217;t be alarmed if you don&#8217;t see anybody when you arrive at our
              entrance.</p>
            <p>Just take the elevator up to the 5th floor and make your way through the Greenhouse right
              into the arms (as a figure of speech) of our welcoming Sidekicks. Globally savvy but locally
              rooted, our Sidekicks will serve as your problem solver, personal assistant,
              cross-pollinator and connector to the local business scene if needed. They’ll help you hit
              the ground running and assist you in getting from A to Z wherever Z might be. Tailoring to
              your need for speed or fulfilling your desire to take the long way home, they’ll serve as
              your Copenhagen guide and Paradise-Inn spokesperson.</p>
              <div className="text-center">
              <div className="text-center tobutton">
            <button className='btn btn-dark  ' >Explore</button>
            </div>
            </div>
          </div>
         
        </div>
        <div className="stay">
          <h1 className="text-center">  Check In</h1>
        </div>

        <div className="row div2 ro3">

          <div  className="col-12 col-lg-6 image1">
            <img src="https://skytouchtechnology.com/wp-content/uploads/2018/03/Monetize-hotel-guest-check-in.jpg" />
          </div>
          <div className="col-12 col-lg-6 text-left">

            <p>At Paradise-Inn, we like giving you options. We made our check in simple, safe and easy, so
              you can decide what&#8217;s best for you when you arrive:</p>
            <p><strong>Option 1.</strong> Take control and easily check yourself in at one of the
              self-check-in kiosks. Our Sidekicks are of course just a &#8220;hi there&#8221; away, should
              you need any help, and to make sure you’re feeling healthy or to answer any questions you
              may have.</p>
            <p><strong>Option 2.</strong> Would you like a more personal welcome? We&#8217;d love to say hi!
              You can check in with one of our lovely Sidekicks. They will take care of everything for you
              and provide you with all the information you need to enjoy your stay with ease.</p>
           
              <div className="text-center tobutton">
            <button className='btn btn-dark  ' >Explore</button>
            </div>
          </div>


        </div>
        <div className="stay">
          <h1 className="text-center"> Spirits Bar</h1>
        </div>
        <div className="row div3 ro4">

        <div  className="col-12 col-lg-6 image1">
            <img src="https://livezoku.com/copenhagen/wp-content/uploads/sites/4/2022/02/zoku_cph_3__DSF0133-1024x768.webp" />
          </div>
          <div className="col-12 col-lg-6 text-left">

            <p>Open from dawn to dusk, the Kindred Spirits bar serves freshly ground coffee, a rainbow of
              tea blends and a mind-bending range of spirits to lift the spirits.</p>
              <p>At Paradise-Inn, you can experience the seasons in a highly urban environment.</p>
            <p>During the day, this is the place to go for a coffee and a break from work. In the evening, a
              more intimate mood sets in where bread, cheese and wine are shared with others in the Living
              Room. Unwinding at the end of the day with a drink with other people is a good way to
              understand what Paradise-Inn is all about.</p>
              <div className="text-center tobutton">
            <button className='btn btn-dark  ' >Explore</button>
            </div>
          </div>
         
        </div>
        <div className="stay">
          <h1 className="text-center"> Living Room</h1>
        </div>
        <div className="row div4 ro5 ">

          <div  className="col-12 col-lg-6 image1">
            <img src="https://livezoku.com/copenhagen/wp-content/uploads/sites/4/2021/07/zoku_cph_CHAV0390-1024x683.jpg" />
          </div>


          <div className="col-12 col-lg-6 text-left">

            <p>Our cozy Living Room. Here brains are filled, but can be emptied too.</p>
            <p>It depends on which side of the playful scale there’s appetite. Our living room has all the
              comforts of home, and Paradise-Inn’s family of residents scattered across this living room
              might even substitute for some of the people you miss back home. This place features all the
              comforts of home: from nooks that have comfy couches and a 360-degree fireplace, to a
              library that holds inspiring reads (like the latest news or your favourite bedtime story),
              you’ll find more than enough good stuff to keep you entertained.</p>
              <div className="text-center tobutton">
            <button className='btn btn-dark  ' >Explore</button>
            </div>
          </div>

        </div>

        <div className="stay">
          <h1 className="text-center"> Living Kitchen</h1>
        </div>
        <div className="row div4  ro6">

          <div  className="col-12 col-lg-6 image1">
            <img src="https://livezoku.com/copenhagen/wp-content/uploads/sites/4/2022/02/Zoku-CPH-0222-005-1024x683.jpg" />
          </div>


          <div className="col-12 col-lg-6 text-left">

            <p>At Paradise-Inn, we have a strong need for simplicity.</p>
            <p>You can experience the seasons in a highly urban environment.At Paradise-Inn, you can experience the seasons in a highly urban environment.</p>
            <p>At Paradise-Inn, you can experience the seasons in a highly urban environment.</p>
            <p>Our worldly living kitchen is just that: simple and honest. The world’s most social activity
              is taken to another level through an open, residential atmosphere. Healthy food is served
              fast and shared at our long, communal tables, bringing new tastes and stories. Get comfy and
              enjoy a simple meal while grabbing your own drinks from the fridge, just like at home.</p>
              <div className="text-center tobutton">
            <button className='btn btn-dark  ' >Explore</button>
            </div>
          </div>

        </div>


        <div className="stay">
          <h1 className="text-center"> Working Spaces</h1>
        </div>
        <div className="row div4 ro7">

          <div  className="col-12 col-lg-6 image1">
            <img src="https://www.aeccglobal.co.id/images/content-images/Social--1024x576.webp" />
          </div>


          <div className="col-12 col-lg-6 text-left">

            <p>Your new homebase comes with an office-away-from-the-office.</p>
            <p>At Paradise-Inn, you can experience the seasons in a highly urban environment.</p>
            <p>With bright, open spaces and a lively community of like-minded local and international
              professionals, our co-working spaces are ideal for anything from writing bulky reports to
              creative brainstorm sessions. The area’s workshop is equipped with all the tools necessary
              for creating your your next big prototype. When work-time turns into play-time, our large
              working table turns into a ping-pong stadium to take your mind off of work things.</p>
              <div className="text-center tobutton">
            <button className='btn btn-dark  ' >Explore</button>
            </div>
          </div>

        </div>
        <div className="stay">
          <h1 className="text-center"> Green Spaces</h1>
        </div>

        <div className="row div4 ro8 ">

          <div  className="col-12 col-lg-6 image1">
            <img src="https://livezoku.com/copenhagen/wp-content/uploads/sites/4/2022/02/Zoku-CPH-0222-026-1024x683.jpg" />
          </div>


          <div className="col-12 col-lg-6 text-left">

            <p>Our cozy Living Room. Here brains are filled, but can be emptied too.</p>
        
            <p>Paradise-Inn comes in all sorts of lush green, both inside and out. We pride ourselves on our
              wide collection of potted plants all over Paradise-Inn, but our rooftop garden is where it’s
              at. Ah, the views! The roof garden boasts a green house and vegetable patches where small,
              roof-farmed vegetables are grown and enjoyed in our Living Kitchen. Also, there are enough
              spaces to sit down and relax in one of our hammocks amidst the happy Paradise-Inn chaos
              (including multiple green patios), and just enjoy the green environment with a spectacular
              view over the city of Copenhagen.</p>
              <div className="text-center tobutton">
            <button className='btn btn-dark  ' >Explore</button>
            </div>
          </div>

        </div>




       

            </div>
            <RecentBlogs/>
          <Footer/>
          </div>
      
  )
}

export default Explore
