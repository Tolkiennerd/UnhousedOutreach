import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function UnhousedOutreachNavbar() {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand className="navbar-main navbar-link" href="/">Unhoused Outreach</Navbar.Brand>
          <Nav className="navbar-items">
            <Nav.Link className="navbar-link" href="/">Neighbors</Nav.Link>
            <Nav.Link className="navbar-link" href="map">Map</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default UnhousedOutreachNavbar;