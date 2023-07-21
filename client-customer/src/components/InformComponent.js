import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
class Inform extends Component {
  static contextType = MyContext;
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {this.context.token === '' ?
                <Nav.Item>
                  <Link to='/login' className='non'>Login</Link> | <Link to='/signup' className='non'>Sign-up</Link> | <Link to='/active' className='non'>Active</Link>
                </Nav.Item>
                :
                <NavDropdown title={this.context.customer.name} id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to='/myprofile' className='non'>My profile</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/myorders' className='non'>My orders</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to='/home' className='non' onClick={() => this.lnkLogoutClick()}>Logout</Link></NavDropdown.Item>
                </NavDropdown>
              }
            </Nav>
            <Nav className="float-right">
              <Nav.Item><Link to='/mycart' className='non'>My cart</Link> have <b>{this.context.mycart.length}</b> items</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;