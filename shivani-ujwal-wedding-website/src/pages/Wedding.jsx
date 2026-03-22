import Gallery from '../components/Gallery';
import MapEmbed from '../components/MapEmbed';

export default function Wedding() {
  return (
    <section className="page">
      <h1>Wedding Ceremony</h1>
      <p className="event-detail">City: Placeholder City</p>
      <p className="event-detail">Venue: Placeholder Venue</p>
      <Gallery />
      <MapEmbed address="Placeholder Venue City" />
    </section>
  );
}
