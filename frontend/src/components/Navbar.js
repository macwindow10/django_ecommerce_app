import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import { useHistory } from "react-router-dom";
import SearchBarForProducts from './SearchBarForProducts'

const search = {
    flexBasis: "43%",
    paddingLeft: "20px",
    paddingRight: "20px",
    alignItems: "center",
    diplay: "flex"
};

const logo = {
    flexBasis: "40%",
    padding: "0",
    margin: "0",
    display: "inline-block",
    color: "#fff",
    fontWeight: "700",
    fontSize: "26px",
    width: "250px"
};

function NavBar() {

    let history = useHistory()
    const dispatch = useDispatch()

    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    // logout
    const logoutHandler = () => {
        dispatch(logout()) // action
        history.push("/login")
        window.location.reload()
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>

                <header>
                    <div style={logo}>
                        <a href="http://localhost:3000/">
                            <img
                                src="https://static.pcbuilder.net/assets/images/logo-80.png"
                                alt="PC Builder" height="80" width="80">
                            </img>
                            <span>PC Builder</span> <sup><small>™</small></sup>
                        </a>
                    </div>

                </header>

                <Container>
                    {/*<LinkContainer to="/">
                        <Navbar.Brand><i className="mb-2 fas fa-home"> Home</i></Navbar.Brand>
    </LinkContainer>*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            {/* New Product (Admins Only) */}

                            {userInfo && userInfo.admin ?
                                <LinkContainer to="/new-product/">
                                    <Nav.Link >Add Product</Nav.Link>
                                </LinkContainer>
                                : ""
                            }

                            <span className="">
                                <SearchBarForProducts />
                            </span>

                        </Nav>

                        {/* login-logout condition here */}

                        {userInfo ?
                            <div>
                                <NavDropdown className="navbar-nav text-capitalize" title={userInfo.username} id='username'>
                                    <LinkContainer to="/account">
                                        <NavDropdown.Item>Account Settings</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/all-addresses/">
                                        <NavDropdown.Item>Address Settings</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/stripe-card-details/">
                                        <NavDropdown.Item>Card Settings</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/all-orders/">
                                        <NavDropdown.Item>All Orders</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            :

                            <LinkContainer to="/login">
                                <Nav.Link><i className="fas fa-user"></i> Login / Register</Nav.Link>
                            </LinkContainer>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar bg="dark" variant="dark" expand="lg">

                <Navbar.Collapse id="secondary-navbar-nav">
                    <Nav >
                        <LinkContainer to="/system-builder/">
                            <Nav.Link >System Builder</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/prebuilt-pc/">
                            <Nav.Link >Pre-Built PC</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/prebuilt-pc/">
                            <Nav.Link >Laptops</Nav.Link>
                        </LinkContainer>
                        <div>
                            <NavDropdown className="navbar-nav text-capitalize"
                                title='Browse Products'>
                                <LinkContainer to="/storage">
                                    <NavDropdown.Item>Storage</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/all-addresses/">
                                    <NavDropdown.Item>Graphics Card</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/power-supply/">
                                    <NavDropdown.Item>Power Supply</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/cases/">
                                    <NavDropdown.Item>Case</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/cases/">
                                    <NavDropdown.Item>CPU</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/cases/">
                                    <NavDropdown.Item>CPU Cooler</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/cases/">
                                    <NavDropdown.Item>Motherboard</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/cases/">
                                    <NavDropdown.Item>Memory</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <div id="carouselExampleCaptions"
                style={{ paddingTop: "30px", paddingBottom: "30px", "height": "250px", "position": 'relative', backgroundColor: "#343a40" }}
                className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0"
                        className="active" style={{ color: 'black' }}></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" style={{ width: "80%" }}>
                    <div className="carousel-item active">
                        <div className="carousel-caption d-none d-md-block"
                            style={{ "position": 'relative', textAlign: "left" }}>
                            <h2>Experience the New Perspective of</h2>
                            <h2><span className='text-primary'>Building</span> Your Dream PC</h2>
                            <p style={{ width: "80%", wordWrap: "break-word" }}>Building your own PC is a rewarding experience. With our new approach,
                                we'll help you to be sure that the compatibility of your selected PC parts is just right.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption d-none d-md-block"
                            style={{ "position": 'relative', textAlign: "left" }}>
                            <h2>Handling Your Toughest PC Parts</h2>
                            <h2><span className='text-primary'>Compatibility</span> with Ease</h2>
                            <p style={{ width: "80%", wordWrap: "break-word" }}>We handle the toughest task of PC compatibility with easeand provide
                                you with the best compatibility that's available.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption d-none d-md-block"
                            style={{ "position": 'relative', textAlign: "left" }}>
                            <h2>Performing with Excellence to</h2>
                            <h2><span className='text-primary'>Do More for More</span></h2>
                            <p style={{ width: "80%", wordWrap: "break-word" }}>We are excellence with the pc parts compatibility to do more for you!
                                With the ever-changing tech, you'll always get the latest and most accurate compatibility.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href='#carouselExampleCaptions'
                    type="button" data-target="#carouselExampleCaptions" data-slide="prev"
                    style={{ backgroundColor: "#343a40", width: "5%" }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href='#carouselExampleCaptions'
                    type="button" data-target="#carouselExampleCaptions" data-slide="next"
                    style={{ backgroundColor: "#343a40", width: "5%" }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </header>
    )
}

export default NavBar
