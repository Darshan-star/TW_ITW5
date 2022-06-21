import React from 'react'
import './Booking.css'

const BookingForm = () => {
    return (
        <div>
            <div className="row d-none d-xl main text-center">
            {/* <div className="col-12 col-sm-3 dvs">
            <p className='text-black dvst'>LOCATION </p>
                    <select class="cars" name="cars">
                    <option value="volvo">Locations</option>
                        <option value="volvo">Bandra,Mumbai</option>
                        <option value="saab">Sarojini Nagar,Delhi</option>
                        <option value="mercedes">Kudapa,Chennai</option>
                        <option value="audi">St. Thomas Road,Goa</option>
                        <option value="volvo">Dekem,Kolkata</option>
                    </select>
                </div> */}

                <div className="col-12 col-sm-3 dvs ">
                    <p className='text-black dvst'>CHECK-IN </p>
                    <input type="date" className="form-control cars2" placeholder="Check-in date"></input>
                </div>

                <div className="col-12 col-sm-3 dvs ">
                <p className='text-black dvst'>CHECK-OUT </p>
                    <input type="date" className="form-control cars2" placeholder="Check-out date"></input>
                </div>

                <div className="col-12 col-sm-3 dvs">
                <p className='text-black dvst'>GUESTS </p>
                    <select class="cars" name="cars">
                    <option value="volvo">Guests</option>
                        <option value="volvo">1 Guest</option>
                        <option value="saab">2 Guests</option>
                        <option value="mercedes">3 Guests</option>
                        <option value="audi">4 Guests</option>
                    </select>
                </div>

                <div className="col-12 col-sm-2 dvss text-center">
                    <button className='btn btn-dark cars3'>Check Availability</button>
                </div>

            </div>
        </div>
    )
}

export default BookingForm
