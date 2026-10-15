/**
 * Central content model for the Spandan kinetic-flooring site.
 * All technical figures are drawn from the project's design / prototype
 * documentation and are labelled as design or prototype values where relevant.
 */

export const brand = {
  name: "KARM",
  tagline: "Kinetic Energy Systems",
  microStatement:
    "Kinetic Energy Harvesting • Smart Flooring • Modular Infrastructure",
  footerLine: "Kinetic Energy • Smart Infrastructure • Sustainable Systems",
};

/* ---- Landing (entry) page — shown at "/" before the full site at "/home" ---- */
export const landing = {
  eyebrow: "KARM — Kinetic Energy Systems",
  title: ["Take a step", "towards sustainable energy."],
  sub: "Every footstep carries a small amount of untapped power. These tiles turn ordinary floors into a quiet, continuous source of renewable energy.",
  cta: { label: "Enter KARM", href: "/home" },
  hint: "Tap to begin",
};

export const nav = [
  { label: "What We Offer", href: "#problem" },
  { label: "Our Team", href: "#team" },
  { label: "Applications", href: "#applications" },
  { label: "Partner", href: "#roadmap" },
];

/* ---- Section 1: Hero ---- */
export const hero = {
  eyebrow: "Karm Energy Returns",
  title: ["STEP.POWER.","ENGAGE.IMPACT."],
  sub: "KARM turns everyday footsteps into power, and power into attention. Our kinetic tiles turn foot traffic into electricity and power a built-in LED display, so your message is carried by the very people it reaches. KARM turns campaigns, events, CSR commitments and games into experiences people step into, not just walk past it.",
  flow: ["Step", "Harvest", "Convert", "Store"],
  ctaPrimary: { label: "See what KARM offers", href: "#problem" },
  ctaSecondary: { label: "Partner with us", href: "#contact" },
};

/* ---- Section 2: What KARM Offers (key kept as `problem` so Problem.tsx keeps working) ---- */
export const problem = {
  eyebrow: "What KARM Offers",
  title: "Four ways to turn footsteps into impact.",
  cards: [
    {
      id: "01",
      title: "Brand Campaigns",
      tagline: "Advertising that runs on footfall.",
      body: "Your message, lit up wherever people walk. Choose your spot, choose your time, and pay only for that.",
    },
    {
      id: "02",
      title: "CSR & ESG Programs",
      tagline: "Sustainability that people can see.",
      body: "Own the tiles or subscribe to them. We handle the deployment, your story goes on the display, and people see your sustainability commitment in action every day.",
    },
    {
      id: "03",
      title: "Public Events",
      tagline: "Events powered by the crowd.",
      body: "At concerts and festivals, the audience becomes the power source. The bigger the crowd, the bigger the impact.",
    },
    {
      id: "04",
      title: "Gaming & Interactive Experiences",
      tagline: "Games you play with your feet.",
      body: "Games that run entirely on footsteps. Step on the tile, and the play begins.",
    },
  ],
};

/* ---- Section 3: Solution — conversion stack ---- */
export const solution = {
  eyebrow: "The solution",
  title: "The floor becomes part of the energy system.",
  lead: "A modular kinetic tile sits inside a hexagonal floor grid. Each footstep drives a mechanical chain that ends in regulated, storable DC.",
  stack: [
    { label: "Footstep", note: "Vertical displacement of the tile surface." },
    {
      label: "Mechanical transmission",
      note: "Captures and directs the motion.",
    },
    { label: "Planetary gear", note: "Steps low-speed motion up to high RPM." },
    {
      label: "AFPM generator",
      note: "Axial-flux machine produces 3-phase AC.",
    },
    { label: "3-phase AC", note: "High-frequency alternating output." },
    { label: "Rectifier", note: "Full-bridge rectification to DC." },
    { label: "Buck converter", note: "Synchronous regulation to stable DC." },
    { label: "Energy storage", note: "Battery or supercapacitor." },
  ],
};

