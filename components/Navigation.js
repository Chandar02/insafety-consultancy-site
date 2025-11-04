// components/Navigation.js
import Link from 'next/link';

export default function Navigation() {
    return (
        <header className="site-header">
            <nav style={{ padding: '20px', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.5em' }}>InSafety Services</span>
                
                {/* Navigation links */}
                <div>
                    <Link href="/" style={{ marginLeft: '25px', color: 'white', textDecoration: 'none' }}>Home</Link>
                    <Link href="/services" style={{ marginLeft: '15px', color: 'white', textDecoration: 'none' }}>Services</Link>
                    {/* FIXED: Anchor link for smooth scroll to footer contact form */}
                    <Link 
                        href="#contact-form-anchor" 
                        style={{ marginLeft: '15px', color: 'white', textDecoration: 'none' }}
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}