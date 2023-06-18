import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" onClick={handleShow} />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbarLabel-expand-sm"
          placement="start"
          show={show}
          onHide={handleClose}
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
              <Link to="/" className="menu-link" onClick={handleClose}>
                Список постов
              </Link>
              <Link to="about" className="menu-link" onClick={handleClose}>
                Обо мне
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
