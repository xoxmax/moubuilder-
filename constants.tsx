
import React from 'react';
import { Project, ProjectCategory, ProjectStatus, NewsItem, Agent } from './types';
import { Building2, Users, HardHat, Zap, ShieldCheck, Layers } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 'm-1',
    slug: 'mou-builders-bashundhara-royal-heights',
    name: 'Mou Royal Heights',
    location: 'Bashundhara Block C, Dhaka',
    block: 'Block C',
    category: ProjectCategory.BASHUNDHARA,
    status: ProjectStatus.ONGOING,
    type: 'Residential',
    clientModel: 'Joint Venture',
    floors: 12,
    units: 24,
    unitSize: '2250 - 2450 sqft',
    parking: 'Double Basement',
    lifts: 3,
    landArea: '10 Katha',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    overviewImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'Mou Royal Heights stands as a beacon of modern luxury in Bashundhara Block C. This project combines Mou Builders signature structural integrity with elite interior finishes.',
    exteriorImages: [
      'https://images.unsplash.com/photo-1460317442991-0ec239f33649?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80'
    ],
    structuralImages: [
      'https://images.unsplash.com/photo-1541888941259-79974df19644?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590674852885-ce146566063b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531834351941-458f12ad27a6?auto=format&fit=crop&w=800&q=80'
    ],
    interiorImages: [
      'https://images.unsplash.com/photo-1600607687940-472f10273751?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6199f7a096?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6f3ea?auto=format&fit=crop&w=800&q=80'
    ],
    materials: [
      { name: 'Scan Cement', brand: 'Grade-A Portland', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80', icon: 'Building2' },
      { name: 'BSRM Extreme', brand: '72.5 Grade TMT', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=81', icon: 'Zap' },
      { name: 'Spanish Marble', brand: 'Elite Series', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=82', icon: 'Layers' },
      { name: 'Berger Luxury', brand: 'Easy Clean', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=83', icon: 'ShieldCheck' }
    ],
    timeline: {
      start: 'Jan 2023',
      milestones: [
        { date: 'Mar 2023', event: 'Excavation Done', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=400&q=80' },
        { date: 'Jun 2023', event: 'Foundation Ready', image: 'https://images.unsplash.com/photo-1541888941259-79974df19644?auto=format&fit=crop&w=400&q=80' },
        { date: 'Oct 2024', event: '12th Floor Slab', image: 'https://images.unsplash.com/photo-1590674852885-ce146566063b?auto=format&fit=crop&w=400&q=80' }
      ],
      completion: 'Dec 2025'
    },
    locationImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
    ],
    viewCount: 3482,
    floorPlanUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    beforeImg: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm-2',
    slug: 'mou-builders-bashundhara-green-view',
    name: 'Mou Green View Residency',
    location: 'Bashundhara Block A, Dhaka',
    block: 'Block A',
    category: ProjectCategory.BASHUNDHARA,
    status: ProjectStatus.COMPLETED,
    type: 'Residential',
    clientModel: 'Own',
    floors: 10,
    units: 18,
    unitSize: '1850 - 2100 sqft',
    parking: 'Ground + Basement',
    lifts: 2,
    landArea: '5 Katha',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80',
    overviewImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    description: 'Mou Green View Residency is our flagship project in Block A. It offers a tranquil environment with premium accessibility.',
    exteriorImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888941259-79974df19644?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    ],
    structuralImages: [
      'https://images.unsplash.com/photo-1541888941259-79974df19644?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590674852885-ce146566063b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531834351941-458f12ad27a6?auto=format&fit=crop&w=800&q=80'
    ],
    interiorImages: [
      'https://images.unsplash.com/photo-1600607687940-472f10273751?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6199f7a096?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6f3ea?auto=format&fit=crop&w=800&q=80'
    ],
    materials: [
      { name: 'Scan Cement', brand: 'Grade-A Portland', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80', icon: 'Building2' },
      { name: 'BSRM Extreme', brand: '72.5 Grade TMT', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=81', icon: 'Zap' },
      { name: 'Spanish Marble', brand: 'Elite Series', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=82', icon: 'Layers' },
      { name: 'Berger Luxury', brand: 'Easy Clean', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=83', icon: 'ShieldCheck' }
    ],
    timeline: {
      start: 'May 2021',
      milestones: [
        { date: 'Dec 2021', event: 'First Floor Casting', image: 'https://images.unsplash.com/photo-1541888941259-79974df19644?auto=format&fit=crop&w=400&q=80' },
        { date: 'Aug 2023', event: 'Finishing Phase', image: 'https://images.unsplash.com/photo-1600607687940-472f10273751?auto=format&fit=crop&w=400&q=80' }
      ],
      completion: 'July 2024'
    },
    locationImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
    ],
    viewCount: 5120,
    floorPlanUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    beforeImg: 'https://images.unsplash.com/photo-1541888941259-79974df19644?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n-1',
    slug: 'mou-builders-royal-heights-structure-complete',
    title: 'Structure Work Completed for Mou Royal Heights – Block C',
    summary: 'Mou Builders is proud to announce that the main structural skeleton of Royal Heights is now complete ahead of schedule.',
    content: 'Mou Builders reached a major milestone today as the roof slab casting for the 12th floor of Royal Heights was successfully completed. This marks the transition from heavy construction to finishing works. We remain committed to our delivery date of December 2025. Our engineering team has ensured 100% compliance with earthquake resistance standards.',
    date: 'Oct 24, 2024',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1541888941259-79974df19644?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888941259-79974df19644?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590674852885-ce146566063b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687940-472f10273751?auto=format&fit=crop&w=800&q=80'
    ],
    relatedProjectId: 'm-1',
    viewCount: 1205
  }
];

export const AGENTS: Agent[] = [
  {
    id: 'a-1',
    name: 'Tanvir Rahman',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80',
    specialization: 'Bashundhara Block A & C Expert',
    phone: '+880 1711-223344',
    email: 'tanvir@moubuilders.com',
    bio: 'With over 10 years of experience in the Bashundhara area, Tanvir knows every block and katha like the back of his hand.',
    isBashundharaExpert: true,
    portfolio: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec239f33649?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'a-2',
    name: 'Nadia Sultana',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80',
    specialization: 'Commercial Real Estate Specialist',
    phone: '+880 1811-334455',
    email: 'nadia@moubuilders.com',
    bio: 'Nadia specializes in strategic commercial placements across Dhaka and Chattogram, helping businesses find their perfect mixed-use hub.',
    isBashundharaExpert: false,
    portfolio: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'a-3',
    name: 'Imran Ahmed',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=80',
    specialization: 'Bashundhara Plot & Block I/L Advisor',
    phone: '+880 1911-445566',
    email: 'imran@moubuilders.com',
    bio: 'Imran focuses on high-value land acquisitions and complex joint ventures in the newer blocks of Bashundhara Residential Area.',
    isBashundharaExpert: true,
    portfolio: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541888941259-79974df19644?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const TRUST_POINTS = [
  'Bashundhara area specialists with deep local knowledge',
  'Nationwide construction capability across all 64 districts',
  '100% legal compliance and transparent documentation',
  'Premium materials and rigorous quality control',
  'Transparent pricing with no hidden costs'
];

export const SERVICES = [
  {
    id: 'land-dev',
    title: 'Own Land Development',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80', // Land/Plot
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=81', // Exterior
      'https://images.unsplash.com/photo-1600607687940-472f10273751?auto=format&fit=crop&w=1200&q=82', // Interior
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=83'  // Night/Extra
    ],
    description: 'Mou Builders buys prime land in Bashundhara, designs ultra-modern structures, and constructs them using grade-A materials for direct unit sales.',
    steps: [
      { title: 'Site Selection', description: 'Vetting prime locations in Bashundhara Blocks A-L.' },
      { title: 'Architectural Excellence', description: 'Functional designs maximizing natural light.' }
    ]
  },
  {
    id: 'joint-venture',
    title: 'Joint Venture Development',
    images: [
      'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80', // Landowner Plot
      'https://images.unsplash.com/photo-1541888941259-79974df19644?auto=format&fit=crop&w=1200&q=81', // Construction
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=82', // Structural
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=83'  // Completed
    ],
    description: 'Partner with Mou Builders. You provide the land, we provide the engineering, legal clearances, construction, and marketing excellence.',
    steps: [
      { title: 'Legal Transparency', description: 'Registered power of attorney and fair unit sharing.' },
      { title: 'Premium Construction', description: 'Bashundhara-standard finishing for maximum resale value.' }
    ]
  },
  {
    id: 'turnkey',
    title: 'Turnkey Construction',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=84',
      'https://images.unsplash.com/photo-1541888941259-79974df19644?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6199f7a096?auto=format&fit=crop&w=1200&q=86'
    ],
    description: 'A zero-headache construction model for private landowners. We handle everything from plan approval to final key handover.',
    steps: [
      { title: 'End-to-End', description: 'From Rajuk approval to interior finish.' },
      { title: 'Fixed Timeline', description: 'Committed delivery dates with no cost overruns.' }
    ]
  }
];

export const MATERIAL_LIST = [
  'BSRM / AKS Extreme Steel',
  'Scan / Holcim Grade-A Cement',
  'RAK / Akij Premium Tiles',
  'Berger Luxury Emulsion',
  'Schneider / MK Electricals'
];
