// app/layout.js
import Header from '../components/Header'; 
import './globals.css'; // Ensure your global CSS file is imported

export default function RootLayout({ children }) {
  // Use a padding value slightly larger than the HEADER_HEIGHT (70px)
  const SCROLL_PADDING = '80px'; 
  return (
    <html lang="en">
      {/* Apply the scroll padding to the body for header overlap fix */}
      <body style={{ scrollPaddingTop: SCROLL_PADDING }}> 
        <Header /> 
        {children}
      </body>
    </html>
  );
}