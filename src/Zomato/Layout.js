import {Link, Outlet} from 'react-router-dom';
import React, {useState} from 'react';
import {Button,Modal,ModalHeader,ModalBody,Form,FormGroup,Label,Input,Row,Col,DropdownItem} from 'reactstrap';


const Layout = () =>
{
	const [a,b] = useState(false);
  	const fun1 = () => b(!a);

  	const [c,d] = useState(false);
  	const fun2 = () => d(!c);
	return(
		<div>
			<>
				<nav>
					<Row className='home1'>

						<Col md={2}>
							<h1 className='home2'>Zomato</h1>
						</Col>

						<Col md={8}>
							<center>
								<Input type='text' name='search' placeholder='search for restaurants, dishes, ice cream or deserts' style={{marginTop:'20px',width:'65%'}} />
							</center>
						</Col>

						<Col md={2}>
							<ul className='home3'>
								<li>
								<Button style={{background:'tomato',border:'none',color:'white',marginTop:'10px'}} onClick={fun1}>LogIn</Button>
						        <Modal style={{width:'25%'}} isOpen={a} toggle={fun1}>
						          <ModalHeader toggle={fun1}>LogIn</ModalHeader>
						          <ModalBody>
						          	<Form>

						          		<FormGroup row>
						          			<Col>
						          				<Input type='email' name='email' placeholder='E-Mail' />
						          			</Col>
						          		</FormGroup>

						          		<FormGroup row>
						          			<Col>
						          				<Input type='password' name='email' placeholder='Password' />
						          			</Col>
						          		</FormGroup>

						          		<FormGroup row>
						          			<Col md={12}>
						          				<center>
						          					<Button style={{width:'48%'}} color='danger'>Login</Button> <Button type='reset' style={{width:'48%'}} color='warning'>Cancel</Button>
						          				</center>
						          			</Col>
						          		</FormGroup>

						          		<Row>
						          			<Col md={5}><hr></hr></Col>
						          			<Col md={2}>
						          				<center>or</center>
						          			</Col>
						          			<Col md={5}><hr></hr></Col>	
						          		</Row>

						          		<center>
						          			<Input type='button' value='Continue with Google' />
						          			<br></br>
						          			<Input type='button' value='Continue with Phone Number' />
						          		</center>


						          		<p style={{marginTop:'8px'}}>New to Zomato?<Button outline color='light' style={{color:'red',border:'none',marginBottom:'3px'}} onClick={fun2}>Create account</Button></p>

						          	</Form>
						          </ModalBody>
						        </Modal>
							</li>

							<li>
								<Button style={{background:'tomato',border:'none',color:'white',marginTop:'10px',marginLeft:'10px'}} onClick={fun2}>SignUp</Button>
						        <Modal style={{width:'25%'}} isOpen={c} toggle={fun2}>
						          <ModalHeader toggle={fun2}>Sign Up</ModalHeader>
						          <ModalBody>
						          	<Form>

						          		<FormGroup row>
						          			<Col>
						          				<Input type='name' name='name' placeholder='Full Name' />
						          			</Col>
						          		</FormGroup>

						          		<FormGroup row>
						          			<Col>
						          				<Input type='email' name='email' placeholder='Email' />
						          			</Col>
						          		</FormGroup>

						          		<FormGroup row>
						          			<Col md={1}>
						          				<center>
						          					<Input type='checkbox'/>
						          				</center>
						          			</Col>
						          			<Col md={11}>
						          				<Label style={{fontSize:'12px'}}>
						          					<span>I agree to Zomato </span>
						          					<span style={{color:'red'}}>Terms of service, Privacy Policy </span>and 
						          					<span style={{color:'red'}}> content Policies</span>
						          				</Label>
						          			</Col>
						          		</FormGroup>

						          		<center>
						          			<Button style={{width:'100%',background:'crimson'}}>Create account</Button>
						          		</center>

						          		<Row>
						          			<Col md={5}><hr></hr></Col>
						          			<Col md={2}>
						          				<center>or</center>
						          			</Col>
						          			<Col md={5}><hr></hr></Col>	
						          		</Row>

						          		<center>
						          			<Input type='button' value='Continue with Google' />
						          		</center>

						          		<p style={{marginTop:'8px'}}>Already have an account?<Button outline color='light' style={{color:'red',border:'none',marginBottom:'3px'}} onClick={fun1}>LogIn</Button></p>



						          	</Form>
						          </ModalBody>
						        </Modal>
							</li>

							<Link to='/'></Link>
							<Link to='namakkal'></Link>
							<Link to='saravanabhavan'></Link>
							<Link to='freshbakery'></Link>
							<Link to='kitchenclub'></Link>

						</ul>
							</Col>
						</Row>
						
						<Outlet/>
					</nav>
				</>
			</div>
		);
}

export default Layout;	