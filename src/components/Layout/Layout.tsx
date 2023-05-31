import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
