import React,{useState} from 'react'
import './services.css'
import './Explore.css'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import websitelogo from './imagesvid/websitelogo.png'
import Menu2 from './Menu2'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './Menu.css'
import { Link } from "react-router-dom";

import BookingForm from './BookingForm';
function Services() {
    return (
      <div className="App">
      
     
    <Navbar className="hell p-0 m-0" bg="black"  fixed="top" expand="lg" variant="dark">
        <Container>
                 <Navbar.Brand ><img src={websitelogo} alt="img" height={60}></img></Navbar.Brand>
          {/* <Navbar.Brand className=" p-3 log text-white" href="#home">PARADISE INN</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ">
              <Nav.Link className="helll " as={Link} to="/">Home</Nav.Link>

              <NavDropdown className=" helll" title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item  as={Link} to="/mumbai">Mumbai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/chennai">Chennai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/delhi">Delhi</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/kolkata">Kolkata</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/Goa">Goa</NavDropdown.Item>
                {/* <NavDropdown.Dvider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}

              </NavDropdown>
              <Nav.Link className="helll" as={Link} to="/rooms">Rooms</Nav.Link>
              <Nav.Link className="helll active" as={Link} to="/services">Restaurant</Nav.Link>
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
        <img src="https://wallpaperaccess.com/full/1916444.jpg"/>

        <div className="content d-flex align-items-center">
          <div className="container text-center ">
            {/* <h1>Welcome to Paradise Inn </h1>
            <h2 className="text-center">CHENNAI</h2> */}
             <h3 className="">Home/Restaurant</h3>
            
          </div>
        </div>
      </div>

      <div >
                    <div >
                        <div >
                            <p className='text-center  rooo'>Time for Meals</p>
                            
                        </div>

                        <div >
                            <h1 className='text-center mb-4 mt-4'>The World of Foods</h1>
                            <hr className=' mb-5'/>
                          
                        </div>
                        <p className='text-center mb-5'>Creating that sense of togetherness is what we’re all about.
                                Our Social Spaces offer an open-plan space, designed to facilitate effortless
                                interaction with others. Discover a warm, kind and safe place where you can ground
                                easily and make long, lasting connections.</p>

                                <p class="text-center mb-5">Victor Henderson - Chief Chief</p>
                    </div>
                </div>
<div className="container">
                <div className="row mt-8">
        <div className="col-12 col-sm-4">
        <div class="card">
                    
                    <img class="card-img-top" src="https://www.basiwoods.com/images/03_01_restaurant/meals/img.jpg" alt="Card image " height={300} width={300}/>
                    <div class="card-body text-center mb-5">
                      <h4 class="card-title">Breakfast</h4>
                     {/* <!-- <p class="card-text">Some example text.</p>--> */}
                     <p class="text-center ">6:00 am - 9:00 am</p>
                     
                    </div>
                  
            </div>
          </div>

          <div className="col-12 col-sm-4">
        <div class="card">
                    
                    <img class="card-img-top" src="https://www.basiwoods.com/images/03_01_restaurant/meals/img2.jpg" alt="Card im"height={300} width={300}/>
                    <div class="card-body text-center mb-5">
                      <h4 class="card-title">Lunch</h4>
                     {/* <!-- <p class="card-text">Some example text.</p>--> */}
                     <p class="text-center ">11:00 am - 13:00 pm</p>
                    </div>
                  
            </div>
          </div>

          <div className="col-12 col-sm-4">
        <div class="card">
                    
                    <img class="card-img-top" src="https://www.basiwoods.com/images/03_01_restaurant/meals/img1.jpg" alt="Card im" height={300} width={300}/>
                    <div class="card-body text-center mb-5">
                      <h4 class="card-title">Dinner</h4>
                     {/* <!-- <p class="card-text">Some example text.</p>--> */}
                     <p class="text-center">17:00 pm - 20:00 pm</p>
                    </div>
                  
            </div>
          </div>
       </div>


    <div class=" container menu mb-5">
        <div class="heading">
            
            <h1>PARADISE INN</h1>
            <h3>&mdash; MAIN MENU &mdash; </h3>
        </div>
        <div class="food-items">
            <img src="https://www.cookwithmanali.com/wp-content/uploads/2019/03/Creamy-Tomato-Basil-Pasta-Instant-Pot-500x500.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Alfredo Pasta</h5>
                    <h5 class="price">Rs. 349</h5>
                </div>
                <p>Classic creamy pasta tossed in a rich alfredo sauce made with parmesan cheese, whipping cream and seasonings.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://c.ndtvimg.com/2020-01/ko06bsh8_lava-cake_625x300_22_January_20.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Choco Lava Cake</h5>
                    <h5 class="price">Rs. 115</h5>
                </div>
                <p>Classic creamy choco lava cake tossed in a choco made with dark chocolates from choco tree.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220428140436-04-classic-american-hamburgers.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Smoky Hamburger</h5>
                    <h5 class="price">Rs. 259</h5>
                </div>
                <p>A hamburger is a sandwich consisting of a cooked meat patty on a bun or roll.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://kfoods.com/images1/newrecipeicon/hyderabadi-chicken-biryani_11268.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Chicken Biryani</h5>
                    <h5 class="price">Rs. 499</h5>
                </div>
                <p>This meal is made of fragrant basmati rice, tender spiced chicken, and 
                    caramelized onions, and it can be cooked in less than an hour while maintaining the 
                    same authentic flavor and texture of traditional versions.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://c.ndtvimg.com/2020-12/gsb6apq_biryani_625x300_23_December_20.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Hyderabadi Dum Biryani</h5>
                    <h5 class="price">Rs. 449</h5>
                </div>
                <p>This meal is made of fragrant basmati rice, tender spiced chicken, and caramelized 
                    onions, and it can be cooked in less than an hour while maintaining the same authentic 
                    flavor and texture of traditional versions.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://www.awesomecuisine.com/wp-content/uploads/2014/03/chicken-tikka.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Chicken Tikka</h5>
                    <h5 class="price">Rs. 299</h5>
                </div>
                <p>Boneless chicken pieces are marinated with yogurt and spice and then grilled to perfection.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://c.ndtvimg.com/2021-08/0okn1nfo_butter-chicken-meatballs_625x300_04_August_21.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Butter Chicken</h5>
                    <h5 class="price">Rs. 349</h5>
                </div>
                <p>Type of curry made from chicken with a spiced tomato and butter (makhan) sauce.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>
        

        <div class="food-items">
            <img src="https://static.toiimg.com/photo/78294659.cms"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Classic Fries</h5>
                    <h5 class="price">Rs. 99</h5>
                </div>
                <p>Deep-fried, very thin, salted slices of potato that are usually served at room temperature.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://foodie.sysco.com/wp-content/uploads/2019/06/SummerRecipe_PeriPeriFries_1400x850.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Peri Peri Fries</h5>
                    <h5 class="price">Rs. 129</h5>
                </div>
                <p>Deep-fried, very thin, salted slices of potato that are usually served at room temperature.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2016/08/kadai-paneer-gravy-recipe-step-by-step-instructions.jpg?fit=3075%2C2747&quality=65&strip=all&ssl=1"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Kadhai Paneer</h5>
                    <h5 class="price">Rs. 349</h5>
                </div>
                <p>Indian Cottage Cheese and bell peppers are cooked in freshly ground spicy masala!</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Paneer Tikka</h5>
                    <h5 class="price">Rs. 229</h5>
                </div>
                <p>Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://thumbs.dreamstime.com/b/pizza-margherita-margarita-mozzarella-cheese-tomato-olive-italian-pizza-pizza-margherita-margarita-mozzarella-133884864.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Classic Margherita</h5>
                    <h5 class="price">Rs. 249</h5>
                </div>
                <p>Flavorful Margherita Pizza made with homemade whole wheat pizza crust, scratch-made tomato sauce, 
                    melty mozzarella cheese and fresh basil.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://static.onecms.io/wp-content/uploads/sites/9/2021/05/17/rajma-burgers-FT-RECIPE0621.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Veggie Burger</h5>
                    <h5 class="price">Rs. 79</h5>
                </div>
                <p>Veggie burgers are made from vegetables, whole grains, and legumes</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://www.tiffinboxfood.com/wp-content/uploads/2020/03/chicken-momo-1.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Steam Momos</h5>
                    <h5 class="price">Rs. 59</h5>
                </div>
                <p>Momo is a type of steamed dumpling with some form of filling, most commonly buff and it is originally from Tibet.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://thechutneylife.com/wp-content/uploads/2017/09/Veg-Hakka-Noodles-The-Chutney-Life-4.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Veg Noodles</h5>
                    <h5 class="price">Rs. 69</h5>
                </div>
                <p>Vegetable noodles is a healthy Chinese inspired dish where cooked noodles are stir fried with lots of vegetables.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://insanelygoodrecipes.com/wp-content/uploads/2021/07/Chocolate-Shake-with-Chocolate-Syrup-Whipped-Cream-and-Cherry.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>chocolate Shake</h5>
                    <h5 class="price">Rs. 89</h5>
                </div>
                <p>Our chocolate shake is made with delicious soft serve, chocolate syrup and finished off with a creamy whipped topping.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/strawberry-milkshake-recipe.jpg"/>
            <div class="details">
                <div class="details-sub">
                    <h5>strawberry Shake</h5>
                    <h5 class="price">Rs. 89</h5>
                </div>
                <p>Strawberry milkshake is a delicious drink made with strawberries, milk, ice cream and flavoring ingredients like vanilla 
                    extract or strawberry syrup.</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

        <div class="food-items">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLgnUPlGEMCHtmbTTr-DmBeUd5jI-slnW2Q&usqp=CAU"/>
            <div class="details">
                <div class="details-sub">
                    <h5>Oreo Skake</h5>
                    <h5 class="price">Rs. 119</h5>
                </div>
                <p>Oreo Milkshake is everything you want on a hot summer day!! Its thick, creamy, delicious and satisfies all the sweet 
                    cravings!!</p>
                {/* <!-- <button>Add to Cart</button> --> */}
            </div>
        </div>

      

       

        

    </div>

      </div>
      <Footer/>
      </div>
    );
  }
  

export default Services
