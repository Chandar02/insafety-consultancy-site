// components/Layout.js
import Navigation from './Navigation';
import Footer from './Footer';

/**
 * The main structural component (Layout).
 * It wraps every page with a consistent header and footer.
 */
export default function Layout({ children }) {
  return (
    <div className="page-container">
      <Navigation />
      
      {/* This 'main' area is where the specific page content (children) will render */}
      <main className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}