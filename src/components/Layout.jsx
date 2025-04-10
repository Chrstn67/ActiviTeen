import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "../styles/Layout.css";

function Layout() {
  return (
    <div className="site-container">
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
