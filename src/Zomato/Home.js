import React,{useState} from 'react';
import {UncontrolledCarousel,Container,Row,Col,UncontrolledTooltip,Card,CardBody,CardTitle,CardSubtitle,Modal,ModalHeader,ModalBody,Button,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,UncontrolledPopover} from 'reactstrap';
import A2 from './images/img26.jpg';
import A3 from './images/img3.jpg';
import A4 from './images/img4.jpg';
import A5 from './images/img35.jpg';
import A6 from './images/img6.jpg';
import A7 from './images/img7.jpg';
import A8 from './images/img8.jpg';
import A9 from './images/img9.jpg';
import A10 from './images/img10.jpg';
import A11 from './images/img11.jpg';
import A12 from './images/img12.jpg';
import A13 from './images/img13.jpg';
import A14 from './images/img14.jpg';
import A15 from './images/img15.jpg';
import A16 from './images/img16.jpg';
import A17 from './images/img17.jpg';
import A18 from './images/img18.jpg';
import A19 from './images/img19.jpg';
import A20 from './images/img66.jpg';
import A21 from './images/img21.jpg';
import A22 from './images/img22.jpg';
import A23 from './images/img23.jpg';
import A24 from './images/img24.jpg';
import A25 from './images/img25.jpg';
import B from './images/biriyani.jpg';
import ios from './images/ios.webp';
import googleplay from './images/googleplay.webp';

