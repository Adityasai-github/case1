import React, { Component } from 'react'
import {Navbar,Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
 class Dealerdb extends Component {
    
    
    render() {
        return (
            <div className='farmerdb_image'>
                <div class="image">
            <img src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/5/Desk/2021_5$largeimg_283910041.jpeg"alt="Example1" width="100%" height="25%" />
            <h2><span> Dealer Dashboard <br /></span><span class='spacer'> </span></h2>
          <h4><span>
                <Nav defaultActiveKey="/" className="flex-column">
  {/* <Nav.Link href="/">Home</Nav.Link> */}

  <Nav.Link><Link to='/' className='navlist'>Home</Link></Nav.Link>
  <NavDropdown
         id="nav-dropdown-dark-example"
         title="Dealers"
         menuVariant="dark"
       >
           <Link to='/add-dealer' className='navlist'><NavDropdown.Item href="#action/3.1">Add Dealer</NavDropdown.Item></Link>
           <Link to='/dealers' className='navlist'><NavDropdown.Item href="#action/3.2">View all Dealers</NavDropdown.Item></Link>
       </NavDropdown>
       <NavDropdown
         id="nav-dropdown-dark-example"
         title="Farmer"
         menuVariant="dark"
       >
           <Link to='/farmers' className='navlist'><NavDropdown.Item href="#action/3.3">All Farmers</NavDropdown.Item></Link>
       </NavDropdown>
       <NavDropdown
         id="nav-dropdown-dark-example"
         title="Crops"
         menuVariant="dark"
       >
           <Link to='/crops' className='navlist'><NavDropdown.Item href="#action/3.1">Buy Crop</NavDropdown.Item></Link>
       </NavDropdown>

        <Nav.Link ><Link to='/' className='navlist'>logout</Link></Nav.Link>   

  {/* <Nav.Link eventKey="/farmer">Add Farmer</Nav.Link>
  <Nav.Link eventKey="/crops">Post Crops</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link> */}
</Nav>
</span></h4>
            </div>
            </div>
        )
    }
}
export default Dealerdb