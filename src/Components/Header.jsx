import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useSelector } from "react-redux";

const Header = () => {

const cartQuantity = useSelector((state) =>
        state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
);
const cart = useSelector((state) => state.cart.cartItems);
console.log('cart items in header:', cart);
  return (
    <div>
      <Navbar expand="lg" className="navbar-bg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="nav-brand">
            <img
              alt=""
              src="/cake-logo1.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Cake Kart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav-brand gap-2 align-items-center"
              navbarScroll
            >
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/product">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/speciality">
                Speciality Cakes
              </Nav.Link>
              <Nav.Link as={Link} to="/christmass">
                Christmass Offer
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" style={{ position: "relative" }}>
                <ShoppingCartCheckoutIcon />
                {cartQuantity > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-10px",
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {cartQuantity}
                  </span>
                )}
              </Nav.Link>

              <Nav.Item>
                <Button
                  href="#login"
                  className="d-flex align-items-center gap-1 nav-button"
                  style={{
                    backgroundColor: "rgba(59, 209, 59, 0.72)",
                    border: "none",
                  }}
                >
                  <LoginIcon fontSize="small" />
                  Login
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
