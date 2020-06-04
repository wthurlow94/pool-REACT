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




class Signup extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
           email: '',
	   password: ''
        }
	this.handleClick = this.handleClick.bind(this);
	this.handlePasswordChange = this.handlePasswordChange.bind(this);
	this.handleemailChange = this.handleemailChange.bind(this);
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleemailChange(event) {
        this.setState({email: event.target.value});
    }

	
	handleClick() {

	let data = {email: this.state.email, password:this.state.password};

		console.log(data);
        fetch('http://localhost:9000/users', {
	    method: 'POST',
	    headers: {
	        'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(data),
	})
        .then(response => response.json())
        .then(data => console.log(data));	
	
	
	
	};
render(){
	return (
    <Container>
        <Row />
        <Row className="justify-content-md-center">
	        <Col>
	            <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
		        onChange={this.handleemailChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
		            value={this.state.value} 
		            onChange={this.handlePasswordChange}/>
                    </Form.Group>
                    <Form.Group controlId="formSubmitBtn" className="text-center">		
                        <Button variant="primary" type="submit" onClick={this.handleClick}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
</Container>);
}

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

