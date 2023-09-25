import React,{useState} from 'react';
import {Container,Row,Col,Card,CardBody,CardTitle,CardSubtitle,Modal,ModalHeader,UncontrolledTooltip} from 'reactstrap';
import A1 from './images/img23.jpg';
import A2 from './images/img69.jpg';
import A3 from './images/img3.jpg';
import A4 from './images/img24.jpg';
import A5 from './images/img5.jpg';
import A6 from './images/img66.jpg';
import Saravanabhavan from './images/img17.jpg';
import Freshbakery from './images/img10.jpg';
import Kitchenclub from './images/img8.jpg';
import Ynot from './images/img18.jpg';


import ios from './images/ios.webp';
import googleplay from './images/googleplay.webp';


const Namakkal = () =>
{

	const [c,d] = useState(false);
	const fun2 = () => d(!c);

	const [e,f] = useState(false);
	const fun3 = () => f(!e);
	return(
		<div>
			<div style={{marginLeft:'10px',marginRight:'10px'}}>
				<Row>
					<p style={{fontSize:'13px',padding:'10px'}}>
						<a class='nklhome' href='/'>Home</a> / 
						<span style={{color:'gray'}}> Namakkal Restaurants</span>
					</p>
				</Row>

				<Row>
					<Col md={2}>
						<center>
							<img src={A1} width='200px' style={{borderRadius:'80%'}} />
						</center>
					</Col>
					<Col md={2}>
						<center>
							<img src={A2} width='200px' style={{borderRadius:'80%'}} />
						</center>
					</Col>
					<Col md={2}>
						<center>
							<img src={A3} width='200px' style={{borderRadius:'80%'}} />
						</center>
					</Col>
					<Col md={2}>
						<center>
							<img src={A4} width='200px' style={{borderRadius:'80%'}} />
						</center>
					</Col>
					<Col md={2}>
						<center>
							<img src={A5} width='200px' style={{borderRadius:'80%'}} />
						</center>
					</Col>
					<Col md={2}>
						<center>
							<img src={A6} width='200px' style={{borderRadius:'80%'}} />
						</center>
					</Col>
				</Row>

				<br/>
				<hr style={{color:'red'}}></hr>

				<Row>
					<Col>
						<center>
							<h3>Namakkal Restaurants</h3>
						</center>
					</Col>
				</Row>

				<br/>

				<Row>
					<Col md={3}>
						<a href='Saravanabhavan' class='nkla'>
						<Card class='nklcard' style={{borderRadius:'25px'}} id='res1'>
							<CardBody>

								<center>
									<img src={Saravanabhavan} style={{borderRadius:'15px',marginTop:'10px'}} width='95%' />
								</center>
								<Row style={{marginTop:'10px'}}>
									<Col md={8}>
										<CardTitle style={{fontSize:'15px',marginLeft:'10px'}}>Sree Saravana Bhavan</CardTitle>
									</Col>
									<Col md={4} style={{width:'20%',marginLeft:'35px'}}>
										<p style={{background:'darkgreen',color:'white',fontSize:'13px',borderRadius:'5px'}}>
											<center>4.5✰</center>
										</p>
									</Col>
								</Row>
								<Row>
									<Col md={12}>
										<CardSubtitle style={{fontSize:'13px',color:'gray',marginLeft:'10px'}}>South Indian, North Indian, Desserts...</CardSubtitle>
									</Col>
								</Row>


							</CardBody>
						</Card>
						<UncontrolledTooltip target='res1' placement='bottom'>
							Linked
						</UncontrolledTooltip>
						</a>
					</Col>

					<Col md={3}>
						<a href='Freshbakery' class='nkla'>
						<Card style={{borderRadius:'25px'}} id='res2'>
							<CardBody>

								<center>
									<img src={Freshbakery} style={{borderRadius:'15px',marginTop:'10px'}} width='95%' />
								</center>
								<Row style={{marginTop:'10px'}}>
									<Col md={9}>
										<CardTitle style={{fontSize:'15px',marginLeft:'10px'}}>The Fresh Bakery</CardTitle>
									</Col>
									<Col md={3} style={{width:'20%',marginLeft:'10px'}}>
										<p style={{background:'darkgreen',color:'white',fontSize:'13px',borderRadius:'5px'}}>
											<center>2.9✰</center>
										</p>
									</Col>
								</Row>
								<Row>
									<Col md={12}>
										<CardSubtitle style={{fontSize:'13px',color:'gray',marginLeft:'10px'}}>Bakery, Desserts, Cookies...</CardSubtitle>
									</Col>
								</Row>

							</CardBody>
						</Card>
						<UncontrolledTooltip target='res2' placement='bottom'>
							Linked
						</UncontrolledTooltip>
						</a>
					</Col>

					<Col md={3}>
						<a href='Kitchenclub' class='nkla'>
						<Card style={{borderRadius:'25px'}} id='res3'>
							<CardBody>

								<center>
									<img src={Kitchenclub} style={{borderRadius:'15px',marginTop:'10px'}} width='95%' />
								</center>
								<Row style={{marginTop:'10px'}}>
									<Col md={8}>
										<CardTitle style={{fontSize:'15px',marginLeft:'10px'}}>The Kitchen Club Cafe</CardTitle>
									</Col>
									<Col md={4} style={{width:'20%',marginLeft:'35px'}}>
										<p style={{background:'darkgreen',color:'white',fontSize:'13px',borderRadius:'5px'}}>
											<center>3.2✰</center>
										</p>
									</Col>
								</Row>
								<Row>
									<Col md={12}>
										<CardSubtitle style={{fontSize:'13px',color:'gray',marginLeft:'10px'}}>Fast Food, Street Food, Shake...</CardSubtitle>
									</Col>
								</Row>

							</CardBody>
						</Card>
						<UncontrolledTooltip target='res3' placement='bottom'>
							Linked
						</UncontrolledTooltip>
						</a>
					</Col>

					<Col md={3}>
						<a href='#' class='nkla'>
						<Card style={{borderRadius:'25px'}} id='res4'>
							<CardBody>

								<center>
									<img src={Ynot} style={{borderRadius:'15px',marginTop:'10px'}} width='95%' />
								</center>
								<Row style={{marginTop:'10px'}}>
									<Col md={8}>
										<CardTitle style={{fontSize:'15px',marginLeft:'10px'}}>Y Not Cafe</CardTitle>
									</Col>
									<Col md={4} style={{width:'20%',marginLeft:'35px'}}>
										<p style={{background:'darkgreen',color:'white',fontSize:'13px',borderRadius:'5px'}}>
											<center>4.1✰</center>
										</p>
									</Col>
								</Row>
								<Row>
									<Col md={12}>
										<CardSubtitle style={{fontSize:'13px',color:'gray',marginLeft:'10px'}}>Cafe, Beverages, Bakery...</CardSubtitle>
									</Col>
								</Row>

							</CardBody>
						</Card>
						<UncontrolledTooltip target='res4' placement='bottom'>
							Not Linked
						</UncontrolledTooltip>
						</a>
					</Col>
					
				</Row>

				<br/><br/>

			</div>























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

export default Namakkal;