/* ---- Section 4: How it works ---- */
export const howItWorks = {
  eyebrow: "From footfall to usable power",
  title: "Six stages, one continuous chain.",
  steps: [
    {
      id: "01",
      title: "Capture",
      body: "Mechanical displacement from a footstep is captured by the tile mechanism.",
    },
    {
      id: "02",
      title: "Amplify",
      body: "A planetary gear mechanism converts low-speed footstep motion into higher-speed rotation. Design documentation indicates speeds up to approximately 3,300 RPM.",
    },
    {
      id: "03",
      title: "Generate",
      body: "An Axial Flux Permanent Magnet (AFPM) generator converts mechanical rotation into three-phase electrical energy.",
    },
    {
      id: "04",
      title: "Rectify",
      body: "The three-phase AC is converted to DC through a full-bridge rectifier and smoothing-capacitor stage.",
    },
    {
      id: "05",
      title: "Regulate",
      body: "An LTC3703-5 synchronous buck stage steps the fluctuating high-voltage input down to stable low-voltage DC.",
    },
    {
      id: "06",
      title: "Store",
      body: "Regulated output is directed toward a 12 V battery or other suitable storage architecture.",
    },
  ],
};

/* ---- Section 5: Engineering ---- */
export const engineering = {
  eyebrow: "System architecture",
  title: "Engineered as a system. Not just a tile.",
  lead: "Spandan is a full mechanical-to-electrical energy chain — closer to a distributed generator network than to simple piezoelectric floor pads.",
  domains: [
    {
      key: "Mechanical",
      items: [
        "Modular kinetic mechanism",
        "Planetary gear transmission",
        "Low-speed to high-speed conversion",
      ],
    },
    {
      key: "Electrical",
      items: [
        "8-pole, 9-coil AFPM generator",
        "Three-phase rectification",
        "DC regulation",
        "Battery / supercapacitor storage",
      ],
    },
    {
      key: "Power electronics",
      items: [
        "LTC3703-5 synchronous buck",
        "SI7850DP MOSFET switching stage",
        "Input and output filtering",
      ],
    },
    {
      key: "Sensing",
      items: [
        "Force / load sensing",
        "Environmental sensing",
        "Electrical power monitoring",
      ],
    },
  ],
  monitoringNote:
    "For electrical monitoring, an INA219 can measure bus voltage, current and power through a high-side configuration and report digitally over I²C. It is an enabling monitoring component — not the product itself.",
};

/* ---- Section 6: Smart tile ---- */
export const smartTile = {
  eyebrow: "The smart tile",
  title: "The floor can do more than generate power.",
  lead: "Each tile can act as a distributed node with three layers of capability. This is an extensible architecture — not every deployed tile must carry every sensor.",
  layers: [
    {
      key: "Mechanical",
      role: "Structure & motion",
      body: "The kinetic mechanism that captures footstep energy.",
    },
    {
      key: "Electrical",
      role: "Generation & conversion",
      body: "Generator, rectifier and regulator producing usable DC.",
    },
    {
      key: "Data",
      role: "Sensing & monitoring",
      body: "Optional sensing and power monitoring across the grid.",
    },
  ],
  dimensions: [
    { key: "Energy", body: "Measure electrical generation and consumption." },
    {
      key: "Activity",
      body: "Detect footfall, load and mechanical interaction.",
    },
    {
      key: "Environment",
      body: "Measure environmental parameters where required.",
    },
  ],
  chain: ["Footstep", "Force data", "Energy generated", "System status"],
};

/* ---- Section 7: Modularity ---- */
export const modularity = {
  eyebrow: "Scale",
  title: "One tile is a node. A floor is a network.",
  lead: "Because the architecture is modular, the system can scale from individual demonstration tiles to larger flooring installations.",
  steps: [
    { count: "1", unit: "tile", note: "A single demonstration node." },
    {
      count: "10",
      unit: "tiles",
      note: "A pilot cluster in a controlled area.",
    },
    {
      count: "100+",
      unit: "tiles",
      note: "A high-traffic corridor or entrance.",
    },
    {
      count: "Zone",
      unit: "network",
      note: "An entire high-traffic zone as one grid.",
    },
  ],
};

/* ---- Section 8: Applications ---- */
export const applications = {
  eyebrow: "Where it fits",
  title: "Built for places where people move.",
  cards: [
    {
      name: "Airports",
      use: "High footfall, long dwell times and visible sustainability.",
    },
    {
      name: "Shopping malls",
      use: "Heavy pedestrian traffic and interactive customer experience.",
    },
    {
      name: "Metro & rail stations",
      use: "Dense, repetitive footfall across concourses and platforms.",
    },
    {
      name: "Universities",
      use: "Demonstration infrastructure and student engagement.",
    },
    {
      name: "Stadiums & arenas",
      use: "Concentrated surges of movement around events.",
    },
    {
      name: "Corporate offices",
      use: "Distributed sensing plus a tangible sustainability story.",
    },
    {
      name: "Exhibition centers",
      use: "Rotating, high-density crowds and showcase potential.",
    },
    {
      name: "Smart buildings",
      use: "Energy harvesting layered onto sensing infrastructure.",
    },
  ],
};

