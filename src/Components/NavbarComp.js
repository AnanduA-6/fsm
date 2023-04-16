import React, { Component } from 'react'
//import Container from 'react-bootstrap/Container';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import "../Styles/NavbarComp.css";
import {BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Search from "./Search";
import Symbol from "./Symbol";
// import Search from "./Search";
import Industry from "./Industry";
import Company from "./Company";
import ISIN from './ISIN';





export default class NavbarComp extends Component{
render(){
return (
<Router>
<div className="page">
 <Navbar bg="dark" variant={"dark"} expand="lg">
   <Navbar.Brand href="#" >FSM</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto">

              <Nav.Link as={Link} to='/' onClick={() => window.location.href='/home'} >Home</Nav.Link>
              <Nav.Link as={Link} to='/about' onClick={() => window.location.href='/about'}>About</Nav.Link>
              <Nav.Link as={Link} to='/contact' onClick={() => window.location.href='/contact'}>Contact </Nav.Link>
              <Nav.Link as={Link} to='/search' onClick={() => window.location.href='/search'}>Search </Nav.Link>

              {/* <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/symbol">Symbol</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Isin">
                  ISIN
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/company">Company</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Industry">Industry</NavDropdown.Item>
                
              
              </NavDropdown> */}
              </Nav>
               

  {/* <Form inline>
              <FormControl class type="text" placeholder="search" className='mr-sm-2'/>
              <Button varient="outline-success">Search</Button>
            </Form> */}
            </Navbar.Collapse>
             </Navbar>
              </div>

        <div>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>

          <Route path="/search">
            <Search/>
          </Route>
         <Route path="/home">
         <Home/>
         </Route>

         <Route path="/symbol">
          <Symbol/>
         </Route>
        
         <Route path="/company">
          <Company/>
         </Route>

         <Route path="/industry">
          <Industry/>
         </Route>

         <Route path="/Search">
          <Search/>
         </Route>

         <Route path="/ISIN">
          <ISIN/>
         </Route>


         
          
         
        </Switch>
      </div>
    </Router>
)
}
}