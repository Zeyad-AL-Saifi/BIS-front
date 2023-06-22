import React from "react";
import { NavDropdown, Nav, Container, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const CustomNavbar = () => {
  const dispatch = useDispatch();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link active">
            <h3> B - I - S </h3> Best International School
          </Link>
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
                <Link to="/admin" className="nav-link text-dark">
                  Home Content Management
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/admin" className="nav-link text-dark">
                  Student Management
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/admin" className="nav-link text-dark">
                  Teacher Management
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/help" className="nav-link">
              Help
            </Link>
            <button
              className="nav-link"
              onClick={() => {
                dispatch({ type: "auth/logout" });
              }}
            >
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
