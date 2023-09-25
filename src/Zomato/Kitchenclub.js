import React, {useState} from 'react';
import {Container,Row,Col,Button,Modal,ModalHeader,ModalBody,Nav,NavItem,NavLink,TabContent,TabPane,Card,CardTitle,CardText,CardBody,Form,FormGroup,Label,Input} from 'reactstrap';
import classnames from 'classnames';
import A1 from './images/img52.jpg';
import A2 from './images/img61.jpg';
import A3 from './images/img84.jpg';
import A4 from './images/img93.jpg';
import A5 from './images/img105.jpg';
import A6 from './images/img116.jpg';

import A7 from './images/img40.jpg';
import A8 from './images/img41.webp';
import A9 from './images/img42.jpg';
import A10 from './images/img43.jpg';
import A11 from './images/img44.jpg';
import A12 from './images/img45.jpg';
import A13 from './images/img46.png';
import A14 from './images/img47.jpg';
import A15 from './images/img49.jpg';
import A16 from './images/img50.jpg';
import A17 from './images/img51.jpg';
import A18 from './images/img52.jpg';
import A19 from './images/img53.jpg';
import A20 from './images/img54.jpg';
import A21 from './images/img55.jpg';
import A22 from './images/img56.jpg';
import A23 from './images/img57.jpg';

import A24 from './images/img58.jpg';
import A25 from './images/img59.jpg';
import A26 from './images/img60.jpg';
import A27 from './images/img61.jpg';
import A28 from './images/img62.jpg';
import A29 from './images/img63.jpg';
import A30 from './images/img64.jpg';
import A31 from './images/img65.jpg';
import A32 from './images/img66.jpg';
import A33 from './images/img67.jpg';
import A34 from './images/img68.jpeg';
import A35 from './images/img69.jpg';
import A36 from './images/img70.jpg';
import A37 from './images/img71.jpg';
import A38 from './images/img72.jpg';
import A39 from './images/img73.jpg';
import A40 from './images/img74.jpg';

import A41 from './images/img75.jpg';
import A42 from './images/img76.jpg';
import A43 from './images/img77.jpg';
import A44 from './images/img78.jpg';

import A45 from './images/img79.JPG';
import A46 from './images/img80.jpg';
import A47 from './images/img81.jpg';
import A48 from './images/img82.jpg';
import A49 from './images/img83.jpg';
import A50 from './images/img84.jpg';
import A51 from './images/img85.jpg';
import A52 from './images/img86.webp';
import A53 from './images/img87.webp';
import A54 from './images/img88.avif';
import A55 from './images/img89.jpg';

import A56 from './images/img90.jpg';
import A57 from './images/img91.jpg';
import A58 from './images/img92.jpg';
import A59 from './images/img93.jpg';
import A60 from './images/img94.jpg';

import A61 from './images/img95.jpg';
import A62 from './images/img96.jpg';

import A63 from './images/img97.jpg';
import A64 from './images/img98.jpg';
import A65 from './images/img99.jpg';
import A66 from './images/img100.jpg';
import A67 from './images/img101.jpg';

import A68 from './images/img102.jpg';
import A69 from './images/img103.jpg';
import A70 from './images/img104.jpg';
import A71 from './images/img105.jpg';
import A72 from './images/img106.jpg';
import A73 from './images/img107.jpg';
import A74 from './images/img108.jpg';
import A75 from './images/img109.jpg';

import A76 from './images/img110.jpg';
import A77 from './images/img111.jpg';
import A78 from './images/img112.jpg';
import A79 from './images/img113.jpg';
import A80 from './images/img114.jpg';
import A81 from './images/img115.jpg';
import A82 from './images/img116.jpg';
import A83 from './images/img117.jpg';
import A84 from './images/img118.jpg';

import A85 from './images/img119.jpg';
import A86 from './images/img120.jpg';
import A87 from './images/img121.jpg';
import A88 from './images/img122.jpg';
import A89 from './images/img123.jpg';
import A90 from './images/img124.webp';
import A91 from './images/img125.jpg';
import A92 from './images/img126.jpg';

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


