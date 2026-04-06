const accommodations = [
  {
    name: 'Sheraton Park Hotel',
    detail: 'Wedding venue hotel',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/437421050.jpg?k=4683b02f8898bf916953e90c169354009c947fc1e799e21e23c8f1b72e49400f&o=',
    url: 'https://www.marriott.com/reservation/rateListMenu.mi',
  },
  {
    name: 'Hilton Anaheim',
    detail: '6 min walk from wedding venue',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/a8/d1/70/exterior.jpg?w=900&h=500&s=1',
    url: 'https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=SNAAHHH&arrivalDate=2026-05-01&departureDate=2026-05-04&room1NumAdults=2&inputModule=HOTEL_SEARCH&viewPackagesAndPromotionsRate=true&WT.mc_id=zLADA0WW1XX2OLX3DA4MS5MS6_SNAAHHH7_298227037_&adType=FL&dsclid=75222889541148672&dclid=CNL9qqr35ZEDFc0Y7wIdCx0rqA&hmGUID=5ffd7328-75ef-4fd6-9a61-398bedf1eab1',
  },
  {
    name: 'Anaheim Marriott',
    detail: '7 min walk from wedding venue',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/3d/bd/d7/hotel-exterior.jpg?w=900&h=500&s=1',
    url: 'https://www.marriott.com/reservation/rateListMenu.mi?dclid=CNWKisL45ZEDFfmpOgUdWW4UcQ',
  },
  {
    name: 'Hyatt Place',
    detail: '8 min walk from wedding venue',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/2c/cb/2e/eb/exterior.jpg',
    url: 'https://www.hyatt.com/shop/rooms/anaza?location=Hyatt%20Place%20at%20Anaheim%20Resort%2FConvention%20Center&checkinDate=2026-05-01&checkoutDate=2026-05-04&rooms=1&adults=2&kids=0&rate=Standard',
  },
  {
    name: 'Double Tree by Hilton Anaheim',
    detail: '10 min walk to wedding venue',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/474353652.jpg?k=f04c4f6470710e1e7c2f83f10a0bdf29564797a0148cad02dc9393a3858d848a&o=',
    url: 'https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=SNADCDT&arrivalDate=2026-05-01&departureDate=2026-05-04&room1NumAdults=2&inputModule=HOTEL_SEARCH&viewPackagesAndPromotionsRate=true&WT.mc_id=zLADA0WW1XX2OLX3DA4MS5MS6_SNADCDT7_298227037_&adType=FL&dsclid=75223342070382592&dclid=CNrssuL95ZEDFReROgUdnwEqDw&hmGUID=5ffd7328-75ef-4fd6-9a61-398bedf1eab1',
  },
  {
    name: 'Courtyard by Marriott Anaheim',
    detail: '9 min walk from wedding venue',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/643219256.jpg?k=31d1b83f68454887515813f55e4dffe4c7684fd91fc2c2692952189904b0010c&o=',
    url: 'https://www.marriott.com/reservation/rateListMenu.mi',
  },
  {
    name: 'Airbnb near Sheraton Park Hotel',
    detail: 'Browse nearby rentals',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png',
    url: 'https://www.airbnb.com/s/Sheraton-Park-Hotel-at-the-Anaheim-Resort--Anaheim--CA/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJI7_SCt3X3IARVfVQibae0tg&acp_id=t-g-ChIJI7_SCt3X3IARVfVQibae0tg&date_picker_type=calendar&checkin=2026-05-01&checkout=2026-05-04&adults=4&search_type=user_map_move&drawer_open=true&query=Sheraton%20Park%20Hotel%20at%20the%20Anaheim%20Resort%2C%20Anaheim%2C%20CA&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-01-01&monthly_length=3&monthly_end_date=2026-04-01&search_mode=regular_search&price_filter_input_type=2&price_filter_num_nights=3&channel=EXPLORE&ne_lat=33.7994876569213&ne_lng=-117.92181831040989&sw_lat=33.79585031208318&sw_lng=-117.92517202859892&search_by_map=true&zoom_level=17.31920622958689&map_toggle=true',
  },
];

export default function Accommodations() {
  return (
    <section className="page">
      <h1>Accommodation Recommendations</h1>
      <div className="accommodation-grid">
        {accommodations.map((place, i) => (
          <a
            key={i}
            href={place.url}
            target="_blank"
            rel="noopener noreferrer"
            className="accommodation-card"
          >
            <img src={place.image} alt={place.name} />
            <div className="accommodation-card-info">
              <h3>{place.name}</h3>
              <p>{place.detail}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
