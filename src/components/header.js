import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../styles/header.css'

const Header = (props) => {
    const navigate = useNavigate()

    return (
        <Navbar className='nav'>
      <Link to='/' className='nav-link link'>
        <Navbar.Brand>
            <img className='logo' src="/rv-logo.png" alt='RV'></img>
        </Navbar.Brand>
      </Link>
      <Navbar.Collapse>
        <Nav>
            <div className='link-container'>
                <Nav.Link>
                    <Link to="/" className='link'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to='/about' className='link'>About</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to='/show' className='link'>RV's</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to='/new' className='link'>Add</Link>
                </Nav.Link>
            </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}

export default Header;
