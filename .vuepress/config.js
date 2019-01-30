module.exports = {
  title: 'Design Process by Netguru', // Page title
  description: 'Live E-Book with useful informations about Design Process',
  theme: 'live-ebook', // Important! This is the name of this theme
  base: '/', // Base URL, leave as is if you don't serve the book from a folder
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  ga: 'UA-259047-66', // Google Analytics ID
  themeConfig: {
    bookTitle: 'Design Process for pros', // Book title
    baseUrl: 'https://design-process.netguru.co', // Used for sharing in social media and for meta tags
    exitUrl: 'https://www.netguru.co/design-process',
    company: {
      name: 'Netguru',
      url: 'https://www.netguru.co',
      logo: '/images/netguru.svg'
    },
    twitter: 'netguru',
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
}
