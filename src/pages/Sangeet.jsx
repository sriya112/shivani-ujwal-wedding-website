// import Gallery from '../components/Gallery';
import MapEmbed from '../components/MapEmbed';

export default function Sangeet() {
  return (
    <section className="page center">
      <img className="event-graphic sticker" src="https://static.vecteezy.com/system/resources/thumbnails/046/448/693/small/indian-couple-illustration-south-india-bride-wearing-wedding-dresses-free-vector.jpg" alt="Sangeet celebration" />
      <h1>Sangeet Soirée</h1>
      <hr className="divider" />
      <p className="event-detail dress-code"><em>Dress Code: Jewel Tones</em></p>
      <p className="event-detail dress-code"><em>Friday, May 1, 2026 at 6:00 PM</em></p>
      <span className="ornament">✦ ✦ ✦ ✦ ✦</span>
      <p className="event-detail venue-subtitle">Tandoor Cuisine of India</p>
      <p className="event-detail">1132 E Katella Ave, Orange, CA 92867</p>
      <MapEmbed address="1132 E Katella Ave, Orange, CA 92867" />
    </section>
  );
}
