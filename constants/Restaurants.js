export const restaurants = [
  {
    id: 1,
    name: "Pasta Palace",
    location: "123 Pasta Lane, Italy Town",
    cuisine: "Italian",
    rating: 4.5,
    image: require("../assets/images/restaurants/restaurant1.webp"),
    description:
      "Cozy Italian trattoria with a variety of homemade pasta and rich sauces.",
    reviews: [
      { user: "Alice", rating: 5, comment: "Absolutely love the pasta here!" },
      {
        user: "Bob",
        rating: 4,
        comment: "Great food but service was a bit slow.",
      },
    ],
    lat: 41.8902, // Example latitude for Rome, Italy
    long: 12.4922, // Example longitude for Rome, Italy
    phone: "+254 7942 22222",
  },
  {
    id: 2,
    name: "Sushi World",
    location: "456 Sushi Blvd, Japan City",
    cuisine: "Japanese",
    rating: 4.7,
    image: require("../assets/images/restaurants/restaurant2.jpg"),
    description: "Top-notch sushi with fresh fish and a modern decor.",
    reviews: [
      { user: "Charlie", rating: 5, comment: "Best sushi outside of Japan." },
      {
        user: "Dana",
        rating: 4,
        comment: "Great sushi, long wait times during peak hours.",
      },
    ],
    lat: 35.6895, // Example latitude for Tokyo, Japan
    long: 139.6917, // Example longitude for Tokyo, Japan
  },
  {
    id: 3,
    name: "Burger Haven",
    location: "789 Burger Ave, USA Town",
    cuisine: "American",
    rating: 4.3,
    image: require("../assets/images/restaurants/restaurant3.jpg"),
    description: "Gourmet burgers and comfort food in a laid-back atmosphere.",
    reviews: [
      { user: "Eve", rating: 4, comment: "Delicious burgers and fries!" },
      {
        user: "Frank",
        rating: 4,
        comment: "Good food but noisy during peak hours.",
      },
    ],
    lat: 40.7128, // Example latitude for New York City, USA
    long: -74.006, // Example longitude for New York City, USA
  },
  {
    id: 4,
    name: "Taco Town",
    location: "321 Taco St, Mexico City",
    cuisine: "Mexican",
    rating: 4.6,
    image: require("../assets/images/restaurants/restaurant4.jpeg"),
    description:
      "Authentic Mexican tacos with bold flavors and fresh ingredients.",
    reviews: [
      {
        user: "Grace",
        rating: 5,
        comment: "Fantastic tacos, especially the carne asada.",
      },
      {
        user: "Hank",
        rating: 4,
        comment: "Great tacos, but long lines during busy times.",
      },
    ],
    lat: 19.4326, // Example latitude for Mexico City, Mexico
    long: -99.1332, // Example longitude for Mexico City, Mexico
  },
  {
    id: 5,
    name: "Curry House",
    location: "654 Curry Rd, India Town",
    cuisine: "Indian",
    rating: 4.4,
    image: require("../assets/images/restaurants/restaurant5.webp"),
    description: "Rich and diverse Indian curries and aromatic dishes.",
    reviews: [
      { user: "Ivy", rating: 4, comment: "Great curries and naan bread." },
      {
        user: "Jack",
        rating: 5,
        comment: "Incredible flavors and generous portions.",
      },
    ],
    lat: 28.6139, // Example latitude for New Delhi, India
    long: 77.209, // Example longitude for New Delhi, India
  },
];
