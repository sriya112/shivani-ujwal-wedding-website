import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-title">Emma & Liam</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/haldi">Haldi</Link>
        <Link to="/mehndi">Mehndi</Link>
        <Link to="/sangeet">Sangeet</Link>
        <Link to="/wedding">Wedding</Link>
        <Link to="/reception">Reception</Link>
      </div>
    </nav>
  );
}
