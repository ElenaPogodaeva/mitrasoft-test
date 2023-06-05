import HomePage from './pages/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import AboutPage from './pages/AboutPage/AboutPage';
import { Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage/UserPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="users/:userId" element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
