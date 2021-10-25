import Footer from "./footer.jsx";
import Header from "./header/header.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
