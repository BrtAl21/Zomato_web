import React, {useState} from 'react';
import {Container,Row,Col,Button,Modal,ModalHeader,ModalBody,Nav,NavItem,NavLink,TabContent,TabPane,Card,CardTitle,CardText,CardBody,Form,FormGroup,Label,Input} from 'reactstrap';
import classnames from 'classnames';

import A1 from './images/img147.webp';
import A2 from './images/img134.jpg';
import A3 from './images/img156.jpg';
import A4 from './images/img157.jpg';
import A5 from './images/img164.webp';
import A6 from './images/img151.webp';

import A7 from './images/img127.webp';
import A8 from './images/img128.webp';
import A9 from './images/img129.webp';
import A10 from './images/img130.jpeg';
import A11 from './images/img131.jpeg';

import A12 from './images/img132.jpg';
import A13 from './images/img133.jpg';

import A14 from './images/img134.jpg';
import A15 from './images/img135.jpeg';

import A16 from './images/img136.webp';
import A17 from './images/img137.jpg';
import A18 from './images/img138.jpg';
import A19 from './images/img139.jpg';
import A20 from './images/img140.jpg';

import A21 from './images/img141.webp';
import A22 from './images/img142.webp';

import A23 from './images/img143.jpg';
import A24 from './images/img144.jpg';
import A26 from './images/img146.jpg';
import A27 from './images/img147.webp';
import A28 from './images/img148.png';

import A30 from './images/img150.jpg';
import A31 from './images/img151.webp';
import A32 from './images/img152.webp';
import A33 from './images/img153.webp';

import A34 from './images/img154.jpg';
import A35 from './images/img155.jpg';
import A36 from './images/img156.jpg';
import A37 from './images/img157.jpg';

import A38 from './images/img158.png';
import A39 from './images/img159.webp';
import A40 from './images/img160.jpg';
import A41 from './images/img161.webp';

import A42 from './images/img162.jpg';
import A43 from './images/img163.jpg';
import A44 from './images/img164.webp';
import A45 from './images/img165.jpg';
import A46 from './images/img166.jpg';

import ios from './images/ios.webp';
import googleplay from './images/googleplay.webp';


class Counter extends React.Component
{
  constructor()
  {
    super();
    this.state = {counter: 1, counter1: 1};
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
  }
  handleClick()
  {
    this.setState(({counter}) => ({counter: counter + 1}))
  }
  handleClick1()
  {
    this.setState(({counter1}) => ({counter: this.state.counter - counter1}))
  }
  render()
  {
    for(let i=0; i<=1; i++)
    {
      if(this.state.counter1 >= 0)
      {

      }
    }
    for(let j=0; j>=0; j--)
    {
      if(this.state.counter === -1)
      {
  
      }
    }
    return (
        <div>
          <button style={{border:'2px solid crimson',width:'20%'}} onClick={this.handleClick1}><span style={{color:'crimson'}}>-</span></button> {this.state.counter} <button style={{border:'2px solid crimson',width:'20%'}} onClick={this.handleClick}><span style={{color:'crimson'}}>+</span></button>
        </div>
      );
  }
}

