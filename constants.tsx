
import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'eco-ride',
    title: 'EcoRide Mobility',
    category: 'UI/UX Design',
    thumbnail: 'https://picsum.photos/seed/eco/800/600',
    subtitle: 'Sustainable urban mobility solution for European cities.',
    overview: 'EcoRide is a concept app designed to unify electric vehicle rentals across multiple providers in London and Berlin.',
    problem: 'Users struggled with juggling multiple apps to find the nearest available e-scooter or bike, leading to high friction and abandoned trips.',
    role: 'Lead Product Designer (UX Research, UI Design, Prototyping)',
    process: [
      { title: 'Research', description: 'Conducted interviews with 20 frequent commuters in London to map pain points.' },
      { title: 'Ideation', description: 'Developed a unified map interface with real-time API integration for all providers.' },
      { title: 'Design', description: 'Created a high-contrast dark UI optimized for outdoor visibility and quick actions.' }
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Prototyping'],
    outcome: 'A 40% reduction in time-to-booking in user testing sessions compared to existing market solutions.',
    fullImage: 'https://picsum.photos/seed/eco-full/1200/800'
  },
  {
    id: 'zen-finance',
    title: 'ZenFinance',
    category: 'UI/UX • Branding',
    thumbnail: 'https://picsum.photos/seed/zen/800/600',
    subtitle: 'Simplifying personal wealth management for Gen-Z.',
    overview: 'ZenFinance aims to demystify investing through an editorial-style interface and automated savings workflows.',
    problem: 'Traditional banking apps are cluttered with jargon and complex navigation, alienating younger, tech-savvy users.',
    role: 'Senior UI/UX Designer',
    process: [
      { title: 'User Flows', description: 'Simplified the onboarding process to under 2 minutes.' },
      { title: 'Visual Identity', description: 'Developed a calm, navy-blue aesthetic to build trust without being boring.' }
    ],
    tools: ['Figma', 'Principle', 'Adobe After Effects'],
    outcome: 'Increased user engagement by 25% during Beta testing phases.',
    fullImage: 'https://picsum.photos/seed/zen-full/1200/800'
  },
  {
    id: 'aura-skincare',
    title: 'Aura Skincare',
    category: 'Branding • Marketing',
    thumbnail: 'https://picsum.photos/seed/aura/800/600',
    subtitle: 'Premium branding for a sustainable skincare startup.',
    overview: 'Aura is a digital-first skincare brand focusing on transparency and eco-friendly packaging.',
    problem: 'The brand needed to stand out in a saturated market while communicating high-end quality and sustainability.',
    role: 'Graphic Designer & Creative Director',
    process: [
      { title: 'Brand Strategy', description: 'Identified core values: Minimal, Earthy, Professional.' },
      { title: 'Packaging Design', description: 'Designed physical and digital product visuals consistent with the brand ethos.' }
    ],
    tools: ['Adobe Photoshop', 'Illustrator', 'Dimension'],
    outcome: 'Successful launch with 50k+ followers within the first 3 months and high praise for visual identity.',
    fullImage: 'https://picsum.photos/seed/aura-full/1200/800'
  },
  {
    id: 'nexus-ai',
    title: 'Nexus AI Dashboard',
    category: 'UI/UX • Automation',
    thumbnail: 'https://picsum.photos/seed/ai/800/600',
    subtitle: 'Advanced control center for enterprise AI agents.',
    overview: 'A complex dashboard designed for managing large-scale AI automation workflows.',
    problem: 'Enterprise users were overwhelmed by the sheer volume of data and log outputs from their AI fleets.',
    role: 'UX Designer',
    process: [
      { title: 'Information Architecture', description: 'Restructured data hierarchies to prioritize actionable alerts.' },
      { title: 'Automation Integration', description: 'Implemented n8n-style visual nodes for easier workflow mapping.' }
    ],
    tools: ['Figma', 'n8n', 'Tailwind CSS'],
    outcome: 'Internal efficiency improved by 30% for the primary client team.',
    fullImage: 'https://picsum.photos/seed/ai-full/1200/800'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'UI/UX Design',
    description: 'Specializing in high-fidelity web and mobile interfaces that balance aesthetics with user functionality.',
    tags: ['Web Design', 'Mobile UI', 'Wireframing', 'Prototyping']
  },
  {
    id: 's2',
    name: 'Visual & Brand Design',
    description: 'Crafting cohesive brand systems and marketing assets that resonate with international audiences.',
    tags: ['Brand Identity', 'Style Guides', 'Graphic Design', 'Social Media']
  },
  {
    id: 's3',
    name: 'Digital Marketing Design',
    description: 'Creating high-performance visual assets designed specifically for conversion and growth.',
    tags: ['Ad Creatives', 'Landing Pages', 'Email Design']
  },
  {
    id: 's4',
    name: 'Design Automation',
    description: 'Leveraging AI tools and n8n workflows to scale design operations and creative production.',
    tags: ['AI-Assisted Design', 'n8n Workflows', 'Efficiency']
  }
];
