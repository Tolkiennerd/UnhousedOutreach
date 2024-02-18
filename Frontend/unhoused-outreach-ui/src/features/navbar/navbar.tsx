import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function UnhousedOutreachNavbar() {
  // TODO: Get these from outreach team data.
  const defaultLatitude =  38.96577;
  const defaultLongitude = -77.35503;
  const mapRouteLink = `map/${defaultLatitude}/${defaultLongitude}`;

  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand className="navbar-main navbar-link" href="/">Unhoused Outreach</Navbar.Brand>
          <Nav className="navbar-items">
            <Nav.Link className="navbar-link" href="/neighbors">Neighbors</Nav.Link>
            <Nav.Link className="navbar-link" href={mapRouteLink}>Map</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default UnhousedOutreachNavbar;