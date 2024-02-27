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
            {/* <img className='logo' src="/RV-logo.png" alt='RV'></img> */}
        </Navbar.Brand>
      </Link>
      <Navbar.Collapse>
        <Nav>
            <div className='link-container'>
              <NavDropdown title={<span>Home</span>} className='home-link'>
                <div className='nav-dropdown'>
                <NavDropdown.Item>
                        <Link to="/" className='link'>Home</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/about' className='link'>About</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/show' className='link'>RV's</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/new' className='link'>Add</Link>
                    </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
            </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}

export default Header;
