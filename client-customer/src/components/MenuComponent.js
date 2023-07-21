import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        // <li key={item._id} className="menu"><Link to={'/product/category/' + item._id}>{item.name}</Link></li>
        <NavDropdown.Item key={item._id}><Link to={'/product/category/' + item._id}>{item.name}</Link></NavDropdown.Item>
      );
    });
    return (
      // <div className="border-bottom">
      //   <div className="float-left">
      //     <ul className="menu">
      //       <li className="menu"><Link to='/'>Home</Link></li>
      //       {cates}
      //     </ul>
      //   </div>
      //   <div className="float-right">
      //     <form className="search">
      //       <input type="search" placeholder="Enter keyword" className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
      //       <input type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)} />
      //     </form>
      //   </div>
      //   <div className="float-clear" />
      // </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/'>Home1</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                {cates}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Hứa Trung Kiên</a>
          </Navbar.Text>
        </Navbar.Collapse> */}
        </Container>
      </Navbar>
    );
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
  // event-handlers
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  }
}
export default withRouter(Menu);