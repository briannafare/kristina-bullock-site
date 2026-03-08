export const siteData = {
  business: {
    name: "Kristina Bullock Real Estate",
    agent: "Kristina Bullock",
    phone: "503-382-7798",
    phoneTel: "tel:+15033827798",
    email: "kristina@prosperinrealestate.com",
    brokerage: "eXp Realty, LLC",
    license: "Oregon License #200812019",
    gbpUrl: "https://share.google/JAKhGBx1hEmOJCOQp",
    hours: "Mon–Fri 9am–5pm · Weekends by appointment",
    googleRating: "5.0",
    googleReviewCount: 2,
    yearsExperience: "17+",
    licensedSince: "2008",
  },
  serviceAreas: [
    { name: "Portland", tagline: "The city I call home" },
    { name: "Beaverton", tagline: "Family-friendly with great schools" },
    { name: "Lake Oswego", tagline: "Lakeside living, premium feel" },
    { name: "Tigard", tagline: "Suburban comfort, easy commutes" },
    { name: "Gresham", tagline: "Affordable entry to the metro" },
    { name: "Hillsboro", tagline: "Tech hub, growing fast" },
  ],
  testimonials: [
    {
      quote:
        "Kristina was an absolute pleasure to work with from the lender side. She\u2019s proactive, responsive, and incredibly organized\u2014always staying ahead of deadlines, communicating clearly, and advocating for the client every step of the way. She kept the transaction moving smoothly and made coordination between all parties easy. I\u2019d happily partner with Kristina again and highly recommend her to any buyer or seller looking for a true professional.",
      reviewer: "Tyler B.",
      context: "Lending Partner",
      source: "Google Review",
    },
    {
      quote:
        "Kristina hit a little different. Polite, yet strong, realistic and dependable. I really can\u2019t put into words the happiness she brings. She was willing to meet us within 24 hours of initial communication. She met us 45 minutes out of the way, at night, to check a few last things\u2014she didn\u2019t hesitate. Kristina negotiated her heart out. We secured our home, our first family home, 2 kids in tow. Kristina went from stranger to family friend. If you are looking for someone truthful and honest, friendly but strong, and pull out all the stops, she is the one.",
      reviewer: "K.",
      context: "First-Time Home Buyer",
      source: "Google Review",
    },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Buying", href: "/buying" },
    { label: "Selling", href: "/selling" },
    { label: "Investing", href: "/investing" },
    { label: "About", href: "/about" },
    { label: "Neighborhoods", href: "/neighborhoods" },
  ],
} as const;
