// import Gallery from '../components/Gallery';
import MapEmbed from '../components/MapEmbed';

export default function Reception() {
  return (
    <section className="page center">
      <img className="event-graphic event-graphic-lg" src="https://png.pngtree.com/png-clipart/20230112/original/pngtree-indian-wedding-clipart-containing-bride-and-groom-wearing-yellow-colour-mehendi-png-image_8906657.png" alt="Reception celebration" />
      <h1 style={{ marginTop: 0 }}>Reception</h1>
      <hr className="divider" />
      <p className="event-detail date"><em>Saturday, May 16, 2026 at 6:00 PM</em></p>
      <p className="event-detail dress-code"><em>Dress Code: Formal Indian or Western Attire</em></p>
      <span className="ornament">✦ ✦ ✦ ✦ ✦</span>
      <p className="event-detail venue-subtitle">Forsyth Conference Center</p>
      <p className="event-detail venue-subtitle">Lanier Technical College</p>
      <p className="event-detail">3410 Ronald Regan Blvd, Cumming, GA 30041</p>
      <MapEmbed address="3410 Ronald Regan Blvd, Cumming, GA 30041" />
    </section>
  );
}