/* ---- Section 9: Business value ---- */
export const businessValue = {
  eyebrow: "The business case",
  title: "Why would a building install it?",
  lead: "The value extends well beyond watts. Spandan adds an energy, sensing and engagement layer to floors that were previously inert.",
  cards: [
    {
      key: "Energy harvesting",
      body: "Recover a portion of mechanical energy that a conventional floor would dissipate.",
    },
    {
      key: "Smart infrastructure",
      body: "Add sensing and monitoring capability to the built environment.",
    },
    {
      key: "Engagement",
      body: "Turn sustainability into something people can physically see and interact with.",
    },
    {
      key: "Data",
      body: "Generate information about activity, energy generation and system performance.",
    },
  ],
};

/* ---- Section 10: Prototype / validation ---- */
export const prototype = {
  eyebrow: "Engineering validation",
  title: "From concept to working system.",
  lead: "The power-conversion chain has been modelled and specified at component level — from three-phase generator input through to regulated 12 V storage.",
  chain: [
    "3-phase input",
    "Rectification",
    "Filtering",
    "Synchronous buck",
    "12 V storage",
  ],
  params: [
    {
      value: "~3,300",
      unit: "RPM",
      note: "Maximum modelled design rotational speed",
    },
    {
      value: "3-phase",
      unit: "8-pole / 9-coil",
      note: "AFPM generator architecture",
    },
    { value: "12", unit: "V DC", note: "Target regulated storage output" },
    {
      value: "~50",
      unit: "W",
      note: "Prototype / design transient generation figure",
    },
  ],
  // Component reference for the schematic — values taken from the EMG box design doc.
  components: [
    {
      ref: "V1–V3",
      part: "3-phase AC source",
      detail: "Modelled 85 V RMS, 90 Hz generator input",
    },
    {
      ref: "D1–D6",
      part: "Bridge rectifier",
      detail: "Full-wave three-phase rectification",
    },
    { ref: "C1", part: "470 µF", detail: "Input smoothing / ripple filter" },
    { ref: "U1", part: "LTC3703-5", detail: "Synchronous buck controller" },
    { ref: "M1 / M2", part: "SI7850DP", detail: "Synchronous MOSFET switches" },
    { ref: "L1", part: "33 µH", detail: "Output inductor (~500 kHz)" },
    { ref: "V4", part: "12 V battery", detail: "Energy storage target" },
  ],
  disclaimer:
    "Figures shown are prototype and design-stage values from project documentation, presented for engineering context — not guaranteed commercial specifications.",
};

/* ---- Section 11: Roadmap ---- */
export const roadmap = {
  eyebrow: "From prototype to infrastructure",
  title: "A staged path to deployment.",
  steps: [
    {
      id: "01",
      title: "Prototype",
      body: "Validate mechanical energy harvesting and electrical conversion end to end.",
    },
    {
      id: "02",
      title: "Pilot",
      body: "Deploy a small number of tiles in a controlled high-footfall environment.",
    },
    {
      id: "03",
      title: "Data",
      body: "Measure footfall, energy generation, reliability and system performance.",
    },
    {
      id: "04",
      title: "Scale",
      body: "Develop installation-ready modular flooring systems for commercial environments.",
    },
  ],
};

/* ---- Section 12: Final CTA ---- */
export const finalCta = {
  title: ["Let's build the floor", "of the future."],
  body: "We're looking to collaborate with infrastructure operators, smart-building companies, sustainability teams and technology partners to pilot kinetic flooring in real-world environments.",
  ctaPrimary: {
    label: "Discuss a pilot",
    href: "mailto:partners@Spandan-kinetic.example?subject=Kinetic%20flooring%20pilot",
  },
  ctaSecondary: {
    label: "Contact the team",
    href: "mailto:hello@Spandan-kinetic.example",
  },
};

export const footer = {
  columns: [
    { label: "What We Offer", href: "#problem" },
    { label: "Our Team", href: "#team" },
    { label: "Applications", href: "#applications" },
    { label: "Contact", href: "#contact" },
  ],
};