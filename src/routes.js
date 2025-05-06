import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Feed from './components/feed/feed';
import Profile from './components/profile/profile';
import AdminPanel from './components/admin/adminpanel';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
