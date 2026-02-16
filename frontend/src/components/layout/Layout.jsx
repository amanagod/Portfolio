import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout wrapper — wraps all pages with Navbar and Footer.
 */
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

