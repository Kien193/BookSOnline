import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        <NavDropdown.Item key={item._id}><Link to={'/product/category/' + item._id} className='non'>{item.name}</Link></NavDropdown.Item>
      );
    });
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg?w=2000"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            BookSonline
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/' className='non'>Home</Link></Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                {cates}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="keyword me-2 flex-grow-2" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }}
              aria-label="Search"
            />
            <Button type="submit" value="SEARCH" variant="outline-success" onClick={(e) => this.btnSearchClick(e)}>Search</Button>
          </Form>
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
    const keyword = this.state.txtKeyword.trim();
    if (keyword !== '') {
      this.props.navigate('/product/search/' + this.state.txtKeyword);
    } else {
      
    }
  }
}
export default withRouter(Menu);