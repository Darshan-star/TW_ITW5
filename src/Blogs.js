import React from 'react'
import Menu2 from './Menu2'
import './Explore.css'
import RecentBlogs from './RecentBlogs'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import websitelogo from './imagesvid/websitelogo.png'
import './Menu.css'
import { Link } from "react-router-dom";
import BookingForm from './BookingForm';
import Footer from './Footer';
const Blogs = () => {
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
              <Nav.Link className="helll " as={Link} to="/explore">Explore</Nav.Link>
              <Nav.Link className="helll active" as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link className="helll" as={Link} to="/contact">Contact Us</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
 
          <div className="text-center tobut">
            <button className='btn btn-dark  helll' >Book Now</button>
            </div>
        </Container>
       
      </Navbar>
  






      <div className="outer_div22">
        <img src="https://wallpaperaccess.com/full/2433853.jpg" />

        <div className="content d-flex align-items-center">
          <div className="container text-center ">
            {/* <h1>Welcome to Paradise Inn </h1>
            <h2 className="text-center">CHENNAI</h2> */}
            <h3 className="">Home/Blogs</h3>

          </div>
        </div>
      </div>
      <div >


        <div className=' container ri'>
          <div class="heading">

            <h1>PARADISE INN</h1>
            <h3>&mdash; BLOGS &mdash; </h3>
          </div>


          {/* <p className='text-center mt-5 mb-5'>Creating that sense of togetherness is what we’re all about.
                                Our Social Spaces offer an open-plan space, designed to facilitate effortless
                                interaction with others. Discover a warm, kind and safe place where you can ground
                                easily and make long, lasting connections.</p> */}


        </div>
      </div>

      <div class=" container menu mt-5 mb-5">

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/1850928.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/6599577.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/176601.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/6599671.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/1410760.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/6688260.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/6688369.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>


        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/6688400.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/2634975.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/2635073.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/176609.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/7993381.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/8183882.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/6352058.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>

        <div class="food-items">
          <img src="https://wallpaperaccess.com/full/176629.jpg" />
          <div class="details text-center">

            <h5 className='text-center'>Top 10 places to visit in Mumbai</h5>

            <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
            {/* <!-- <button>Add to Cart</button> --> */}
            <div className="text-center">
              <button className='btn btn-dark tobutton2 mt-2 mb-2 text-center'>Read</button>
            </div>
          </div>
        </div>






      </div>

      <RecentBlogs />

      <Footer/>
    </div>
  )
}

export default Blogs
