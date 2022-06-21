import './App.css';
import HomeUpper from './HomeUpper';
import HomeLower from './HomeLower';

import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home2Upper from './Home2Upper';
import Mumbai from './Mumbai';
import Chennai from './Chennai';
import Kolkata from './Kolkata';
import Goa from './Goa';
import Delhi from './Delhi';
import Explore from './Explore';
import Services from './Services';
import Blogs from './Blogs';
import Contact from './Contact';
import Rooms from './Rooms';
//import Home2Upper from './Home2Upper';

function App() {
  return (
  <BrowserRouter>
    <>
    <Routes>
        <Route path="/" element={<HomeUpper/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/mumbai" element={<Home2Upper/>}/>
        <Route path="/mumbai" element={<Home2Upper/>}/>
        <Route path="/delhi" element={<Delhi/>}/>
        <Route path="/kolkata" element={<Kolkata/>}/>
        <Route path="/chennai" element={<Chennai/>}/>
        <Route path="/Goa" element={<Goa/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>

    </BrowserRouter>
  );
}

export default App;
