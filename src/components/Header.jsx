// src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#e0f2fe', // لون سماوي فاتح
    borderBottom: '3px solid #d4af37', // خط ذهبي
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#0369a1', // أزرق غامق متناسق مع السماوي
    fontWeight: 'bold',
  };

  return (
    <header style={headerStyle}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#d4af37' }}>
        تكنو جوردان
      </div>
      <ul style={navLinksStyle}>
        <li><Link to="/" style={linkStyle}>الرئيسية</Link></li>
        <li><Link to="/about" style={linkStyle}>عن المشروع</Link></li>
        <li><Link to="/login" style={linkStyle}>دخول</Link></li>
        <li><Link to="/register" style={linkStyle}>تسجيل</Link></li>
      </ul>
    </header>
  );
};

export default Header;