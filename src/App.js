import './sass/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react' ;
import { Row, Form, Col, Button,Table } from 'react-bootstrap';

import logoleft from './assets/fullgslogo.png';
import logoright from './assets/dra-logo.png';
import services from './assets/Group 232.jpg';
import aboutus from './assets/Group 233.jpg';
import careers from './assets/Group 234.jpg';
import metalsminerals from './assets/metals-minerals.png';
import infrastructure from './assets/infrastructure.png';
import industrial from './assets/infrastructure.png';
import energy from './assets/energy.png';
import water from './assets/water.png';
import bottomimage from './assets/bottom-image.jpg';
import gslogo from './assets/g-s logo compact.png';
import facebook from './assets/facebook.png';
import linked from './assets/linkedin.png';
import youtube from './assets/youtube.png';
import twitter from './assets/twitter.png';

const menus = ["HOME", "ABOUT", "MARKETS", "SERVICES", "PROJECTS", "CAREERS", "NEWS", "CONTACT US"]
const products = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      email: '',
      number: '',
      startdate: '',
      enddate: '',
    }

    if(props.getintouch){
      this.state = props.getintouch
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let apiUrl;
    apiUrl = 'http://localhost:3001/api/Tickets';

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

let obj = {
  name: this.state.name,
  email: this.state.email ,
  number: this.state.number,
  startDate: new Date(),
  endDate: new Date()
}

fetch('http://localhost:3001/api/Tickets/Save',{
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
 body:JSON.stringify(obj)
}).then(response => {
        this.onFormSubmit();
    })
    .catch(error =>{
        console.log(error)
    })
  }

  onFormSubmit() {
    fetch('http://localhost:3001/api/Tickets',{
      method: 'GET',
  }) .then(response => response.json())
  .then(response => {
    console.log(response)
    debugger
    this.setState({
      products:response,
    })
})
      .catch(error =>{
          console.log(error)
      })
    }
  
   

  render() {
    return(
      <div className="App">
      <Row>
        <Col sm={12}>
        <div className="logoright"><img src={logoright} alt="" style={{ width: 165, marginBottom: -10, marginLeft: 695 }} /></div>
      <ul className="nav">
        <li className="nav-item">
          <div className="text-block">
            <h1 className="h1-header">WELCOME</h1>
          </div>
          <div className="header-image-text-one">Your asset performance partner</div>
          <div className="header-image-text-two">from the Earth's surface down.</div>
          <img src={logoleft} alt="" style={{ width: 225, marginTop: 20 }} />
        </li>
        {
            menus.map((x, ind) => (
              <li className="nav-item">
                <a key={ind} className="nav-link">{x}</a>
              </li>
            ))
          }
      </ul>
        <header className="App-header">
      </header>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col sm={3}>
        </Col>
          <Col sm={6}>
          <em className="text">From electrical mechanical component overhauls for surface and underground equipment
        through to billion mine and port construction projects, G&S Engineering offer
        comprehensive services that encompass the project lifestyle from construction, throughmaintenance and optimization to final decommissioning and deconstruction.
      </em>
      <Col sm={3}>
         </Col>
          </Col>
          </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row>
          <Col sm={4}>
          <div className="top-left">SERVICES</div>
          <div className="top-left-middle">Calibre agrees to sell</div>
          <div className="top-left-middle-one"><div className="text-yellow">G&S Engineering to DRA</div></div>
          <div className="top-left-button"><button type="button" className="btn btn-warning centre">VIEW SERVICES</button></div>
          <img src={services} className="images" />
          </Col>
          <Col sm={4}>
          <div className="top-left-two">ABOUT US</div>
          <div className="top-left-two-middle"><div className="text-green">Get to know us</div></div>
          <div className="top-left-middle-two">a little better</div>
          <div className="top-left-two-button"><button type="button" className="btn btn-success centre">VIEW ABOUT US</button></div>
          <img src={aboutus} className="images" />
          </Col>
          <Col sm={4}>
          <div className="top-left-three">CAREERS</div>
          <div className="top-left-three-middle">Become one of the</div>
          <div className="top-left-middle-three"><div className="text-blue">team, join us</div></div>
          <div className="top-left-three-button"><button type="button" className="btn btn-primary centre button">VIEW CAREERS</button></div>
          <img src={careers} className="images" />
          </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <div className="ourmarket">
        <Row>
          <Col sm={12}>
          <br></br>
        <h2>OUR MARKETS</h2>
        <br></br>
        <br></br>
          </Col>
        </Row>
        <Row>
          <Col sm={1}>
          </Col>
          <Col sm={2}>
          <img src={metalsminerals} className="images_our_markets" />
            <p>Metals & Minerals</p>
          </Col>
          <Col sm={2}>
          <img src={infrastructure} className="images_our_markets" />
            <p>Infrastructure</p>
          </Col>
          <Col sm={2}>
          <img src={industrial} className="images_our_markets" />
            <p>Industrial</p>
          </Col>
          <Col sm={2}>
          <img src={energy} className="images_our_markets" />
            <p>Energy</p>
          </Col>
          <Col sm={2}>
          <img src={water} className="images_our_markets" />
            <p>Water</p>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col sm={12}>
          <button type="button" className="btn btn-primary centre button">VIEW ALL MARKETS</button>
          </Col>
        </Row>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col sm={12}>
        <h2>GET IN TOUCH</h2>
        <br></br>
        </Col>
      </Row>
      <br></br>
        <Row>
          <Col sm={1}>
          </Col>
          <Col sm={5}>
          <img src={bottomimage}/>
          </Col>
          <Col sm={5}>
          <Form.Group>
          <h4>Complete the form to get in touch</h4>
          <br></br>
              </Form.Group>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Name"/>
              </Form.Group>
              <br></br>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email Address" />
              </Form.Group>
              <br></br>
              <Form.Group controlId="number">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="number"
                  value={this.state.number}
                  onChange={this.handleChange}
                  placeholder="Phone Number" />
              </Form.Group>
              <br></br>
              <Row>
              <Col sm={6}>
                <Form.Group controlId="startdate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="startdate"
                  value={this.state.startdate}
                  onChange={this.handleChange}
                  placeholder="" />
              </Form.Group>
              </Col>
              <Col sm={6}>
              <Form.Group controlId="enddate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="enddate"
                  value={this.state.enddate}
                  onChange={this.handleChange}
                  placeholder="" />
              </Form.Group>
                </Col>
              </Row> 
              <br></br>
              <Form.Group>
                <Form.Control type="hidden" name="id" value={this.state.id} />
                <Button className="buttonSubmit" variant="primary" type="submit" >SUBMIT</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      <Row>
      <Col sm={1}>
      </Col>
      <Col sm={10}>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <br></br>
      <br></br>
      <Row>
        <Col sm={12}>
        <h2>Get In Touch - Data List</h2>
        <br></br>
        </Col>
      </Row>
          <br></br>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
            {products.length ? products.map(products => 
                <tr key={products.id}>
                  <td>{products.name}</td>
                  <td>{products.email}</td>
                  <td>{products.number}</td>
                  <td>{products.startdate}</td>
                  <td>{products.enddate}</td>
                  <td>
                  </td>
                </tr>
              ) : ''}
            </tbody>
          </Table>
        </div>
      <br></br>
      <br></br>
      <br></br>
      </Col>
      </Row>
    <Row>
  <Col sm={12}>
  <div className="footer-banner">
        <ul className="nav">
          <li className="nav-item">
            <img src={gslogo} alt="" style={{ width: 70, marginTop: 20 }} />
          </li>
          <li className="nav-item">
            <a className="nav-link"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"></a>
          </li>
          {
            menus.map((x, ind) => (
              <li className="nav-item">
                <a key={ind} className="nav-link footer-text">{x}</a>
              </li>
            ))
          }
          <li className="nav-item">
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <a className="nav-link footer-text">      </a>
          </li>
          {
            [facebook, linked, youtube, twitter].map((x, ind) => (
              <li className="nav-item">
                <img src={x} key={ind} alt={ind} className="footer-icons" />
              </li>
            ))
          }
        </ul>
      </div>   
  </Col>
</Row>
    </div>
  );
  }
}
export default App;