
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

export function CustomNav() {

  const navigate = useNavigate();
  const location = useLocation();
  const handleNav = (path) => () => {
    let replace = false;
    if (matchPath(path, location.pathname) !== null) //path es igual al actual
      replace = true; //si es igual el remplacem perque no s'acumuli al history
    navigate(path, { replace })
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={handleNav('/')}>Escacs</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleNav('game')}>Jugar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}



