import Countdown from '../components/Countdown';

import imgShivani from '../pictures/shivani.jpeg';
import imgUjwal from '../pictures/ujwal.jpeg';

import img2017 from '../pictures/2017.jpg';
import img2018 from '../pictures/2018.jpeg';
import img2019 from '../pictures/2019.JPG';
import img2020 from '../pictures/2020.jpeg';
import img2021 from '../pictures/2021.JPG';
import img2022 from '../pictures/2022.jpeg';
import img2023 from '../pictures/2023.jpeg';
import img2024 from '../pictures/2024.jpeg';
import img2025 from '../pictures/2025.jpeg';
import imgPresent from '../pictures/present.jpeg';

const timelineData = [
  { year: '2017', image: img2017, caption: 'The first picture Shivani and Ujwal took at Friendsgiving 2017 (they are CLEARLY just friends here as the picture indicates 😎)' },
  { year: '2018', image: img2018, caption: 'Pumpkin Patch 2018, a memorable date in college' },
  { year: '2019', image: img2019, className: 'img-top', caption: 'Project RISHI banquet where Ujwal became the president after Shivani\'s graduation' },
  { year: '2020', image: img2020, caption: 'At a concert held at UCI (few weeks before long distance and COVID 😢)' },
  { year: '2021', image: img2021, caption: 'Reuniting after not seeing each other for a year and half!' },
  { year: '2022', image: img2022, caption: 'Uj\'s visit to SoCal before medical school' },
  { year: '2023', image: img2023, caption: 'Shivani makes an appearance at Med Prom!' },
  { year: '2024', image: img2024, caption: 'Springtime museum visit in ATL with Shivani and Ujwal' },
  { year: '2025', image: img2025, caption: 'The pictures after the proposal at Huntington Beach' },
  { year: 'The Present', image: imgPresent, caption: 'Excited Engagement pics before the fun!' },
];

export default function Home() {
  return (
    <section className="page center">
      <h1>May 3, 2026</h1>
      <br/>
      <Countdown />
      <br/>
      <h3>Celebrating a love that spans two cultures, a joyous union woven with Maharashtrian and Telugu traditions.</h3>
      <h4>We can't wait to celebrate with you</h4>

      <div className="timeline-wrapper">
        <div className="timeline-intro">
          <img className="timeline-intro-img" src={imgShivani} alt="Shivani" />
          <img className="timeline-intro-img" src={imgUjwal} alt="Ujwal" />
        </div>

        <div className="timeline-connector-lines">
          <div className="connector-line connector-line-left"></div>
          <div className="connector-line connector-line-right"></div>
        </div>

        <div className="timeline">
        {timelineData.map((item, i) => (
          <div key={item.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <img src={item.image} alt={item.year} className={item.className || ''} />
              <div className="timeline-text">
                <span className="timeline-year">{item.year}</span>
                <p className="timeline-caption">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
