import React from "react";
import { NavDropdown, Nav, Container, Navbar } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          BIS
          <Badge bg="darck">
            <Link to="/" className="nav-link active">
              Best International School
            </Link>
          </Badge>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link ">
              Home
            </Link>

            <Link to="/student" className="nav-link">
              Student
            </Link>
            <Link to="/teacher" className="nav-link">
              Teacher
            </Link>
            <NavDropdown title="Admin" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  to="/admin"
                  className="nav-link text-dark"
                >
                  Home Content Management
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/" className="nav-link text-dark">
                  Student Management
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/" className="nav-link text-dark">
                  Teacher Management
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/help" className="nav-link">
              Help
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
