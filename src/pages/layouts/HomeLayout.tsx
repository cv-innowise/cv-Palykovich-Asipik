import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';

export const HomeLayout = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <Sidebar />
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
