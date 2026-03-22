import Gallery from '../src/components/Gallery';
import MapEmbed from '../src/components/MapEmbed';

export default function Reception() {
  return (
    <section className="page">
      <h1>Reception</h1>
      <p className="event-detail">City: Placeholder City</p>
      <p className="event-detail">Venue: Placeholder Venue</p>
      <Gallery />
      <MapEmbed address="Placeholder Venue City" />
    </section>
  );
}
