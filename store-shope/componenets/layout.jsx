import Header from "./header/header.jsx";
import Footer from "./parts/footer.jsx";

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
