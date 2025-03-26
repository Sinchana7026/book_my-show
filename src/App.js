import React from 'react';
import { Navbar, Nav, Form, FormControl, Button,Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ".//index.css";
function App(){


  return (
    <>
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">BookMyShow</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#movies">Movies</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="#sports">Sports</Nav.Link>
          <Nav.Link href="#offers">Offers</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav>
          <Nav.Link href="#signin">Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  


    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100 size"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9VvATUJT9CXXzsoULZqIy_XIBDT9Xm6hXg&s"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Avengers: Endgame</h3>
          <p>Action-packed superhero thriller.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 size"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPTsF7y3Z9SjJ88KVUaD5jbX1Ab0CGGONlw&s"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Inception</h3>
          <p>Mind-bending sci-fi drama.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
</>
  
        
  );
}
export default App;