import React from 'react'
import '../HomeUpper.css'
const Locations = () => {
  return (
    <>
    <div className="stay pb-5 mt-0">
          <h1 className="text-center"> Locations</h1>
        </div>
    <div className="row ht mt-0">



        <div className="col-6 col-sm-3 col-md-2 text-center">
            <a href="/mumbai"><img src="https://www.swantour.com/sites/default/files/rambagh-palace-jaipur-small_7.jpg"/></a>
            <h3>Mumbai</h3>
        </div>
        <div className="col-6 col-sm-3 col-md-3 col-lg-2 text-center">
        <a href="/chennai"><img src="https://wallpaperaccess.com/full/2690577.jpg"/></a>
          <h3>Chennai</h3>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-2 text-center">
          <a href="/kolkata"><img src="https://wallpapercave.com/wp/wp9914189.jpg"/></a>
          <h3>Kolkata</h3>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-2 text-center">
          <a href="/delhi"><img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"/></a>
          <h3>Delhi</h3>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-2 text-center ">
          <a href="/Goa"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aI36NspMg4pl7js-cHC3zgkp9CVTfrJVaA&usqp=CAU"/></a>
          <h3>Goa</h3>
          </div>
    </div>
    </>
      
  )
}

export default Locations
