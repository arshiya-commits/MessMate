import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <Outlet /> {/* This renders child page (home, feedback etc.) */}
      </div>
    </div>
    
  );
};

export default Layout;
