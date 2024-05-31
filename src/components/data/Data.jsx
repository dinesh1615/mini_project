export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  {
    id: 5,
    path: "/team",
    text: "Our Team",
  },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
  {
    id: 7,
    path: "/login",
    text: "Login",
  },
  {
    id: 8,
    path: "/queries",
    text: "Queries",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const carouselData = [
  {
    img: "../assets/img/carousel-1.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
];
export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "7861",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "1234",
  },
  {
    icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "4321",
  },
];

export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms & Appartment",
    discription: "Description",
    go: "/rooms",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    discription: "Description",
    go: "/food",
  },
  {
    icon: <i class="fa fa-spa fa-2x text-primary"></i>,
    name: "Fitness",
    discription: "Description",
    go: "/",
  },

  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    discription: "Description",
    go: "/",
  },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription: "Description",
    go: "/",
  },

  {
    icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    discription: "Description",
    go: "/",
  },
];
export const team = [
  {
    image: "../assets/img/download.jpeg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/download.jpeg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/download.jpeg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/download.jpeg",
    name: "Full Name",
    designation: "Designation",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Food & Restaurant",
      },
      {
        name: "Fitness",
      },
      {
        name: "Sports & Gaming",
      },
      {
        name: "Event & Party",
      },
      {
        name: "GYM & Yoga",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "IIIT RGUKT - BASAR, NIRMAL, TELANGANA",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+012 345 67890",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "info@example.com",
  },
];

export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "book@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "tech@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "info@example.com",
  },
];
export const testimonial = [
  {
    description: "some decription",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description: "some decription",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-2.jpg",
  },
  {
    description: "some decription",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-3.jpg",
  },
];

export const roomItems = [
  {
    img: "../assets/img/room-1.jpg",
    price: "10,000/night",
    name: "Junior Suit",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Description",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/room-2.jpg",
    price: "15,000/night",
    name: "Executive Suite",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Description",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/room-3.jpg",
    price: "20,000/night",
    name: "Super Deluxe",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Description",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/room-1.jpg",
    price: "10,000/night",
    name: "Junior Suit",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Description",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/room-2.jpg",
    price: "15,000/night",
    name: "Executive Suite",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Description",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/room-3.jpg",
    price: "20,000/night",
    name: "Super Deluxe",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Description",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/room-1.jpg",
    price: "10,000/night",
    name: "Junior Suit",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Description",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/room-2.jpg",
    price: "15,000/night",
    name: "Executive Suite",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Description",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/room-3.jpg",
    price: "20,000/night",
    name: "Super Deluxe",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description: "Description",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
];

export const facility = [
  {
    icon: <i class="fa fa-bed text-primary me-2"></i>,
    quantity: 3,
    facility: "bed",
  },
  {
    icon: <i class="fa fa-bath text-primary me-2"></i>,
    quantity: 2,
    facility: "bath",
  },
  {
    icon: <i class="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
];
