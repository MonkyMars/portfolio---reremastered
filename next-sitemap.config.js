/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://www.levinoppers.nl',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*', '/private/*'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.levinoppers.nl/server-sitemap.xml',
      ],
    },
  }
  
  module.exports = config