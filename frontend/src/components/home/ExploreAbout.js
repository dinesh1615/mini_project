// const ExploreAbout = () => {
//   return (
//     <div>
//       <h1>HI, WELCOME TO STAR NIVAS HOTEL</h1>
  
//     </div>
//   );
// };
// export default ExploreAbout;

import React from 'react';

const ExploreAbout = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#4CAF50' }}>HI, WELCOME TO STAR NIVAS HOTEL</h1>

      <section style={{ margin: '20px 0' }}>
        <h2>About Us</h2>
        <p>Star Nivas Hotel is a luxurious and welcoming place to stay, offering top-notch amenities and exceptional service. Located in the heart of the city, Star Nivas Hotel is perfect for both business and leisure travelers.</p>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h2>Rooms & Suites</h2>
        <p>Our rooms and suites are designed with your comfort in mind. Each room is equipped with modern amenities including free Wi-Fi, flat-screen TVs, and room service.</p>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h2>Facilities</h2>
        <p>We offer a range of facilities to make your stay enjoyable, including a fitness center, spa, swimming pool, and an on-site restaurant serving delicious cuisine.</p>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h2>Gallery</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <img src="/assets/img/hotel-exterior.jpg" alt="Hotel Exterior" style= {{ width: '30%', marginBottom: '20px' }} />
          <img src="/assets/img/hotel-room.jpg" alt="Hotel Room" style={{ width: '30%', marginBottom: '20px' }} />
          <img src="/assets/img/hotel-restaurant.jpg" alt="Hotel Restaurant" style={{ width: '30%', marginBottom: '20px' }} />
        </div>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h2>Contact Us</h2>
        <p>Address: RGUKT BASAR, NIRMAL, TELANGANA</p>
        <p>Phone: +123 456 7890</p>
        <p>Email: info@gmail.com</p>
      </section>
    </div>
  );
};

export default ExploreAbout;

