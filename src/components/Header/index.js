import React, { Component } from 'react';
import "./styles.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar" bg="black" variant="dark" expand="lg">
                    <Navbar.Brand href="#home"><img className="logo" src="https://www.nouvenn.com/images/nouvenn_cor_bco.svg" alt="Nounvenn" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="item-navbar" href="/">Home</Nav.Link>
                            <Nav.Link className="item-navbar" href="random_images">Random Images</Nav.Link>
                            <NavDropdown className="dropdown" title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item className="dropdown" href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item className="dropdown" href="#action/3.2">Statistics</NavDropdown.Item>
                                <NavDropdown.Item className="dropdown" href="#action/3.3">Effects</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="dropdown" href="https://www.nouvenn.com">About Nouvenn</NavDropdown.Item>
                                <NavDropdown.Item className="dropdown" href="#action/3.5">Credits</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="dark">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
}



