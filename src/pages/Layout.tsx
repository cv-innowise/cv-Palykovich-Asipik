import { Sidebar } from "../components";

const HomeLayout = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Sidebar />
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
