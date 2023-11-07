import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Forever Flowers</Navbar.Brand>
          <Nav className="me-left">
            <Nav.Link href="/entrar">Entrar</Nav.Link>
            <Nav.Link href="/registro">Registrar</Nav.Link>
            <Nav.Link href="/produto">Produto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;