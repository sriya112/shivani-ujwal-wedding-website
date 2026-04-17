// import Gallery from '../components/Gallery';
import MapEmbed from '../components/MapEmbed';

export default function Haldi() {
  return (
    <section className="page center">
      <img className="event-graphic" src="https://png.pngtree.com/png-vector/20221224/ourmid/pngtree-haldi-couple-cute-indian-on-ceremony-in-yellow-outfits-bride-and-png-image_6536150.png" alt="Haldi ceremony" />
      <h1>Haldi Hues</h1>
      <hr className="divider" />
      <p className="event-detail date"><em>Saturday, May 2, 2026 at 10:00 AM</em></p>
      <p className="event-detail dress-code"><em>Dress Code: Desi Chic - Light, Comfortable Indian Wear or Western Attire</em></p>
      <span className="ornament">✦ ✦ ✦ ✦ ✦</span>
      <p className="event-detail venue-subtitle">Garden Patio</p>
      <p className="event-detail venue-subtitle">Sheraton Park Hotel at the Anaheim Resort</p>
      <p className="event-detail">1855 S Harbor Blvd, Anaheim, CA 92802</p>
      <MapEmbed address="1855 S Harbor Blvd, Anaheim, CA 92802" />
    </section>
  );
}