const Freshbakery = () =>
{
	const [a,b] = useState('1');
    const toggle = tab =>
    {
      if(a != tab) b(tab);
    }

    const [f1,b1] = useState(false);
  	const fun1 = () => b1(!f1);
  	const [f2,b2] = useState(false);
  	const fun2 = () => b2(!f2);
  	const [f3,b3] = useState(false);
  	const fun3 = () => b3(!f3);
  	const [f4,b4] = useState(false);
  	const fun4 = () => b4(!f4);
  	const [f5,b5] = useState(false);
  	const fun5 = () => b5(!f5);

  	const [f6,b6] = useState(false);
  	const fun6 = () => b6(!f6);
  	const [f7,b7] = useState(false);
  	const fun7 = () => b7(!f7);

  	const [f8,b8] = useState(false);
  	const fun8 = () => b8(!f8);
  	const [f9,b9] = useState(false);
  	const fun9 = () => b9(!f9);

  	const [f10,b10] = useState(false);
  	const fun10 = () => b10(!f10);
  	const [f11,b11] = useState(false);
  	const fun11 = () => b11(!f11);
  	const [f12,b12] = useState(false);
  	const fun12 = () => b12(!f12);
  	const [f13,b13] = useState(false);
  	const fun13 = () => b13(!f13);
  	const [f14,b14] = useState(false);
  	const fun14 = () => b14(!f14);

  	const [f15,b15] = useState(false);
  	const fun15 = () => b15(!f15);
  	const [f16,b16] = useState(false);
  	const fun16 = () => b16(!f16);

  	const [f17,b17] = useState(false);
  	const fun17 = () => b17(!f17);
  	const [f18,b18] = useState(false);
  	const fun18 = () => b18(!f18);
  	const [f19,b19] = useState(false);
  	const fun19 = () => b19(!f19);
  	const [f20,b20] = useState(false);
  	const fun20 = () => b20(!f20);
  	const [f21,b21] = useState(false);
  	const fun21 = () => b21(!f21);
  	const [f22,b22] = useState(false);
  	const fun22 = () => b22(!f22);
  	const [f23,b23] = useState(false);
  	const fun23 = () => b23(!f23);

  	const [f24,b24] = useState(false);
  	const fun24 = () => b24(!f24);
  	const [f25,b25] = useState(false);
  	const fun25 = () => b25(!f25);
  	const [f26,b26] = useState(false);
  	const fun26 = () => b26(!f26);
  	const [f27,b27] = useState(false);
  	const fun27 = () => b27(!f27);

  	const [f28,b28] = useState(false);
  	const fun28 = () => b28(!f28);
  	const [f29,b29] = useState(false);
  	const fun29 = () => b29(!f29);
  	const [f30,b30] = useState(false);
  	const fun30 = () => b30(!f30);
  	const [f31,b31] = useState(false);
  	const fun31 = () => b31(!f31);

  	const [f32,b32] = useState(false);
  	const fun32 = () => b32(!f32);
  	const [f33,b33] = useState(false);
  	const fun33 = () => b33(!f33);
  	const [f34,b34] = useState(false);
  	const fun34 = () => b34(!f34);
  	const [f35,b35] = useState(false);
  	const fun35 = () => b35(!f35);

  	const [f36,b36] = useState(false);
  	const fun36 = () => b36(!f36);
  	const [f37,b37] = useState(false);
  	const fun37 = () => b37(!f37);
  	const [f38,b38] = useState(false);
  	const fun38 = () => b38(!f38);
  	const [f39,b39] = useState(false);
  	const fun39 = () => b39(!f39);
  	const [f40,b40] = useState(false);
  	const fun40 = () => b40(!f40);

  	const buy = () =>
  	{
  		alert('Buy the product successfully');
  	}
  	const add = () =>
  	{
  		alert('Add to Cart successfully');
  	}

	return(
		<div>
			<div style={{marginLeft:'10px',marginRight:'10px'}}>
				
				<Row>
					<p style={{fontSize:'13px',padding:'10px'}}>
						<a class='nklhome' href='/'>Home </a><span style={{color:'gray'}}>/</span> 
						<a class='nklnkl' href='namakkal'> Namakkal Restaurants </a><span style={{color:'gray'}}>/</span>
						<span style={{color:'gray'}}> The Fresh Bakery</span>
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
							<h3 style={{marginTop:'10px'}}>The Fresh Bakery</h3>
						</center>
					</Col>
				</Row>

				<Row>
					<Col>
						<Nav tabs>
				          <NavItem>
				            <NavLink  style={{border:'none',fontSize:'15px',cursor:'pointer'}} className={classnames({active: a === '1'})} onClick={() => {toggle('1');}}>
				              Cakes
				            </NavLink>
				          </NavItem>

				          <NavItem>
				            <NavLink style={{border:'none',fontSize:'15px',cursor:'pointer'}} className={classnames({active: a === '2'})} onClick={() => {toggle('2');}}>
				              Jar Cakes
				            </NavLink>
				          </NavItem>

				          <NavItem>
				            <NavLink style={{border:'none',fontSize:'15px',cursor:'pointer'}} className={classnames({active: a === '3'})} onClick={() => {toggle('3');}}>
				              Fresh Cakes
				            </NavLink>
				          </NavItem>

				          <NavItem>
				            <NavLink style={{border:'none',fontSize:'15px',cursor:'pointer'}} className={classnames({active: a === '4'})} onClick={() => {toggle('4');}}>
				              Cup Cakes
				            </NavLink>
				          </NavItem>

				          <NavItem>
				            <NavLink style={{border:'none',fontSize:'15px',cursor:'pointer'}} className={classnames({active: a === '5'})} onClick={() => {toggle('5');}}>
				              Premium Cakes
				            </NavLink>
				          </NavItem>

				          <NavItem>
				            <NavLink style={{border:'none',fontSize:'15px',cursor:'pointer'}} className={classnames({active: a === '6'})} onClick={() => {toggle('6');}}>
				              Premium Pastries
				            </NavLink>
				          </NavItem>

				          <NavItem>
				            <NavLink style={{border:'none',fontSize:'15px',cursor:'pointer'}} className={classnames({active: a === '7'})} onClick={() => {toggle('7');}}>
				              Cookies
				            </NavLink>
				          </NavItem>

				          <NavItem>
				            <NavLink style={{border:'none',fontSize:'15px',cursor:'pointer'}} className={classnames({active: a === '8'})} onClick={() => {toggle('8');}}>
				              Deserts
				            </NavLink>
				          </NavItem>

				          <NavItem>
				            <NavLink style={{border:'none',fontSize:'15px',cursor:'pointer'}} className={classnames({active: a === '9'})} onClick={() => {toggle('9');}}>
				              Summer Beverages
				            </NavLink>
				          </NavItem>

				          <NavItem>
				            <NavLink style={{border:'none',fontSize:'15px',cursor:'pointer'}} className={classnames({active: a === '10'})} onClick={() => {toggle('10');}}>
				              Fresh Fruits
				            </NavLink>
				          </NavItem>
				        </Nav>

				        <TabContent activeTab={a}><br/>

				          <TabPane tabId='1'>

				            <Row>
				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun1}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A7} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Premium Kitkat Cake...</h6>
					                  			<p>₹799</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f1} toggle={fun1}>
				                	<ModalHeader toggle={fun1}>CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A7} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Premium Kitkat Cakes [500g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹799</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun2}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A8} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Premium Rasmalai ...</h6>
					                  			<p>₹699</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f2} toggle={fun2}>
				                	<ModalHeader toggle={fun2}>CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A8} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Premium Rasmalai Cake [500g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹699</h6>
				                			</Col>
				                		</Row>

				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun3}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A9} width='93%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Premium Gulab Jamun...</h6>
					                  			<p>₹679</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f3} toggle={fun3}>
				                	<ModalHeader toggle={fun3}>CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A9} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Premium Gulab Jamun Cake [500g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹679</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun4}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A10} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Premium Black Forest...</h6>
					                  			<p>₹750</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f4} toggle={fun4}>
				                	<ModalHeader toggle={fun4}>CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A10} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Premium Black Forest Cake [600g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹750</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>

				            <br/>

				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun5}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A11} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Ultimate White Forest...</h6>
					                  			<p>₹750</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f5} toggle={fun5}>
				                	<ModalHeader toggle={fun5}>CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A11} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Ultimate White Forest Cake [600g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹750</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>
				          </TabPane>

          				  <TabPane tabId='2'>

          				  	<Row>
				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun6}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A12} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Chocolate Vanilla Jar...</h6>
					                  			<p>₹99</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f6} toggle={fun6}>
				                	<ModalHeader toggle={fun6}>JAR CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A12} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Chocolate Vanilla Jar Cake</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹99</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun7}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A13} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Choco Vanilla Jar Cake</h6>
					                  			<p>₹99</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f7} toggle={fun7}>
				                	<ModalHeader toggle={fun7}>JAR CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A13} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Choco Vanilla Jar Cake</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹99</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>

				          </TabPane>

				          <TabPane tabId='3'>

				            <Row>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun8}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A14} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Vanilla Cake [750g]</h6>
					                  			<p>₹349</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f8} toggle={fun8}>
				                	<ModalHeader toggle={fun8}>FRESH CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A14} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Vanilla Cake [750g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹349</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun9}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A15} width='80%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Chocolate Cake...</h6>
					                  			<p>₹349</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f9} toggle={fun9}>
				                	<ModalHeader toggle={fun9}>FRESH CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A15} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Chocolate Cake [750g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹349</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>

				          </TabPane>

				          <TabPane tabId='4'>
				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun10}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A16} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Vanilla Cupcakes [3 pics]</h6>
					                  			<p>₹149</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f10} toggle={fun10}>
				                	<ModalHeader toggle={fun10}>CUP CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A16} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Vanilla Cupcakes [3 pics]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹149</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun11}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A17} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Lavis Chocolate Box</h6>
					                  			<p>₹599</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f11} toggle={fun11}>
				                	<ModalHeader toggle={fun11}>CUP CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A17} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Lavis Chocolate Box</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹599</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun12}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A18} width='120%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Ferrero Rocher Choco...</h6>
					                  			<p>₹899</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f12} toggle={fun12}>
				                	<ModalHeader toggle={fun12}>CUP CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A18} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Ferrero Rocher Chocolate</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹899</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun13}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A19} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Choco Cupcake [3 pics]</h6>
					                  			<p>₹149</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f13} toggle={fun13}>
				                	<ModalHeader toggle={fun13}>CUP CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A19} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Choco Cupcake [3 pics]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹149</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>

				            <br/>

				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun14}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A20} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Combo Cupcake [6 pics]</h6>
					                  			<p>₹249</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f14} toggle={fun14}>
				                	<ModalHeader toggle={fun14}>CUP CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A20} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Combo Cupcake [6 pics]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹249</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>

				          </TabPane>

				          <TabPane tabId='5'>
				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun15}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A21} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Premium Vanilla Cake</h6>
					                  			<p>₹399</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f15} toggle={fun15}>
				                	<ModalHeader toggle={fun15}>PREMIUM CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A21} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Premium Vanilla Cake</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹399</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun16}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A22} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Ultimate Chocolate Cake</h6>
					                  			<p>₹449</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f16} toggle={fun16}>
				                	<ModalHeader toggle={fun16}>PREMIUM CAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A22} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Ultimate Chocolate Cake</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹449</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				              
				            </Row>
				          </TabPane>

				          <TabPane tabId='6'>
				            <Row>

				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun17}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A23} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Chocolate Cake</h6>
					                  			<p>₹20</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f17} toggle={fun17}>
				                	<ModalHeader toggle={fun17}>PREMIUM PASTRIES</ModalHeader>
				                	<ModalBody>
				                		<img src={A23} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Chocolate Cake</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹20</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun18}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A24} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Vanilla Cake</h6>
					                  			<p>₹30</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f18} toggle={fun18}>
				                	<ModalHeader toggle={fun18}>PREMIUM PASTRIES</ModalHeader>
				                	<ModalBody>
				                		<img src={A24} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Vanilla Cake</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹30</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun19}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img width='125%' alt='Pineapple cake' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Pineapple Cake</h6>
					                  			<p>₹40</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f19} toggle={fun19}>
				                	<ModalHeader toggle={fun19}>PREMIUM PASTRIES</ModalHeader>
				                	<ModalBody>
				                		<img style={{borderRadius:'15px'}} width='100%' alt='pineapple cake' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Pineapple Cake</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹40</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun20}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A26} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Red velvet Cake</h6>
					                  			<p>₹70</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f20} toggle={fun20}>
				                	<ModalHeader toggle={fun20}>PREMIUM PASTRIES</ModalHeader>
				                	<ModalBody>
				                		<img src={A26} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Red velvet Cake</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹70</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>

				            <br/>

				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun21}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A27} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Black Forest Cake</h6>
					                  			<p>₹50</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f21} toggle={fun21}>
				                	<ModalHeader toggle={fun21}>PREMIUM PASTRIES</ModalHeader>
				                	<ModalBody>
				                		<img src={A27} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Black Forest Cake</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹50</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun22}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A28} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Strawberry Cake</h6>
					                  			<p>₹25</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f22} toggle={fun22}>
				                	<ModalHeader toggle={fun22}>PREMIUM PASTRIES</ModalHeader>
				                	<ModalBody>
				                		<img src={A28} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Strawberry Cake</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹25</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun23}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img width='125%' alt='white forest cake' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>White Forest Cake</h6>
					                  			<p>₹60</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f23} toggle={fun23}>
				                	<ModalHeader toggle={fun23}>PREMIUM PASTRIES</ModalHeader>
				                	<ModalBody>
				                		<img style={{borderRadius:'15px'}} width='100%' alt='white forest cake' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>White Forest Cake</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹60</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>
				          </TabPane>

				          <TabPane tabId='7'>
				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun24}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A30} width='120%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Badam Cookies...</h6>
					                  			<p>₹100</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f24} toggle={fun24}>
				                	<ModalHeader toggle={fun24}>COOKIES</ModalHeader>
				                	<ModalBody>
				                		<img src={A30} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Badam Cookies [250g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹100</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun25}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A31} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Ragi Cookies...</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f25} toggle={fun25}>
				                	<ModalHeader toggle={fun25}>COOKIES</ModalHeader>
				                	<ModalBody>
				                		<img src={A31} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Ragi Cookies [250g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹80</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun26}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A32} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Coconut Cookies...</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f26} toggle={fun26}>
				                	<ModalHeader toggle={fun26}>COOKIES</ModalHeader>
				                	<ModalBody>
				                		<img src={A32} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Coconut Cookies [250g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹80</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun27}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A33} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Silver Collection Butter...</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f27} toggle={fun27}>
				                	<ModalHeader toggle={fun27}>COOKIES</ModalHeader>
				                	<ModalBody>
				                		<img src={A33} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Silver Collection Butter Cookies [250g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹80</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>
				          </TabPane>

				          <TabPane tabId='8'>
				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun28}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A34} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Gulab Jamun</h6>
					                  			<p>₹70</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f28} toggle={fun28}>
				                	<ModalHeader toggle={fun28}>DESERTS</ModalHeader>
				                	<ModalBody>
				                		<img src={A34} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Gulab Jamun</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹70</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun29}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A35} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Payasam</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f29} toggle={fun29}>
				                	<ModalHeader toggle={fun29}>DESERTS</ModalHeader>
				                	<ModalBody>
				                		<img src={A35} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Payasam</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹80</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun30}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A36} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Brigadeiros</h6>
					                  			<p>₹120</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f30} toggle={fun30}>
				                	<ModalHeader toggle={fun30}>DESERTS</ModalHeader>
				                	<ModalBody>
				                		<img src={A36} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Brigadeiros</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹120</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun31}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A37} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Amarkhand</h6>
					                  			<p>₹100</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f31} toggle={fun31}>
				                	<ModalHeader toggle={fun31}>DESERTS</ModalHeader>
				                	<ModalBody>
				                		<img src={A37} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Amarkhand</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹100</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>
				          </TabPane>

				          <TabPane tabId='9'>
				          	
				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun32}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A38} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Fresh Coconut Water</h6>
					                  			<p>₹70</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f32} toggle={fun32}>
				                	<ModalHeader toggle={fun32}>SUMMER BEVERAGES</ModalHeader>
				                	<ModalBody>
				                		<img src={A38} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Fresh Coconut Water</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹70</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun33}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A39} width='116%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Mor Fresh Buttermilk</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f33} toggle={fun33}>
				                	<ModalHeader toggle={fun33}>SUMMER BEVERAGES</ModalHeader>
				                	<ModalBody>
				                		<img src={A39} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Mor Fresh Buttermilk</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹80</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun34}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A40} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Sweet Lassi</h6>
					                  			<p>₹60</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f34} toggle={fun34}>
				                	<ModalHeader toggle={fun34}>SUMMER BEVERAGES</ModalHeader>
				                	<ModalBody>
				                		<img src={A40} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Sweet Lassi</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹60</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun35}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A41} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Barley Water</h6>
					                  			<p>₹50</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f35} toggle={fun35}>
				                	<ModalHeader toggle={fun35}>SUMMER BEVERAGES</ModalHeader>
				                	<ModalBody>
				                		<img src={A41} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Barley Water</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹50</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>
				          </TabPane>

				          <TabPane tabId='10'>
				          	
				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun36}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A42} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Apple [500g]</h6>
					                  			<p>₹150</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f36} toggle={fun36}>
				                	<ModalHeader toggle={fun36}>FRESH FRUITS</ModalHeader>
				                	<ModalBody>
				                		<img src={A42} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Apple [500g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹150</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun37}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A43} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Orange [500g]</h6>
					                  			<p>₹150</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f37} toggle={fun37}>
				                	<ModalHeader toggle={fun37}>FRESH FRUITS</ModalHeader>
				                	<ModalBody>
				                		<img src={A43} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Orange [500g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹150</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun38}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A44} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Grapes [500g]</h6>
					                  			<p>₹150</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f38} toggle={fun38}>
				                	<ModalHeader toggle={fun38}>FRESH FRUITS</ModalHeader>
				                	<ModalBody>
				                		<img src={A44} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Grapes [500g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹150</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun39}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A45} width='120%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Mango [500g]</h6>
					                  			<p>₹150</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f39} toggle={fun39}>
				                	<ModalHeader toggle={fun39}>FRESH FRUITS</ModalHeader>
				                	<ModalBody>
				                		<img src={A45} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Mango [500g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹150</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>

				            <br/>

				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun40}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A46} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Watermelon [500g]</h6>
					                  			<p>₹120</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f40} toggle={fun40}>
				                	<ModalHeader toggle={fun40}>FRESH FRUITS</ModalHeader>
				                	<ModalBody>
				                		<img src={A46} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h6>Watermelon [500g]</h6>
				                			</Col>
				                			<Col md={4}>
				                				<h6>₹120</h6>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h6>Quantity</h6>
				                			</Col>
				                			<Col md={6}>
				                				<center>
				                					<Counter/>
				                				</center>
				                			</Col>
				                		</Row>

				                		<br/>
				                		<center>
				                			<Button color='danger' onClick={buy}>Buy</Button> <Button color='warning' onClick={add}>Add to Cart</Button>
				                		</center>
				                	</ModalBody>
				                </Modal>
				              </Col>
				            </Row>
				          </TabPane>

        				</TabContent>
					</Col>
				</Row>
			</div>
















				<br/><br/>

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

export default Freshbakery;