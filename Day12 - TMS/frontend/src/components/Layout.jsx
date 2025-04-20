import { Link, Outlet, useNavigate } from 'react-router-dom';
import { logout } from '../api/auth';

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}