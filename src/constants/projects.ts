export interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  category: string;
  image: string;
  year?: string;
  area?: string;
  philosophy?: string;
  materials?: string[];
  testimonial?: {
    text: string;
    author: string;
  };
  gallery?: string[];
}

export const ALL_PROJECTS: Project[] = [
  { 
    id: 1, 
    slug: 'corporate-workspaces',
    title: 'Corporate Workspaces', 
    location: 'Hyderabad', 
    category: 'Corporate', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop',
    year: '2025',
    area: '2,00,000+ sqft',
    philosophy: 'Led master planning and large-scale layout strategies for Fortune 500 and technology occupiers, delivering integrated architecture and interior design solutions focused on efficiency, flexibility, and user-centric environments — in collaboration with multidisciplinary MEP, structure, and landscape teams.',
    materials: ['Acoustic Panels', 'Architectural Glass', 'Engineered Wood', 'Polished Concrete'],
    testimonial: {
      text: "Vistara Atelier translated our complex personality into a physical space that feels both expansive and intimate. Their attention to material transition is unparalleled.",
      author: "Aditi & Rahul Mehta"
    },
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2670&auto=format&fit=crop'
    ]
  },
  { 
    id: 2, 
    slug: 'research-park',
    title: 'Greenfield Research Park', 
    location: 'Hyderabad', 
    category: 'Master Planning', 
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',
    year: '2024',
    philosophy: 'Campus visioning, zoning, and circulation frameworks for a greenfield research and innovation campus. Supported by massing studies and sustainability-driven planning strategies designed for long-term growth.',
    materials: ['Terracotta Tiles', 'Reclaimed Teak', 'Exposed Brick', 'Hand-cut Granite'],
    testimonial: {
      text: "Living here feels like being in a continuous conversation with nature. The way light moves through the courtyard determines the rhythm of our day.",
      author: "Dr. K. Venkatesh"
    },
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2653&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1887&auto=format&fit=crop'
    ]
  },
  { 
    id: 3, 
    slug: 'incubation-facility',
    title: 'Incubation Facility', 
    location: 'Hyderabad', 
    category: 'Corporate', 
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop',
    year: '2024',
    philosophy: 'Full project lifecycle delivery — concept through execution — covering layouts, BOQs, material specifications, and on-site coordination to ensure design consistency and delivery rigour.',
    materials: ['Thassos Marble', 'White Oak', 'Opal Glass', 'Lime Plaster'],
    testimonial: {
      text: "The serenity of this home is something I've never experienced before. It's not just a house; it's a sanctuary.",
      author: "Sanjay Kapoor"
    }
  },
  { 
    id: 4, 
    slug: 'luxury-residential',
    title: 'Luxury Residential', 
    location: 'Hyderabad', 
    category: 'Residential', 
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1887&auto=format&fit=crop',
    philosophy: 'Bespoke interiors with tailored space planning, curated material palettes, and custom joinery — balancing refined aesthetics with the way each family actually lives. Delivered for high-net-worth clients in Hyderabad’s premium residential corridors.',
    materials: ['Italian Marble', 'Smoked Oak', 'Brushed Aluminum', 'Micro-concrete']
  },
  { 
    id: 5, 
    slug: 'airport-lounges',
    title: 'Airport Lounges', 
    location: 'RGIA Airport, Hyderabad', 
    category: 'Aviation', 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    philosophy: 'Premium lounge environments for international and domestic terminals — spatial planning, passenger flow optimisation, and detailed hospitality-grade interiors under complex operational and regulatory requirements.'
  },
  { 
    id: 11, 
    slug: 'urban-bistro',
    title: 'Urban Bistro', 
    location: 'Hitech City, Hyderabad', 
    category: 'Hospitality', 
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop',
    philosophy: 'Concept-to-completion design for a modern QSR. Spatial storytelling, guest flow optimisation, and operational integration for a high-intensity urban location.',
    materials: ['Corrugated Steel', 'Velvet Upholstery', 'Neon Accents', 'Polished Concrete']
  },
  { 
    id: 12, 
    slug: 'artisan-cafe',
    title: 'The Artisan Cafe', 
    location: 'Jubilee Hills, Hyderabad', 
    category: 'Hospitality', 
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2670&auto=format&fit=crop',
    philosophy: 'A boutique hospitality interior where spatial intelligence meets brand storytelling. Curated material palettes for a discerning F&B operator.'
  }
];

