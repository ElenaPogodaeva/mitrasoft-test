import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './Header.scss';

export const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbarLabel-expand-sm"
          placement="start"
        >
          <Offcanvas.Header closeButton className="align-items-start">
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
              Погодаева Елена
              <a className="email" href="mailto:pogodaeva.elena2020@gmail.com">
                pogodaeva.elena2020@gmail.com
              </a>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href="/">Список постов</Nav.Link>
              <Nav.Link href="/about">Обо мне</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
