import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs/CustomBreadcrumbs';

export const HomeLayout = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <Sidebar />
        <div className="container">
          <CustomBreadcrumbs />
          <Outlet />
        </div>
      </main>
    </div>
  );
};
