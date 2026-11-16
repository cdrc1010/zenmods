// Replace the null values below with verified shop details before going public.
export const shop = {
  name: "ZenMods",
  tagline: "Make every ride yours.",
  facebookUrl: null,
  phone: null,
  address: null,
  openingHours: null,
  mapsUrl: null,
};

// AI-generated accessory concepts, not actual ZenMods builds or fitment claims.
export const photos = [
  {
    src: `${import.meta.env.BASE_URL}images/nmax-accessories.png`,
    title: "Dialed in. Every detail.",
    category: "NMAX / Accessory concept",
    alt: "Illustrative NMAX concept with custom wheels, suspension, windshield, mirrors, and accessories",
  },
  {
    src: `${import.meta.env.BASE_URL}images/aerox-accessories.png`,
    title: "Built around your style.",
    category: "Aerox / Accessory concept",
    alt: "Illustrative Aerox concept with bronze alloy wheels, reservoir suspension, compact exhaust, carbon-look trim, and accessories",
  },
  {
    src: `${import.meta.env.BASE_URL}images/fazzio-accessories.png`,
    title: "Classic look. Extra character.",
    category: "Fazzio / Accessory concept",
    alt: "Illustrative Fazzio concept with custom saddle, wheels, windshield, racks, and luggage accessories",
  },
];

// Proposed service categories. Confirm these with the shop owner.
export const services = [
  {
    icon: "wrench",
    number: "01",
    title: "Maintenance & care",
    description:
      "Keep your everyday ride feeling right. Ask about oil changes, inspections, and routine care.",
    tag: "Keep it running",
  },
  {
    icon: "settings",
    number: "02",
    title: "Parts & upgrades",
    description:
      "Find the next piece of your setup. Explore parts and accessories that suit your motorcycle.",
    tag: "Find your fit",
  },
  {
    icon: "sparkles",
    number: "03",
    title: "Style & customization",
    description:
      "A ride with a little more you. Talk through your ideas for your motorcycle’s next look.",
    tag: "Make it yours",
  },
];