const Kitchenclub = () =>
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
  	const [f41,b41] = useState(false);
  	const fun41 = () => b41(!f41);
  	const [f42,b42] = useState(false);
  	const fun42 = () => b42(!f42);
  	const [f43,b43] = useState(false);
  	const fun43 = () => b43(!f43);
  	const [f44,b44] = useState(false);
  	const fun44 = () => b44(!f44);
  	const [f45,b45] = useState(false);
  	const fun45 = () => b45(!f45);
  	const [f46,b46] = useState(false);
  	const fun46 = () => b46(!f46);
  	const [f47,b47] = useState(false);
  	const fun47 = () => b47(!f47);
  	const [f48,b48] = useState(false);
  	const fun48 = () => b48(!f48);
  	const [f49,b49] = useState(false);
  	const fun49 = () => b49(!f49);
  	const [f50,b50] = useState(false);
  	const fun50 = () => b50(!f50);

  	const [f51,b51] = useState(false);
  	const fun51 = () => b51(!f51);
  	const [f52,b52] = useState(false);
  	const fun52 = () => b52(!f52);
  	const [f53,b53] = useState(false);
  	const fun53 = () => b53(!f53);
  	const [f54,b54] = useState(false);
  	const fun54 = () => b54(!f54);
  	const [f55,b55] = useState(false);
  	const fun55 = () => b55(!f55);

  	const [f56,b56] = useState(false);
  	const fun56 = () => b56(!f56);
  	const [f57,b57] = useState(false);
  	const fun57 = () => b57(!f57);

  	const [f58,b58] = useState(false);
  	const fun58 = () => b58(!f58);
  	const [f59,b59] = useState(false);
  	const fun59 = () => b59(!f59);
  	const [f60,b60] = useState(false);
  	const fun60 = () => b60(!f60);
  	const [f61,b61] = useState(false);
  	const fun61 = () => b61(!f61);
  	const [f62,b62] = useState(false);
  	const fun62 = () => b62(!f62);

  	const [f63,b63] = useState(false);
  	const fun63 = () => b63(!f63);
  	const [f64,b64] = useState(false);
  	const fun64 = () => b64(!f64);
  	const [f65,b65] = useState(false);
  	const fun65 = () => b65(!f65);
  	const [f66,b66] = useState(false);
  	const fun66 = () => b66(!f66);
  	const [f67,b67] = useState(false);
  	const fun67 = () => b67(!f67);
  	const [f68,b68] = useState(false);
  	const fun68 = () => b68(!f68);
  	const [f69,b69] = useState(false);
  	const fun69 = () => b69(!f69);
  	const [f70,b70] = useState(false);
  	const fun70 = () => b70(!f70);

  	const [f71,b71] = useState(false);
  	const fun71 = () => b71(!f71);
  	const [f72,b72] = useState(false);
  	const fun72 = () => b72(!f72);
  	const [f73,b73] = useState(false);
  	const fun73 = () => b73(!f73);
  	const [f74,b74] = useState(false);
  	const fun74 = () => b74(!f74);
  	const [f75,b75] = useState(false);
  	const fun75 = () => b75(!f75);
  	const [f76,b76] = useState(false);
  	const fun76 = () => b76(!f76);
  	const [f77,b77] = useState(false);
  	const fun77 = () => b77(!f77);
  	const [f78,b78] = useState(false);
  	const fun78 = () => b78(!f78);
  	const [f79,b79] = useState(false);
  	const fun79 = () => b79(!f79);

  	const [f80,b80] = useState(false);
  	const fun80 = () => b80(!f80);
  	const [f81,b81] = useState(false);
  	const fun81 = () => b81(!f81);
  	const [f82,b82] = useState(false);
  	const fun82 = () => b82(!f82);
  	const [f83,b83] = useState(false);
  	const fun83 = () => b83(!f83);
  	const [f84,b84] = useState(false);
  	const fun84 = () => b84(!f84);
  	const [f85,b85] = useState(false);
  	const fun85 = () => b85(!f85);
  	const [f86,b86] = useState(false);
  	const fun86 = () => b86(!f86);
  	const [f87,b87] = useState(false);
  	const fun87 = () => b87(!f87);

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
						<span style={{color:'gray'}}> The Kitchen Club Cafe</span>
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
							<h3 style={{marginTop:'10px'}}>The Kitchen Club Cafe</h3>
						</center>
					</Col>
				</Row>

				<Row>
					<Col>
						<Nav tabs>
				          <NavItem style={{border:'none'}}>
				            <NavLink  style={{border:'none',fontSize:'16px',cursor:'pointer'}} className={classnames({active: a === '1'})} onClick={() => {toggle('1');}}>
				              Breakfast
				            </NavLink>
				          </NavItem>

				          <NavItem>
				            <NavLink style={{border:'none',fontSize:'16px',cursor:'pointer'}} className={classnames({active: a === '2'})} onClick={() => {toggle('2');}}>
				              South Indian
				            </NavLink>
				          </NavItem>

				          <NavItem style={{border:'none'}}>
				            <NavLink style={{border:'none',fontSize:'16px',cursor:'pointer'}} className={classnames({active: a === '3'})} onClick={() => {toggle('3');}}>
				              Drinks
				            </NavLink>
				          </NavItem>

				          <NavItem style={{border:'none'}}>
				            <NavLink style={{border:'none',fontSize:'16px',cursor:'pointer'}} className={classnames({active: a === '4'})} onClick={() => {toggle('4');}}>
				              Lunch
				            </NavLink>
				          </NavItem>

				          <NavItem style={{border:'none'}}>
				            <NavLink style={{border:'none',fontSize:'16px',cursor:'pointer'}} className={classnames({active: a === '5'})} onClick={() => {toggle('5');}}>
				              Starters
				            </NavLink>
				          </NavItem>

				          <NavItem style={{border:'none'}}>
				            <NavLink style={{border:'none',fontSize:'16px',cursor:'pointer'}} className={classnames({active: a === '6'})} onClick={() => {toggle('6');}}>
				              Main Course
				            </NavLink>
				          </NavItem>

				          <NavItem style={{border:'none'}}>
				            <NavLink style={{border:'none',fontSize:'16px',cursor:'pointer'}} className={classnames({active: a === '7'})} onClick={() => {toggle('7');}}>
				              Breads
				            </NavLink>
				          </NavItem>

				          <NavItem style={{border:'none'}}>
				            <NavLink style={{border:'none',fontSize:'16px',cursor:'pointer'}} className={classnames({active: a === '8'})} onClick={() => {toggle('8');}}>
				              Rice & Briyani
				            </NavLink>
				          </NavItem>

				          <NavItem style={{border:'none'}}>
				            <NavLink style={{border:'none',fontSize:'16px',cursor:'pointer'}} className={classnames({active: a === '9'})} onClick={() => {toggle('9');}}>
				              Fried Rice & Noodles
				            </NavLink>
				          </NavItem>

				          <NavItem style={{border:'none'}}>
				            <NavLink style={{border:'none',fontSize:'16px',cursor:'pointer'}} className={classnames({active: a === '10'})} onClick={() => {toggle('10');}}>
				              Pizza & Sandwich
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
					                  			<h6>Idly 2 pics</h6>
					                  			<p>₹30</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f1} toggle={fun1}>
				                	<ModalHeader toggle={fun1}>BREAKFAST</ModalHeader>
				                	<ModalBody>
				                		<img src={A7} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Idly 2 pics</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹30</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<h6>Sambar Idly 2 pics</h6>
					                  			<p>₹35</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f2} toggle={fun2}>
				                	<ModalHeader toggle={fun2}>BREAKFAST</ModalHeader>
				                	<ModalBody>
				                		<img src={A8} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Sambar Idly 2 pics</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹35</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A9} width='110%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Medu Vada 2 pics</h6>
					                  			<p>₹15</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f3} toggle={fun3}>
				                	<ModalHeader toggle={fun3}>BREAKFAST</ModalHeader>
				                	<ModalBody>
				                		<img src={A9} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Medu Vada 2 pics</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹15</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A10} width='118%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Sambar Vada 2 pics</h6>
					                  			<p>₹20</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f4} toggle={fun4}>
				                	<ModalHeader toggle={fun4}>BREAKFAST</ModalHeader>
				                	<ModalBody>
				                		<img src={A10} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Sambar Vada 2 pics</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹20</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<h6>Ghee Pongal</h6>
					                  			<p>₹60</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f5} toggle={fun5}>
				                	<ModalHeader toggle={fun5}>BREAKFAST</ModalHeader>
				                	<ModalBody>
				                		<img src={A11} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Ghee Pongal</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹60</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun6}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A12} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Poori</h6>
					                  			<p>₹35</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f6} toggle={fun6}>
				                	<ModalHeader toggle={fun6}>BREAKFAST</ModalHeader>
				                	<ModalBody>
				                		<img src={A12} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Poori</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹35</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun7}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A13} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Roast</h6>
					                  			<p>₹45</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f7} toggle={fun7}>
				                	<ModalHeader toggle={fun7}>SOUTH INDIAN</ModalHeader>
				                	<ModalBody>
				                		<img src={A13} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Roast</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹45</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun8}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A14} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Masala Roast</h6>
					                  			<p>₹65</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f8} toggle={fun8}>
				                	<ModalHeader toggle={fun8}>SOUTH INDIAN</ModalHeader>
				                	<ModalBody>
				                		<img src={A14} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Masala Roast</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹65</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img width='125%' alt='onion roast' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Onion Roast</h6>
					                  			<p>₹65</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f9} toggle={fun9}>
				                	<ModalHeader toggle={fun9}>SOUTH INDIAN</ModalHeader>
				                	<ModalBody>
				                		<img style={{borderRadius:'15px'}} width='100%' alt='onion roast' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Onion Roast</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹65</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun10}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A15} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Onion Uttapam</h6>
					                  			<p>₹65</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f10} toggle={fun10}>
				                	<ModalHeader toggle={fun10}>SOUTH INDIAN</ModalHeader>
				                	<ModalBody>
				                		<img src={A15} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Onion Uttapam</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹65</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun11}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A16} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Rava Roast</h6>
					                  			<p>₹45</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f11} toggle={fun11}>
				                	<ModalHeader toggle={fun11}>SOUTH INDIAN</ModalHeader>
				                	<ModalBody>
				                		<img src={A16} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Rava Roast</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹45</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A17} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Rava Masala Roast</h6>
					                  			<p>₹70</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f12} toggle={fun12}>
				                	<ModalHeader toggle={fun12}>SOUTH INDIAN</ModalHeader>
				                	<ModalBody>
				                		<img src={A17} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Rava Masala Roast</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹70</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A18} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Ghee Rava Roast</h6>
					                  			<p>₹65</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f13} toggle={fun13}>
				                	<ModalHeader toggle={fun13}>SOUTH INDIAN</ModalHeader>
				                	<ModalBody>
				                		<img src={A18} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Ghee Rava Roast</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹65</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun14}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A19} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Onion Rava Roast</h6>
					                  			<p>₹65</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f14} toggle={fun14}>
				                	<ModalHeader toggle={fun14}>SOUTH INDIAN</ModalHeader>
				                	<ModalBody>
				                		<img src={A19} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Onion Rava Roast</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹65</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun15}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A20} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Uttapam</h6>
					                  			<p>₹40</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f15} toggle={fun15}>
				                	<ModalHeader toggle={fun15}>SOUTH INDIAN</ModalHeader>
				                	<ModalBody>
				                		<img src={A20} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Uttapam</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹40</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A21} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Podi Roast</h6>
					                  			<p>₹35</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f16} toggle={fun16}>
				                	<ModalHeader toggle={fun16}>SOUTH INDIAN</ModalHeader>
				                	<ModalBody>
				                		<img src={A21} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Podi Roast</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹35</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun17}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A22} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Podi Uttapam</h6>
					                  			<p>₹40</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f17} toggle={fun17}>
				                	<ModalHeader toggle={fun17}>SOUTH INDIAN</ModalHeader>
				                	<ModalBody>
				                		<img src={A22} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Podi Uttapam</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹40</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A23} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Ghee Masala Roast</h6>
					                  			<p>₹70</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f18} toggle={fun18}>
				                	<ModalHeader toggle={fun18}>SOUTH INDIAN</ModalHeader>
				                	<ModalBody>
				                		<img src={A23} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Ghee Masala Roast</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹70</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				          		<Col md={12}>
				          			<center>
				          				<h3>JUICES</h3>
				          			</center>
				          		</Col>
				          	</Row>

				          	<br/>

				            <Row>

				              <Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun19}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A24} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Apple Juice</h6>
					                  			<p>₹60</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f19} toggle={fun19}>
				                	<ModalHeader toggle={fun19}>JUICES</ModalHeader>
				                	<ModalBody>
				                		<img src={A24} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Apple Juice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹60</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A25} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Pomegranate Juice</h6>
					                  			<p>₹55</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f20} toggle={fun20}>
				                	<ModalHeader toggle={fun20}>JUICES</ModalHeader>
				                	<ModalBody>
				                		<img src={A25} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Pomegranate Juice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹55</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun21}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A26} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Orange Juice</h6>
					                  			<p>₹50</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f21} toggle={fun21}>
				                	<ModalHeader toggle={fun21}>JUICES</ModalHeader>
				                	<ModalBody>
				                		<img src={A26} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Orange Juice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹50</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A27} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Muskmelon Juice</h6>
					                  			<p>₹40</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f22} toggle={fun22}>
				                	<ModalHeader toggle={fun22}>JUICES</ModalHeader>
				                	<ModalBody>
				                		<img src={A27} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Muskmelon Juice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹40</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun23}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A28} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Watermelon Juice</h6>
					                  			<p>₹45</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f23} toggle={fun23}>
				                	<ModalHeader toggle={fun23}>JUICES</ModalHeader>
				                	<ModalBody>
				                		<img src={A28} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Watermelon Juice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹45</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun24}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A29} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Grape Juice</h6>
					                  			<p>₹60</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f24} toggle={fun24}>
				                	<ModalHeader toggle={fun24}>JUICES</ModalHeader>
				                	<ModalBody>
				                		<img src={A29} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Grape Juice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹60</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A30} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Mango Juice</h6>
					                  			<p>₹45</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f25} toggle={fun25}>
				                	<ModalHeader toggle={fun25}>JUICES</ModalHeader>
				                	<ModalBody>
				                		<img src={A30} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Mango Juice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹45</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A31} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Pineapple Juice</h6>
					                  			<p>₹50</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f26} toggle={fun26}>
				                	<ModalHeader toggle={fun26}>JUICES</ModalHeader>
				                	<ModalBody>
				                		<img src={A31} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Pineapple Juice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹50</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun27}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A32} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Mint Lime Soda</h6>
					                  			<p>₹30</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f27} toggle={fun27}>
				                	<ModalHeader toggle={fun27}>JUICES</ModalHeader>
				                	<ModalBody>
				                		<img src={A32} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Mint Lime Soda</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹30</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun28}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A33} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Rose Milk</h6>
					                  			<p>₹60</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f28} toggle={fun28}>
				                	<ModalHeader toggle={fun28}>JUICES</ModalHeader>
				                	<ModalBody>
				                		<img src={A33} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Rose Milk</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹60</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A34} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Badam Milk</h6>
					                  			<p>₹35</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f29} toggle={fun29}>
				                	<ModalHeader toggle={fun29}>JUICES</ModalHeader>
				                	<ModalBody>
				                		<img src={A34} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Badam Milk</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹35</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A35} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Sweet Lassi</h6>
					                  			<p>₹25</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f30} toggle={fun30}>
				                	<ModalHeader toggle={fun30}>JUICES</ModalHeader>
				                	<ModalBody>
				                		<img src={A35} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Sweet Lassi</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹25</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				            <hr style={{color:'red'}}></hr>

				            <Row>
				            	<Col>
				            		<center>
				           				<h3>MILKSHAKES</h3>
				           			</center>
				           		</Col>
				           	</Row>

				           	<br/>

				            <Row>

				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun31}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A36} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Vanilla Milkshake</h6>
					                  			<p>₹75</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f31} toggle={fun31}>
				                	<ModalHeader toggle={fun31}>MILKSHAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A36} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Vanilla Milkshake</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹75</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun32}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A37} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Strawberry Milkshake</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f32} toggle={fun32}>
				                	<ModalHeader toggle={fun32}>MILKSHAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A37} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Strawberry Milkshake</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹80</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A38} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Chocolate Milkshake</h6>
					                  			<p>₹60</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f33} toggle={fun33}>
				                	<ModalHeader toggle={fun33}>MILKSHAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A38} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Chocolate Milkshake</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹60</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A39} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Butterscotch Milkshake</h6>
					                  			<p>₹110</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f34} toggle={fun34}>
				                	<ModalHeader toggle={fun34}>MILKSHAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A39} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Butterscotch Milkshake</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹110</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun35}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A40} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Oreo Milkshake</h6>
					                  			<p>₹110</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f35} toggle={fun35}>
				                	<ModalHeader toggle={fun35}>MILKSHAKES</ModalHeader>
				                	<ModalBody>
				                		<img src={A40} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Oreo Milkshake</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹110</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun36}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A41} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Sambar Rice</h6>
					                  			<p>₹40</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f36} toggle={fun36}>
				                	<ModalHeader toggle={fun36}>LUNCH</ModalHeader>
				                	<ModalBody>
				                		<img src={A41} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Sambar Rice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹40</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A42} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Lemon Rice</h6>
					                  			<p>₹30</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f37} toggle={fun37}>
				                	<ModalHeader toggle={fun37}>LUNCH</ModalHeader>
				                	<ModalBody>
				                		<img src={A42} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Lemon Rice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹30</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A43} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Tomato Rice</h6>
					                  			<p>₹25</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f38} toggle={fun38}>
				                	<ModalHeader toggle={fun38}>LUNCH</ModalHeader>
				                	<ModalBody>
				                		<img src={A43} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Tomato Rice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹25</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
					                  			<img src={A44} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Curd Rice</h6>
					                  			<p>₹35</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f39} toggle={fun39}>
				                	<ModalHeader toggle={fun39}>LUNCH</ModalHeader>
				                	<ModalBody>
				                		<img src={A44} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Curd Rice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹35</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun40}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A45} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Veg Manchurian</h6>
					                  			<p>₹120</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f40} toggle={fun40}>
				                	<ModalHeader toggle={fun40}>STARTERS</ModalHeader>
				                	<ModalBody>
				                		<img src={A45} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Veg Manchurian</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹120</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun41}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A46} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Paneer Manchurian</h6>
					                  			<p>₹130</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f41} toggle={fun41}>
				                	<ModalHeader toggle={fun41}>STARTERS</ModalHeader>
				                	<ModalBody>
				                		<img src={A46} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Paneer Manchurian</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹130</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun42}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A47} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Gobi Manchurian</h6>
					                  			<p>₹100</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f42} toggle={fun42}>
				                	<ModalHeader toggle={fun42}>STARTERS</ModalHeader>
				                	<ModalBody>
				                		<img src={A47} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Gobi Manchurian</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹100</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun43}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A48} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Mushroom Manchurian</h6>
					                  			<p>₹125</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f43} toggle={fun43}>
				                	<ModalHeader toggle={fun43}>STARTERS</ModalHeader>
				                	<ModalBody>
				                		<img src={A48} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Mushroom Manchurian</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹125</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun44}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A49} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Veg Ball</h6>
					                  			<p>₹120</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f44} toggle={fun44}>
				                	<ModalHeader toggle={fun44}>STARTERS</ModalHeader>
				                	<ModalBody>
				                		<img src={A49} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Veg Ball</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹120</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun45}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A50} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Gobi 65</h6>
					                  			<p>₹75</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f45} toggle={fun45}>
				                	<ModalHeader toggle={fun45}>STARTERS</ModalHeader>
				                	<ModalBody>
				                		<img src={A50} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Gobi 65</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹75</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun46}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A51} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Mushroom 65</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f46} toggle={fun46}>
				                	<ModalHeader toggle={fun46}>STARTERS</ModalHeader>
				                	<ModalBody>
				                		<img src={A51} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Mushroom 65</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹80</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun47}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A52} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Paneer 65</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f47} toggle={fun47}>
				                	<ModalHeader toggle={fun47}>STARTERS</ModalHeader>
				                	<ModalBody>
				                		<img src={A52} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Paneer 65</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹80</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun48}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A53} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Chilli Mushroom</h6>
					                  			<p>₹110</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f48} toggle={fun48}>
				                	<ModalHeader toggle={fun48}>STARTERS</ModalHeader>
				                	<ModalBody>
				                		<img src={A53} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Chilli Mushroom</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹110</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun49}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A54} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Chilli Paneer</h6>
					                  			<p>₹110</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f49} toggle={fun49}>
				                	<ModalHeader toggle={fun49}>STARTERS</ModalHeader>
				                	<ModalBody>
				                		<img src={A54} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Chilli Paneer</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹110</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun50}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A55} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Chilli Gobi</h6>
					                  			<p>₹110</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f50} toggle={fun50}>
				                	<ModalHeader toggle={fun50}>STARTERS</ModalHeader>
				                	<ModalBody>
				                		<img src={A55} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Chilli Gobi</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹110</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun51}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A56} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Mushroom Masala</h6>
					                  			<p>₹115</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f51} toggle={fun51}>
				                	<ModalHeader toggle={fun51}>MAIN COURSE</ModalHeader>
				                	<ModalBody>
				                		<img src={A56} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Mushroom Masala</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹115</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun52}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A57} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Paneer Butter Masala</h6>
					                  			<p>₹120</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f52} toggle={fun52}>
				                	<ModalHeader toggle={fun52}>MAIN COURSE</ModalHeader>
				                	<ModalBody>
				                		<img src={A57} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Paneer Butter Masala</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹120</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun53}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A58} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Mix Veg Masala</h6>
					                  			<p>₹110</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f53} toggle={fun53}>
				                	<ModalHeader toggle={fun53}>MAIN COURSE</ModalHeader>
				                	<ModalBody>
				                		<img src={A58} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Mix Veg Masala</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹110</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun54}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A59} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Malai Kofta</h6>
					                  			<p>₹115</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f54} toggle={fun54}>
				                	<ModalHeader toggle={fun54}>MAIN COURSE</ModalHeader>
				                	<ModalBody>
				                		<img src={A59} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Malai Kofta</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹115</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun55}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A60} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Kadai Paneer</h6>
					                  			<p>₹115</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f55} toggle={fun55}>
				                	<ModalHeader toggle={fun55}>MAIN COURSE</ModalHeader>
				                	<ModalBody>
				                		<img src={A60} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Kadai Paneer</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹115</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun56}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A61} width='120%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>2 Chapati</h6>
					                  			<p>₹30</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f56} toggle={fun56}>
				                	<ModalHeader toggle={fun56}>BREADS</ModalHeader>
				                	<ModalBody>
				                		<img src={A61} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>2 Chapati</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹30</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun57}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A62} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>2 Parotta</h6>
					                  			<p>₹30</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f57} toggle={fun57}>
				                	<ModalHeader toggle={fun57}>BREADS</ModalHeader>
				                	<ModalBody>
				                		<img src={A62} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>2 Parotta</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹30</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun58}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A63} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Hyderabadi Biryani</h6>
					                  			<p>₹120</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f58} toggle={fun58}>
				                	<ModalHeader toggle={fun58}>RICE & BIRYANI</ModalHeader>
				                	<ModalBody>
				                		<img src={A63} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Hyderabadi Biryani</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹120</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun59}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A64} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Veg Biryani</h6>
					                  			<p>₹100</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f59} toggle={fun59}>
				                	<ModalHeader toggle={fun59}>RICE & BIRYANI</ModalHeader>
				                	<ModalBody>
				                		<img src={A64} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Veg Biryani</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹100</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun60}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A65} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Jeera Rice</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f60} toggle={fun60}>
				                	<ModalHeader toggle={fun60}>RICE & BIRYANI</ModalHeader>
				                	<ModalBody>
				                		<img src={A65} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Jeera Rice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹80</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun61}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A66} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Veg Pulao</h6>
					                  			<p>₹90</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f61} toggle={fun61}>
				                	<ModalHeader toggle={fun61}>RICE & BIRYANI</ModalHeader>
				                	<ModalBody>
				                		<img src={A66} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Veg Pulao</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹90</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun62}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A67} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Ghee Rice</h6>
					                  			<p>₹70</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f62} toggle={fun62}>
				                	<ModalHeader toggle={fun62}>RICE & BIRYANI</ModalHeader>
				                	<ModalBody>
				                		<img src={A67} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Ghee Rice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹70</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				          		<Col md={12}>
				          			<center>
				          				<h3>FRIED RICE</h3>
				          			</center>
				          		</Col>
				          	</Row>

				          	<br/>

				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun63}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A68} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Veg Fried Rice</h6>
					                  			<p>₹90</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f63} toggle={fun63}>
				                	<ModalHeader toggle={fun63}>FRIED RICE</ModalHeader>
				                	<ModalBody>
				                		<img src={A68} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Veg Fried Rice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹90</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun64}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A69} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Mushroom Fried Rice</h6>
					                  			<p>₹100</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f64} toggle={fun64}>
				                	<ModalHeader toggle={fun64}>FRIED RICE</ModalHeader>
				                	<ModalBody>
				                		<img src={A69} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Mushroom Fried Rice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹100</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun65}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A70} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Paneer Fried Rice</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f65} toggle={fun65}>
				                	<ModalHeader toggle={fun65}>FRIED RICE</ModalHeader>
				                	<ModalBody>
				                		<img src={A70} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Paneer Fried Rice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹80</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun66}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A71} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Schezwan Fried Rice</h6>
					                  			<p>₹90</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f66} toggle={fun66}>
				                	<ModalHeader toggle={fun66}>FRIED RICE</ModalHeader>
				                	<ModalBody>
				                		<img src={A71} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Schezwan Fried Rice</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹90</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				            <hr style={{color:'red'}}></hr>

				            <Row>
				            	<Col md={12}>
				            		<center>
				           				<h3>NOODLES</h3>
				           			</center>
				           		</Col>
				           	</Row>

				           	<br/>

				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun67}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A72} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Schezwan Noodles</h6>
					                  			<p>₹120</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f67} toggle={fun67}>
				                	<ModalHeader toggle={fun67}>NOODLES</ModalHeader>
				                	<ModalBody>
				                		<img src={A72} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Schezwan Noodles</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹120</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun68}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A73} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Veg Noodles</h6>
					                  			<p>₹70</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f68} toggle={fun68}>
				                	<ModalHeader toggle={fun68}>NOODLES</ModalHeader>
				                	<ModalBody>
				                		<img src={A73} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Veg Noodles</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹70</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun69}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A74} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Paneer Noodles</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f69} toggle={fun69}>
				                	<ModalHeader toggle={fun69}>NOODLES</ModalHeader>
				                	<ModalBody>
				                		<img src={A74} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Paneer Noodles</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹80</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun70}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A75} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Mushroom Noodles</h6>
					                  			<p>₹90</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f70} toggle={fun70}>
				                	<ModalHeader toggle={fun70}>NOODLES</ModalHeader>
				                	<ModalBody>
				                		<img src={A75} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Mushroom Noodles</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹90</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				          		<Col md={12}>
				          			<center>
				          				<h3>PIZZA</h3>
				          			</center>
				          		</Col>
				          	</Row>

				          	<br/>

				            <Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun71}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A76} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Veg Pizza</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f71} toggle={fun71}>
				                	<ModalHeader toggle={fun71}>PIZZA</ModalHeader>
				                	<ModalBody>
				                		<img src={A76} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Veg Pizza</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹80</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun72}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A77} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Classic Veg Pizza</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f72} toggle={fun72}>
				                	<ModalHeader toggle={fun72}>PIZZA</ModalHeader>
				                	<ModalBody>
				                		<img src={A77} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Classic Veg Pizza</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹80</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun73}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A78} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Mushroom Pizza</h6>
					                  			<p>₹90</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f73} toggle={fun73}>
				                	<ModalHeader toggle={fun73}>PIZZA</ModalHeader>
				                	<ModalBody>
				                		<img src={A78} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Mushroom Pizza</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹90</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun74}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A79} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Paneer Pizza</h6>
					                  			<p>₹100</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f74} toggle={fun74}>
				                	<ModalHeader toggle={fun74}>PIZZA</ModalHeader>
				                	<ModalBody>
				                		<img src={A79} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Paneer Pizza</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹100</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun75}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A80} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Tandoori Paneer Pizza</h6>
					                  			<p>₹100</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f75} toggle={fun75}>
				                	<ModalHeader toggle={fun75}>PIZZA</ModalHeader>
				                	<ModalBody>
				                		<img src={A80} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Tandoori Paneer Pizza</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹100</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun76}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A81} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Cheese Pizza</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f76} toggle={fun76}>
				                	<ModalHeader toggle={fun76}>PIZZA</ModalHeader>
				                	<ModalBody>
				                		<img src={A81} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Cheese Pizza</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹80</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun77}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A82} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Corn Pizza</h6>
					                  			<p>₹90</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f77} toggle={fun77}>
				                	<ModalHeader toggle={fun77}>PIZZA</ModalHeader>
				                	<ModalBody>
				                		<img src={A82} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Corn Pizza</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹90</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun78}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A83} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Chilly Cheese Paneer Pi..</h6>
					                  			<p>₹100</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f78} toggle={fun78}>
				                	<ModalHeader toggle={fun78}>PIZZA</ModalHeader>
				                	<ModalBody>
				                		<img src={A83} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Chilly Cheese Paneer Pizza</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹100</h5>
				                			</Col>
				                		</Row>

				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun79}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A84} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Onion Capsicum Pizza</h6>
					                  			<p>₹80</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f79} toggle={fun79}>
				                	<ModalHeader toggle={fun79}>PIZZA</ModalHeader>
				                	<ModalBody>
				                		<img src={A84} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Onion Capsicum Pizza</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹80</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				            <hr style={{color:'red'}}></hr>

				            <Row>
				            	<Col md={12}>
				            		<center>
				           				<h3>SANDWICH</h3>
				           			</center>
				           		</Col>
				           	</Row>

				           	<br/>

				           	<Row>
				            	<Col md={3}>
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun80}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A85} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Mushroom Sandwich</h6>
					                  			<p>₹40</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f80} toggle={fun80}>
				                	<ModalHeader toggle={fun80}>SANDWICH</ModalHeader>
				                	<ModalBody>
				                		<img src={A85} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Mushroom Sandwich</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹40</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun81}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A86} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Tandoori Paneer Sand...</h6>
					                  			<p>₹60</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f81} toggle={fun81}>
				                	<ModalHeader toggle={fun81}>SANDWICH</ModalHeader>
				                	<ModalBody>
				                		<img src={A86} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Tandoori Paneer Sandwich</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹60</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun82}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A87} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Veg Sandwich</h6>
					                  			<p>₹40</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f82} toggle={fun82}>
				                	<ModalHeader toggle={fun82}>SANDWICH</ModalHeader>
				                	<ModalBody>
				                		<img src={A87} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Veg Sandwich</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹40</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun83}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A88} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Paneer Grilled Sandwich</h6>
					                  			<p>₹60</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f83} toggle={fun83}>
				                	<ModalHeader toggle={fun83}>SANDWICH</ModalHeader>
				                	<ModalBody>
				                		<img src={A88} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Paneer Grilled Sandwich</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹60</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun84}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A89} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Chilly Cheese Sandwich</h6>
					                  			<p>₹50</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f84} toggle={fun84}>
				                	<ModalHeader toggle={fun84}>SANDWICH</ModalHeader>
				                	<ModalBody>
				                		<img src={A89} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Chilly Cheese Sandwich</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹50</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun85}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A90} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Aalo Sandwich</h6>
					                  			<p>₹50</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f85} toggle={fun85}>
				                	<ModalHeader toggle={fun85}>SANDWICH</ModalHeader>
				                	<ModalBody>
				                		<img src={A90} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Aalo Sandwich</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹50</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun86}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A91} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Chocolate Sandwich</h6>
					                  			<p>₹50</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f86} toggle={fun86}>
				                	<ModalHeader toggle={fun86}>SANDWICH</ModalHeader>
				                	<ModalBody>
				                		<img src={A91} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Chocolate Sandwich</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹50</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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
				                <a style={{textDecoration:'none',color:'black'}} onClick={fun87}>
				                	<Card>
					                  <CardBody>
					                  	<Row>
					                  		<Col md={4}>
					                  			<img src={A92} width='125%' />
					                  		</Col>
					                  		<Col md={8}>
					                  			<h6>Sweet Corn Sandwich</h6>
					                  			<p>₹50</p>
					                  		</Col>
					                  	</Row>
					                  </CardBody>
					                </Card>
				                </a>

				                <Modal style={{width:'25%'}} isOpen={f87} toggle={fun87}>
				                	<ModalHeader toggle={fun87}>SANDWICH</ModalHeader>
				                	<ModalBody>
				                		<img src={A92} style={{borderRadius:'15px'}} width='100%' />
				                		<hr/>
				                		<Row>
				                			<Col md={8}>
				                				<h5>Sweet Corn Sandwich</h5>
				                			</Col>
				                			<Col md={4}>
				                				<h5>₹50</h5>
				                			</Col>
				                		</Row>
				                		<br/>
				                		
				                		<Row>
				                			<Col md={6}>
				                				<h5>Quantity</h5>
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

export default Kitchenclub;