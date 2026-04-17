import MapEmbed from '../components/MapEmbed';

export default function Wedding() {
  return (
    <section className="page center">
      <img className="event-graphic event-graphic-lg-w sticker" src="https://t3.ftcdn.net/jpg/07/32/42/24/360_F_732422498_GczZX79vY8YUYc0rjycGd0mLUdl4SeMS.jpg" alt="Wedding ceremony" />
      <h1 style={{ marginTop: 0 }}>Wedding Ceremony</h1>
      <hr className="divider" />
      <p className="event-detail date"><em>Sunday, May 3rd, 2026 at 7:30 AM</em></p>
      <p className="event-detail dress-code"><em>Dress Code: Indian Traditional or Vibrant Colors Encouraged</em></p>
      <span className="ornament">✦ ✦ ✦ ✦ ✦</span>
      <p className="event-detail venue-subtitle">The Lawn</p>
      <p className="event-detail venue-subtitle">Sheraton Park Hotel at the Anaheim Resort</p>
      <p className="event-detail">1855 S Harbor Blvd, Anaheim, CA 92802</p>

      <h2 className="schedule-heading">Schedule</h2>
      <ul className="schedule-list">
        <li><span>Breakfast</span><span>7:30 AM</span></li>
        <li><span>Baraat</span><span>8:00 AM</span></li>
        <li><span>Ceremony</span><span>8:30 AM</span></li>
        <li><span>Muhurat</span><span>10:26 AM</span></li>
        <li><span>Luncheon</span><span>12:00 PM</span></li>
        <li className="schedule-onwards">&amp; onwards</li>
      </ul>

      <MapEmbed address="1855 S Harbor Blvd, Anaheim, CA 92802" />
    </section>
  );
}
