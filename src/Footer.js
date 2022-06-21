import React from "react";
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoffee } from '@fortawesome/free-solid-svg-icons'
import {  faYoutube,faInstagram,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import wiz from './imagesvid/wiz.png'

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
	
return (
	// <Box>
	// <h1 style={{ color: "#fff",
	// 			textAlign: "center",
	// 			marginTop: "50px",
    //             marginBottom:"60px" }}>
	// PARADISE INN- EXPERIENCE LUXURY WITH COMFORT
	// </h1>
	// <Container>
	// 	<Row>
	// 	<Column>
	// 		<Heading classNameName="hrt">About Us</Heading>
	// 		<FooterLink href="#">Aim</FooterLink>
	// 		<FooterLink href="#">Vision</FooterLink>
	// 		<FooterLink href="#">Testimonials</FooterLink>
	// 	</Column>
	// 	<Column>
	// 		<Heading className="hrt">Popular Links</Heading>
	// 		<FooterLink href="#">Restaurant</FooterLink>
	// 		<FooterLink href="#">Rooms</FooterLink>
	// 		<FooterLink href="#"></FooterLink>
	// 		<FooterLink href="#">Teaching</FooterLink>
	// 	</Column>
	// 	<Column>
	// 		<Heading className="hrt">Contact</Heading>
	// 		<FooterLink href="#">Mumbai</FooterLink>
	// 		<FooterLink href="#">Delhi</FooterLink>
	// 		<FooterLink href="#">Goa</FooterLink>
	// 		<FooterLink href="#">Chennai</FooterLink>
	// 		<FooterLink href="#">Kolkata</FooterLink>
	// 	</Column>
	// 	<Column>
	// 		<Heading className="hrt">Social Media</Heading>
	// 		<FooterLink href="#">
	// 		<i className="fab fa-facebook-f">
	// 			<span style={{ marginLeft: "10px" }}>
	// 			Facebook
	// 			</span>
	// 		</i>
	// 		</FooterLink>
	// 		<FooterLink href="#">
	// 		<i className="fab fa-instagram">
	// 			<span style={{ marginLeft: "10px" }}>
	// 			Instagram
	// 			</span>
	// 		</i>
	// 		</FooterLink>
	// 		<FooterLink href="#">
	// 		<i className="fab fa-twitter">
	// 			<span style={{ marginLeft: "10px" }}>
	// 			Twitter
	// 			</span>
	// 		</i>
	// 		</FooterLink>
	// 		<FooterLink href="#">
	// 		<i className="fab fa-youtube">
	// 			<span style={{ marginLeft: "10px" }}>
	// 			 Youtube
	// 			</span>
	// 		</i>
	// 		</FooterLink>
	// 	</Column>
	// 	</Row>
	// </Container>
	// </Box>



<body>

  <footer class="footer">
  	 <div class="container">
  	 	<div class="row text-center">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
					   <li><a href="#">Contact Us</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>LOCATION</h4>
  	 			<ul>
  	 				<li><a href="/mumbai">Mumbai</a></li>
  	 				<li><a href="/delhi">Delhi</a></li>
  	 				<li><a href="/chennai">Chennai</a></li>
  	 				<li><a href="/kolkata">Kolkata</a></li>
  	 				<li><a href="/Goa">Goa</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Useful Links</h4>
  	 			<ul>
  	 				<li><a href="#">Rooms</a></li>
  	 				<li><a href="#">Blogs</a></li>
  	 				<li><a href="#">Contact</a></li>
					   <li><a href="#">Explore</a></li>
  	 				<li><a href="#">Other Services</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links text-center">
				   {/* <FontAwesomeIcon icon={faYoutube} className="ico " color="red"/>
				   <FontAwesomeIcon icon={faTwitter} className="ico" color="blue"/>
				   <FontAwesomeIcon icon={faInstagram} className="ico" color="red"/>
				   <FontAwesomeIcon icon={faLinkedin} className="ico" color="blue"/> */}
  	 				<a href="https://react-bootstrap.github.io/components/buttons/"><i className="fab fa-youtube">  <FontAwesomeIcon icon={faYoutube} className="ico " color="red"/></i></a>
  	 				<a href="#"><i className="fab fa-twitter">  <FontAwesomeIcon icon={faTwitter} className="ico " color="#1DA1F2"/></i></a>
  	 				<a href="#"><i className="fab fa-instagram">  <FontAwesomeIcon icon={faInstagram} className="ico " color="#bc2a8d"/></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in">  <FontAwesomeIcon icon={faLinkedin} className="ico " color="#0072b1"/></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
	   <div className="text-center p-3 bg-black  foot ">
  
  Copyright © 2022 - PARADISE INN. All Rights Reserved. || Magically Created by <span className="p-2"><img  src={wiz} alt="img" height={30}/></span>The Wizards
</div>
  </footer>
 

</body>

);
};
export default Footer;
