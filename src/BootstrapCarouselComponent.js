// src/components/bootstrap-carousel.component.js
import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class BootstrapCarouselComponent extends React.Component {
    render() {
        return (
            <div>
                 <div className="stay mt-5">
         <h1 className="text-center">Amenities</h1>
         </div>
                <div className='container-fluid m-0' >
                    {/* <div className="row">
                        <div className="col-sm-12">

                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images.pexels.com/photos/122244/pexels-photo-122244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="First slide"
                                        height={500} width={600}
                                    />



                                    <Carousel.Caption>
                                        <h3>Indoor Swimming Pools</h3>
                                        <p>Indoor swimming pools,we have got it covered too.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 "
                                        src="https://wallpaperaccess.com/full/3302874.jpg"
                                        alt="Third slide"
                                        height={500} width={600}
                                    />




                                    <Carousel.Caption>
                                        <h3>Movie Theatres</h3>
                                        <p>Movie Theatres are one of the prime services  provided by our Hotel.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>


                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://wallpaperaccess.com/full/3692584.jpg"
                                        alt="Second slide"
                                        height={500} width={600}
                                    />

                                    <Carousel.Caption>
                                        <h3>Restaurants</h3>
                                        <p>Experience Luxury with Paradise Inn Restaurants.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default BootstrapCarouselComponent;
