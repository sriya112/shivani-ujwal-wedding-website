import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-title">Shivani & Ujwal</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/sangeet">Sangeet</Link>
        <Link to="/haldi">Haldi</Link>
        <Link to="/wedding">Wedding</Link>
        <Link to="/accommodations">Accommodation Recommendations</Link>
        <Link to="/registry">Registry</Link>
      </div>
    </nav>
  );
}
