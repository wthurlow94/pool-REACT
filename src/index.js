import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './res/logo.png';
import { Route,
	NavLink,
	Switch,
	HashRouter 
	} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Navbar, Nav, Form, Button, Container, Row, Col
	} from 'react-bootstrap'	




function Signup(props){

	return(
<Container>
  <Row />
  <Row className="justify-content-md-center">
	<Col>
	   <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formSubmitBtn" className="text-center">		
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Group>
</Form>
		</Col>
</Row>
</Container>
	);

}

class App extends React.Component {
	render() {
	   return (
		   <div>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
      <img
        src={logo}
        
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>

    </Navbar.Collapse>

  </Navbar>
  <Switch>
    <Route exact path="/"> <h1>Splash</h1></Route>
    <Route path="/signup"> <Signup /></Route>
		   
  </Switch>
		   
  </div>
	   );
	}
}


// return (
//    //Navbar stuff
//    <Switch>
//      <Route exact path="/"> <Splash />
//      <Route path="/signup"> <Signup />
//      <Route path="/login"> <Login />
//      <Route path="/match> <Match />
//      <Route path="/stats> <Stats />
//    </Switch>
//    );







// ===================================

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);

