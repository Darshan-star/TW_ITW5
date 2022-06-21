import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './RecentBlogs.css'

const RecentBlogs = () => {
  return (
    <div>
      <div className="stay ht4 ">
          <h1 className="text-center ">Recent Blogs</h1>
        </div>
       {/* <div className="row"  align="center">
        <div className="col-12 col-sm-4">
         <img src="https://www.adventurenation.com/blog/wp-content/uploads/2016/08/shutterstock_1480812434-hmapta-900x530.png" alt="Image1" 
         height={300} width={300} />

         <p>Lorem dsvdsjk dk kssssssssssssssssssssssppppppppppppppp sdvnppppppppvpsmddd</p>
        </div>

        <div className="col-12 col-sm-4">
        <img src="https://www.adventurenation.com/blog/wp-content/uploads/2016/08/shutterstock_1480812434-hmapta-900x530.png" alt="Image1" 
         height={300} width={300} />

         <p>Lorem dsvdsjk dk kssssssssssssssssssssssppppppppppppppp sdvnppppppppvpsmddd</p>
        </div>

        <div className="col-12 col-sm-4">
        <img src="https://www.adventurenation.com/blog/wp-content/uploads/2016/08/shutterstock_1480812434-hmapta-900x530.png" alt="Image1" 
         height={300} width={300} />

         <p>Lorem dsvdsjk dk kssssssssssssssssssssssppppppppppppppp sdvnppppppppvpsmddd</p>
        </div>
        
       </div> */}


       <div className="row mt-5">
        <div className="col-12 col-sm-4">
        <div class="card">
                    
                    <img class="card-img-top" src="https://wallpaperaccess.com/full/1546629.jpg" alt="Card image " height={300} width={300}/>
                    <div class="card-body text-center ">
                      <h4 class="card-title">Trekking in Mountains</h4>
                     {/* <!-- <p class="card-text">Some example text.</p>--> */}
                      <a href="./score.html" className="btn btn-dark tobutton2 mt-5 p-2">Read</a>
                    </div>
                  
            </div>
          </div>

          <div className="col-12 col-sm-4">
        <div class="card">
                    
                    <img class="card-img-top" src="https://wallpaperaccess.com/full/6688084.jpg" alt="Card im"height={300} width={300}/>
                    <div class="card-body text-center ">
                      <h4 class="card-title">Experiencing the Paradise</h4>
                     {/* <!-- <p class="card-text">Some example text.</p>--> */}
                      <a href="./score.html" className="btn btn-dark tobutton2 mt-5 p-2">Read</a>
                    </div>
                  
            </div>
          </div>

          <div className="col-12 col-sm-4">
        <div class="card">
                    
                    <img class="card-img-top" src="https://wallpaperaccess.com/full/944690.jpg" alt="Card im" height={300} width={300}/>
                    <div class="card-body text-center ">
                      <h4 class="card-title">Top 10 Places to visit this summer</h4>
                     {/* <!-- <p class="card-text">Some example text.</p>--> */}
                      <a href="./score.html" className="btn btn-dark tobutton2 mt-5 p-2">Read</a>
                    </div>
                  
            </div>
          </div>
       </div>
    </div>
  )
}

export default RecentBlogs
