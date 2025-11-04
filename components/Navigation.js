// components/Navigation.js
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="site-header">
      <nav style={{ padding: '20px', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}>InSafety Services</span>
        
        {/* Placeholder for navigation links */}
        <div>
          <Link href="/" style={{ marginLeft: '25px', color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/services" style={{ marginLeft: '15px', color: 'white', textDecoration: 'none' }}>Services</Link>
          <Link href="/contact" style={{ marginLeft: '15px', color: 'white', textDecoration: 'none' }}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}