import React, { Component } from 'react'
import {Navbar,Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
             
            <Navbar className='navcolor' expand="lg" fixed='top'>
            <Container>
              <Navbar.Brand style={{fontSize:'1.5em'}} className='heading'><span>Agriculture Crop system</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                 
                  <Nav.Link><Link to='/' className='navlist'>Home</Link></Nav.Link>
                  <Nav.Link><Link to='/crops' className='navlist'>Crops</Link></Nav.Link>
                  <Nav.Link ><Link to='/about' className='navlist'>About</Link></Nav.Link>
                  
                 
                  <NavDropdown
         id="nav-dropdown-dark-example"
         title="Register"
         menuVariant="dark"
       >
           <Link to='/register1' className='navlist'><NavDropdown.Item href="#action/3.1">Register as dealer</NavDropdown.Item></Link>
           <Link to='/register' className='navlist'><NavDropdown.Item href="#action/3.2">Register as Farmer</NavDropdown.Item></Link>
       </NavDropdown>
       <NavDropdown
         id="nav-dropdown-dark-example"
         title="Login"
         menuVariant="dark"
       >
           <Link to='/login' className='navlist'><NavDropdown.Item href="#action/3.1">Login as Farmer</NavDropdown.Item></Link>
           <Link to='/login1' className='navlist'><NavDropdown.Item href="#action/3.2">Login as Dealer</NavDropdown.Item></Link>
       </NavDropdown>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        
        )
    }
}

export default Header