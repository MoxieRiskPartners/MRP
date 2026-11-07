import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // HOMEPAGE
    {
      url: 'https://moxieriskpartners.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    // MAIN NAVIGATION PAGES
    {
      url: 'https://moxieriskpartners.com/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://moxieriskpartners.com/contact-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://moxieriskpartners.com/coverage-options',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://moxieriskpartners.com/quote-form',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: 'https://moxieriskpartners.com/file-claims',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://moxieriskpartners.com/file-claim',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://moxieriskpartners.com/faq-page',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // INDUSTRY PAGES
    {
      url: 'https://moxieriskpartners.com/trucking-transportation',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://moxieriskpartners.com/construction-coverage',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://moxieriskpartners.com/manufacturing-coverage',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://moxieriskpartners.com/non-profit',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://moxieriskpartners.com/public-entity',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // COVERAGE TYPE PAGES
    {
      url: 'https://moxieriskpartners.com/commercial-auto-liability',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://moxieriskpartners.com/physical-damage',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://moxieriskpartners.com/motor-truck-cargo',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://moxieriskpartners.com/owner-operator',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'https://moxieriskpartners.com/workers-compensation',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // CAPTIVE INSURANCE
    {
      url: 'https://moxieriskpartners.com/captives-benefit',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // LEGAL/COMPLIANCE PAGES
    {
      url: 'https://moxieriskpartners.com/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://moxieriskpartners.com/terms-service',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
