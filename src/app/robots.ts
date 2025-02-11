import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'], // Add any private paths you want to exclude
    },
    sitemap: 'https://silas-portfolio-liard.vercel.app/sitemap.xml', // Replace with your domain
  }
}