import { ServiceItem } from '../types';
import { weddingImages } from '../assets/images';

export const servicesData: ServiceItem[] = [
  {
    id: 'planning-coordination',
    title: 'Wedding Planning & Coordination',
    category: 'Full-Service Management',
    shortDescription:
      'Seamless end-to-end planning, timeline management, and dedicated vendor curation for an effortless celebration.',
    detailedDescription:
      'From the preliminary conceptual sketches and budget structuring to day-of run sheets and on-site orchestration, our team oversees every phase with poise and discretion.',
    image: weddingImages.planningDetail,
    imageAlt: 'Calligraphy vow books, wedding stationery flatlay, and floral accents',
    featured: true,
    enquiryMessage: 'I would like to enquire about Wedding Planning & Coordination for our upcoming celebration.',
  },
  {
    id: 'wedding-decoration',
    title: 'Wedding Decoration & Styling',
    category: 'Spatial Design & Florals',
    shortDescription:
      'Architectural floral installations, ambient taper candlelight, and bespoke tablescapes tailored to your venue.',
    detailedDescription:
      'We curate immersive atmospheric environments using seasonal botanical installations, heirloom linens, artisanal dinnerware, and custom lighting schemes.',
    image: weddingImages.decorReception,
    imageAlt: 'Long imperial wedding reception banquet table with white peonies and glowing taper candles',
    featured: true,
    enquiryMessage: 'I would like to enquire about Wedding Decoration & Styling for our wedding venue.',
  },
  {
    id: 'stage-mandap-decoration',
    title: 'Stage & Mandap Decoration',
    category: 'Ceremonial Architecture',
    shortDescription:
      'Regal ceremonial stages and bespoke mandap structures adorned with floral drapery and delicate warm lighting.',
    detailedDescription:
      'A harmonious fusion of tradition and contemporary restraint. Each stage structure is engineered to frame your sacred vows with breathtaking grace.',
    image: weddingImages.mandapStage,
    imageAlt: 'Luxury carved wedding mandap and stage with cascading blush and cream floral garlands',
    featured: true,
    enquiryMessage: 'I would like to enquire about custom Stage & Mandap Decoration.',
  },
  {
    id: 'wedding-photography',
    title: 'Wedding Photography & Cinematography',
    category: 'Visual Keepsakes',
    shortDescription:
      'Editorial, fine-art photographic coverage capturing spontaneous emotion, candid laughter, and heirloom portraits.',
    detailedDescription:
      'Unobtrusive documentary storytelling paired with editorial lighting. We preserve the quiet glances, grand processions, and authentic atmosphere of your wedding day.',
    image: weddingImages.couplePortrait,
    imageAlt: 'Editorial portrait of elegant bride and groom by estate window in natural light',
    featured: true,
    enquiryMessage: 'I would like to enquire about Wedding Photography & Cinematography coverage.',
  },
  {
    id: 'catering-hospitality',
    title: 'Catering & Hospitality Management',
    category: 'Culinary Experiences',
    shortDescription:
      'Curated gastronomy menus, signature champagne towers, and white-glove guest hospitality.',
    detailedDescription:
      'Collaborations with renowned culinary artisans, bespoke mixology menus, and warm, attentive guest coordination from welcome canapés to late-night bites.',
    image: weddingImages.cateringChampagne,
    imageAlt: 'Crystal champagne glass tower with floral garnish and elegant evening banquet setting',
    featured: false,
    enquiryMessage: 'I would like to enquire about Catering & Hospitality Management for our reception.',
  },
  {
    id: 'entertainment-events',
    title: 'Entertainment & Evening Curation',
    category: 'Guest Atmosphere',
    shortDescription:
      'Live string quartets, acoustic cocktail ensembles, curated DJs, and tailored reception lighting programs.',
    detailedDescription:
      'We orchestrate the auditory and emotional journey of your celebration, ensuring each transition—from ceremony prelude to the midnight send-off—flows effortlessly.',
    image: weddingImages.heroBanner,
    imageAlt: 'Outdoor evening celebration with warm festoon lighting and floral arches',
    featured: false,
    enquiryMessage: 'I would like to enquire about Entertainment & Evening Curation for our wedding.',
  },
];
