import { NavDropdown, Nav, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const CustomNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isTeacherLoacal = localStorage.getItem("isTeacher");
  const isStudentLoacal = localStorage.getItem("isStudent");
  const { isTeacher, isStudent } = useSelector((state) => state.auth);

  const handleLogout = () => {
    navigate("/");
    dispatch({ type: "auth/logout" });

    localStorage.clear();
  };

  // Function to toggle the link visibility based on the login status

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

            {isTeacherLoacal || isTeacher ? (
              ""
            ) : (
              <Link to="/student" className="nav-link">
                Student
              </Link>
            )}
            {isStudent || isStudentLoacal ? (
              ""
            ) : (
              <Link to="/teacher" className="nav-link">
                Teacher
              </Link>
            )}
            <NavDropdown title="Admin" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  to="/admin/homecontentmanagement"
                  className="nav-link text-dark"
                >
                  Home Content Management
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/admin/teachermanagement"
                  className="nav-link text-dark"
                >
                  Teacher Management
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/admin/studentmanagement"
                  className="nav-link text-dark"
                >
                  Student Management
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/help" className="nav-link">
              Help
            </Link>
            {isStudentLoacal || isTeacherLoacal ? (
              <button className="nav-link" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
