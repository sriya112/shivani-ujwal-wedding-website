// import Gallery from '../components/Gallery';
import MapEmbed from '../components/MapEmbed';

export default function Haldi() {
  return (
    <section className="page">
      <h1>Haldi</h1>
      <p className="event-detail">Saturday, May 2, 2026 at 10:00 AM</p>
      <p className="event-detail">Sheraton Park Hotel at the Anaheim Resort</p>
      <p className="event-detail">1855 S Harbor Blvd, Anaheim, CA 92802</p>
      <MapEmbed address="1855 S Harbor Blvd, Anaheim, CA 92802" />
    </section>
  );
}