const Home = () =>
{

	return(
			<div style={{background:'white'}}>
				
					<Row>
						<Col>
							<center>
								<h3 style={{padding:'10px',marginTop:'10px'}}>Find The Best Restaurants, Cafes and Bars in India</h3>
							</center>
						</Col>
					</Row>

					<Row>
						<Col md={2}>
							<center>
								<img src={A2} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A3} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A4} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A5} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A6} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A7} width='115%' />
							</center>
						</Col>
					</Row>
					<Row>
						<Col md={2}>
							<center>
								<img src={A8} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A9} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A10} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A11} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A12} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A13} width='115%' />
							</center>
						</Col>
					</Row>
					<Row>
						<Col md={2}>
							<center>
								<img src={A14} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A15} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A16} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A17} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A18} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A19} width='115%' />
							</center>
						</Col>
					</Row>
					<Row>
						<Col md={2}>
							<center>
								<img src={A20} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A21} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A22} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A23} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A24} width='115%' />
							</center>
						</Col>
						<Col md={2}>
							<center>
								<img src={A25} width='115%' />
							</center>
						</Col>
					</Row>

					<br></br><br></br>

				<Container>

					<Row>
						<Col>
							<center>
								<h2>Popular Locations in Tamilnadu</h2> <br></br>
							</center>
						</Col>
					</Row>

					<Row>
						<Col md={1}></Col>
						<Col md={10}>
							<center>
								<p style={{fontSize:'24px',fontFamily:'italic'}}>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
							</center>
						</Col>
						<Col md={1}></Col>
					</Row>

					<br></br><br></br>

					<Row>
						<Col md={4}>
							<Card id='card1' style={{border:'0.1px solid gray', borderRadius:'15px', height:'60px'}}>
								<CardBody>
									<CardTitle>
										<center>
											<a href='namakkal' style={{color:'black',textDecoration:'none'}}>Namakkal Restaurants</a>
										</center>
									</CardTitle>
								</CardBody>
							</Card>
							<UncontrolledTooltip target='card1' placement='bottom'>
								linked
							</UncontrolledTooltip>
						</Col>

						<Col md={4}>
							<Card id='card2' style={{border:'0.1px solid gray', borderRadius:'15px', height:'60px'}}>
								<CardBody>
									<CardTitle>
										<center>
											<a href='#' style={{color:'black',textDecoration:'none'}}>Salem Restaurants</a>
										</center>
									</CardTitle>
								</CardBody>
							</Card>
							<UncontrolledTooltip target='card2' placement='bottom'>
								not linked
							</UncontrolledTooltip>
						</Col>

						<Col md={4}>
							<Card id='card3' style={{border:'0.1px solid gray', borderRadius:'15px', height:'60px'}}>
								<CardBody>
									<CardTitle>
										<center>
											<a href='#' style={{color:'black',textDecoration:'none'}}>Erode Restaurants</a>
										</center>
									</CardTitle>
								</CardBody>
							</Card>
							<UncontrolledTooltip target='card3' placement='bottom'>
								not linked
							</UncontrolledTooltip>
						</Col>

					</Row>

					<Row style={{marginTop:'50px'}}>
						<Col md={4}>
							<Card id='card4' style={{border:'0.1px solid gray', borderRadius:'15px', height:'60px'}}>
								<CardBody>
									<CardTitle>
										<center>
											<a href='#' style={{color:'black',textDecoration:'none'}}>Trichy Restaurants</a>
										</center>
									</CardTitle>
								</CardBody>
							</Card>
							<UncontrolledTooltip target='card4' placement='bottom'>
								not linked
							</UncontrolledTooltip>
						</Col>

						<Col md={4}>
							<Card id='card5' style={{border:'0.1px solid gray', borderRadius:'15px', height:'60px'}}>
								<CardBody>
									<CardTitle>
										<center>
											<a href='#' style={{color:'black',textDecoration:'none'}}>Chennai Restaurants</a>
										</center>
									</CardTitle>
								</CardBody>
							</Card>
							<UncontrolledTooltip target='card5' placement='bottom'>
								not linked
							</UncontrolledTooltip>
						</Col>

						<Col md={4}>
							<Card id='card6' style={{border:'0.1px solid gray', borderRadius:'15px', height:'60px'}}>
								<CardBody>
									<CardTitle>
										<center>
											<a href='#' style={{color:'black',textDecoration:'none'}}>Coimbatore Restaurants</a>
										</center>
									</CardTitle>
								</CardBody>
							</Card>
							<UncontrolledTooltip target='card6' placement='bottom'>
								not linked
							</UncontrolledTooltip>
						</Col>

					</Row>

					<Row style={{marginTop:'50px'}}>
						<Col md={4}>
							<Card id='card7' style={{border:'0.1px solid gray', borderRadius:'15px', height:'60px'}}>
								<CardBody>
									<CardTitle>
										<center>
											<a href='#' style={{color:'black',textDecoration:'none'}}>Dindugal Restaurants</a>
										</center>
									</CardTitle>
								</CardBody>
							</Card>
							<UncontrolledTooltip target='card7' placement='bottom'>
								not linked
							</UncontrolledTooltip>
						</Col>

						<Col md={4}>
							<Card id='card8' style={{border:'0.1px solid gray', borderRadius:'15px', height:'60px'}}>
								<CardBody>
									<CardTitle>
										<center>
											<a href='#' style={{color:'black',textDecoration:'none'}}>Madurai Restaurants</a>
										</center>
									</CardTitle>
								</CardBody>
							</Card>
							<UncontrolledTooltip target='card8' placement='bottom'>
								not linked
							</UncontrolledTooltip>
						</Col>

						<Col md={4}>
							<Card id='card9' style={{border:'0.1px solid gray', borderRadius:'15px', height:'60px'}}>
								<CardBody>
									<CardTitle>
										<center>
											<a href='#' style={{color:'black',textDecoration:'none'}}>Karur Restaurants</a>
										</center>
									</CardTitle>
								</CardBody>
							</Card>
							<UncontrolledTooltip target='card9' placement='bottom'>
								not linked
							</UncontrolledTooltip>
						</Col>

					</Row>



					
					<p style={{marginTop:'80px'}}></p>

				</Container>








				<div style={{background:'lightgray'}}>
				<Container>
						<Row>
							<Col style={{marginTop:'20px'}}>
								<center>
									<h2>Zomato</h2>
								</center>
							</Col>

							
						</Row>

						<Row style={{marginTop:'20px'}}>
							<Col md={10}>
								<Row>
									<Col md={3}>
										<h6 style={{fontSize:'16px'}}>ABOUT ZOMATO</h6>
										<p style={{fontSize:'14px'}}>Who We Are</p>
										<p style={{fontSize:'14px'}}>Blog</p>
										<p style={{fontSize:'14px'}}>Work With Us</p>
										<p style={{fontSize:'14px'}}>Investor Relations</p>
										<p style={{fontSize:'14px'}}>Report Fraud</p>
										<p style={{fontSize:'14px'}}>Contact Us</p>
									</Col>

									<Col md={3}>
										<h6 style={{fontSize:'16px'}}>ZOMAVERSE</h6>
										<p style={{fontSize:'14px'}}>Zomato</p>
										<p style={{fontSize:'14px'}}>Blinkit</p>
										<p style={{fontSize:'14px'}}>Feeding India</p>
										<p style={{fontSize:'14px'}}>Hyperpure</p>
										<p style={{fontSize:'14px'}}>Zomaland</p>
									</Col>

									<Col md={3}>
										<h6 style={{fontSize:'16px'}}>FOR RESTAURANTS</h6>
										<p style={{fontSize:'14px'}}>Partner With Us</p>
										<p style={{fontSize:'14px'}}>Apps For You</p>

										<h6 style={{fontSize:'16px'}}>FOR ENTERPRISES</h6>
										<p style={{fontSize:'14px'}}>Zomato For Enterprise</p>
									</Col>

									<Col md={3}>
										<h6 style={{fontSize:'16px'}}>LEAR MORE</h6>
										<p style={{fontSize:'14px'}}>Privacy</p>
										<p style={{fontSize:'14px'}}>Security</p>
										<p style={{fontSize:'14px'}}>Terms</p>
										<p style={{fontSize:'14px'}}>Sitemap</p>
									</Col>
								</Row>
							</Col>

							<Col md={2}>
								<center>
									<h6 style={{fontSize:'16px'}}>SOCIAL LINKS</h6>
									<img src={ios} width='100%' /><br/><br/>
									<img src={googleplay} width='100%' />
								</center>
							</Col>
						</Row>

						<Row>
							<Col>
								<hr style={{color:'black'}}></hr>
								<p style={{fontSize:'13px'}}>
									By continuing past this page, your agree to our Terms of Services, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008 - 2023 <span>&copy;</span> Zomato<sup>TM</sup> Ltd. All rights reserved.
								</p>
							</Col>
						</Row>

						</Container>

				</div>
			</div>
		);
}

export default Home;