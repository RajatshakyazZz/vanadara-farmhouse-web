/**
 * VARANADAH THE FARMSTAY
 * Business and Site Configuration
 * 
 * Centralized settings for all placeholders, contacts, WhatsApp, and location parameters.
 * Modify these values to reflect the live property details.
 */

export const siteConfig = {
  brand: {
    name: "VARANADAH",
    subName: "THE FARMSTAY",
    tagline: "Breath. Unwind. Rejoice.",
    experiencePhilosophy: "PAUSE → BREATHE → CONNECT → REJOICE",
    heroHeading: "Where Every Sunrise Tells a Story",
    heroSubtext:
      "A peaceful farmhouse retreat surrounded by mountain views, open skies and the simple joy of slowing down.",
  },

  // Contact & Booking (Configurable placeholders)
  contact: {
    // Replace with the owner's WhatsApp number in international format (e.g., "919876543210")
    whatsappNumber: "91XXXXXXXXXX",
    whatsappDefaultMessage:
      "Hello Varanadah Team, I would like to enquire about staying at your farmhouse retreat.",
    phoneDisplay: "+91 [Contact Number]",
    phoneRaw: "+910000000000",
    email: "enquiries@varanadah.com",
    instagramHandle: "@varanadahfarmstay",
    instagramUrl: "https://instagram.com/varanadahfarmstay",
    facebookUrl: "https://facebook.com/varanadahfarmstay",
  },

  // Location details (Configurable placeholders)
  location: {
    regionName: "Western Ghats Foothills",
    nearestVillage: "Quiet Countryside Village",
    stateCountry: "India",
    addressPlaceholder: "[Scenic Countryside Valley, Village Rd, Near Mountain Viewpoint]",
    googleMapsEmbedUrl: "", // Optional Google Maps embed iframe src
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Varanadah+Farmstay+Retreat",
    distances: [
      { label: "Nearest City Airport", value: "Approx. 2.5 hrs scenic drive" },
      { label: "Nearest Railway Station", value: "Approx. 1 hr 15 mins" },
      { label: "Highway Access", value: "12 km off State Highway" },
      { label: "Altitude & Climate", value: "Cool mountain breezes, 22°C - 28°C" },
    ],
  },

  // Stay Amenities & Architectural highlights
  stayDetails: {
    checkInTime: "01:00 PM",
    checkOutTime: "11:00 AM",
    features: [
      "Signature L-shaped architectural layout",
      "Expansive wooden & stone wrap-around verandah",
      "Traditional Mangalore terracotta tiled roof",
      "Panoramic sunrise & mountain valley views",
      "Open-air campfire pit & night stargazing",
      "Authentic desi delicacies & city-style cuisine",
      "Lush organic gardens and peaceful walking trails",
      "Airy sunlit rooms with clean contemporary bathrooms",
    ],
  },

  navigation: [
    { label: "Experience", href: "#experience" },
    { label: "The Verandah", href: "#verandah" },
    { label: "Stay", href: "#stay" },
    { label: "Food", href: "#food" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
  ],
};

export type SiteConfig = typeof siteConfig;
