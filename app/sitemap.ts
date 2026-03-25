import type { MetadataRoute } from 'next';

const routes = [
  '',
  '/search',
  '/how-it-works',
  '/host',
  '/host/list-your-car',
  '/account/trips',
  '/account/messages',
  '/account/wishlist',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://rentatelo-demo.vercel.app${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}
