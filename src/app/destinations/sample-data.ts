import type { Destination } from './card';

// Fallback data for when the backend dev server (port 8000) is not running.
export const SAMPLE_DESTINATIONS: Destination[] = [
  {
    id: 1,
    name: 'Bali Paradise',
    country: 'Nepal',
    category: 'Beach',
    price: 2700,
    duration: '7 Days/6 Nights',
    rating: 4.5,
    image: '/images/destinations/image1.png',
  },
  {
    id: 2,
    name: 'Maldives Overwater Escape',
    country: 'Maldives',
    category: 'Beach',
    price: 3200,
    duration: '6 Days/5 Nights',
    rating: 4.7,
    image: '/images/destinations/image2.png',
  },
  {
    id: 3,
    name: 'Highland Adventure',
    country: 'Nepal',
    category: 'Adventure',
    price: 2100,
    duration: '10 Days/9 Nights',
    rating: 4.6,
    image: '/images/destinations/image3.png',
  },
  {
    id: 4,
    name: 'Machu Picchu Trek',
    country: 'Peru',
    category: 'Mountain',
    price: 1800,
    duration: '8 Days/7 Nights',
    rating: 4.8,
    image: '/images/destinations/image4.png',
  },
  {
    id: 5,
    name: 'Turquoise Lagoon Retreat',
    country: 'Australia',
    category: 'Beach',
    price: 2400,
    duration: '6 Days/5 Nights',
    rating: 4.6,
    image: '/images/destinations/image5.png',
  },
  {
    id: 6,
    name: 'Desert Canyon Sunset',
    country: 'United States',
    category: 'Cultural',
    price: 1500,
    duration: '5 Days/4 Nights',
    rating: 4.4,
    image: '/images/destinations/image6.png',
  },
];

export function findSampleDestination(id: string): Destination | undefined {
  return SAMPLE_DESTINATIONS.find(destination => String(destination.id) === id);
}
