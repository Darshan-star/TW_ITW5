import React, { useEffect } from 'react'
import './HomeLower.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer'
import RecentBlogs from './RecentBlogs'
import AOS from 'aos';
import Locations from'./Components/Locations'
import './Goa.css'
import 'aos/dist/aos.css'; 
import BootstrapCarouselComponent from './BootstrapCarouselComponent'
import './Menu.css'


const HomeLower = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
    <>
       <div className="container">

<div  className="stay">
  <h1 className="text-center mt-5"> STAY</h1>
</div>
<div className="row div1 ">

<div overflow="hidden"  className="col-12 col-12 col-lg-6 image1">
<img src="https://wallpaperaccess.com/full/8183882.jpg" />
  </div>
<div  className="col-12 col-12 col-lg-6 text-left">
    
    <p>Paradise Inn Hotel offers exclusive services and benefits for the comfort of its guests. Among many facilities that the hotel has to offer, guests can directly access to the shopping mall and the theme & amusement park by car park hotel entrance elevators. A various choice of restaurants and cafés are available at the shopping mall. The hotel's family-friendly and home-like accommodation concept also provide many advantages such as a supermarket, a pharmacy, a tobacco shop, a hair dresser and many more within a walking distance.</p>
   <div className="text-center tobutton">
   <a href="/rooms"> <button className='btn btn-dark  ' >Explore</button></a>
            </div>
  </div>
 
</div>
<div className="stay">
  <h1 className="text-center"> Restaurant</h1>
</div>

<div className="row div2">

  <div  className="col-12 col-12 col-lg-6 image1">
    <img src="https://wallpaperaccess.com/full/3014734.jpg" />
  </div>
  <div  className="col-12 col-12 col-lg-6 text-left">
    
    <p>Paradise Inn Hotel offers exclusive services and benefits for the comfort of its guests. Among many facilities that the hotel has to offer, guests can directly access to the shopping mall and the theme & amusement park by car park hotel entrance elevators. A various choice of restaurants and cafés are available at the shopping mall. The hotel's family-friendly and home-like accommodation concept also provide many advantages such as a supermarket, a pharmacy, a tobacco shop, a hair dresser and many more within a walking distance.</p>
   <div className="text-center tobutton">
   <a href="/services"><button className='btn btn-dark  ' >Explore</button></a>
            </div>
  </div>
  

</div>
<div className="stay">
  <h1 className="text-center"> EXPLORE</h1>
</div>
<div className="row div3">
<div  className="col-12 col-12 col-lg-6 image1">
<img src="https://wallpaperaccess.com/full/6688400.jpg" />
  </div>
<div  className="col-12 col-12 col-lg-6 text-left">
    
    <p>Paradise Inn Hotel offers exclusive services and benefits for the comfort of its guests. Among many facilities that the hotel has to offer, guests can directly access to the shopping mall and the theme & amusement park by car park hotel entrance elevators. A various choice of restaurants and cafés are available at the shopping mall. The hotel's family-friendly and home-like accommodation concept also provide many advantages such as a supermarket, a pharmacy, a tobacco shop, a hair dresser and many more within a walking distance.</p>
   <div className="text-center tobutton">
   <a href="/explore"><button className='btn btn-dark  ' >Explore</button></a>
            </div>
  </div>
  
</div>
<div className="stay">
  <h1 className="text-center"> BLOGS</h1>
</div>
<div className="row div4 ">

  <div  className="col-12 col-12 col-lg-6 image1">
  <img src="https://wallpaperaccess.com/full/119920.jpg" />
  </div>


  <div  className="col-12 col-12 col-lg-6 text-left">
    
    <p>Paradise Inn Hotel offers exclusive services and benefits for the comfort of its guests. Among many facilities that the hotel has to offer, guests can directly access to the shopping mall and the theme & amusement park by car park hotel entrance elevators. A various choice of restaurants and cafés are available at the shopping mall. The hotel's family-friendly and home-like accommodation concept also provide many advantages such as a supermarket, a pharmacy, a tobacco shop, a hair dresser and many more within a walking distance.</p>
   <div className="text-center tobutton">
   <a href="/blogs"><button className='btn btn-dark  ' >Explore</button></a>
            </div>
  </div>

</div>
{/* <div className="stay">
  <h1 className="text-center"> LOCATION</h1>
</div> */}
<div className="stay ">
  <h1 className="text-center"> DISCOVER</h1>

  <div className="row m-0">

    <div className="col-12 col-12 col-lg-6 text-center  m-0">

    <div className="row  text-center yu2">
      <img src="https://wallpaperaccess.com/full/176601.jpg" alt='img1' height={580} width={600} />

      <div className="content5">
        <h2> Calangute Beach</h2>
      </div>
    </div>
    </div>







    <div className="col-12 col-12 col-lg-6 text-center  p-0">

      <div className="row  text-center yu3 ">
        <img src="https://wallpaperaccess.com/full/3060997.jpg" alt='img1' height={200} width={600} />

        <div className="content5">
          <h2>Boating</h2>
        </div>

      </div>





      <div className="row  text-center m-0">
        <div className="col-12 col-12 col-lg-6 text-center yu4 m-0">

      
        <img src="https://wallpaperaccess.com/full/2337810.jpg" alt='img1' height={300} width={300} />

        <div className="content5">
          <p>Temples</p>
        </div>

      
      </div>
     


      <div className="col-12 col-12 col-lg-6 text-center yu5 m-0">

      
        <img src="https://wallpaperaccess.com/full/176609.jpg" alt='img1' height={300} width={300} />

        <div className="content5">
          <p>Curlies</p>
        </div>

      
      </div>

      </div>
     

</div>

</div>
</div>
</div>
<BootstrapCarouselComponent/>
<RecentBlogs/>

<Locations/>
<Footer/>
    </>
  )
}

export default HomeLower
