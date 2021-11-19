const siteMetadata = {
  title: "Sedkode's Blog",
  author: 'Sedky Abou-Shamalah',
  headerTitle: 'Sedkodes',
  description: 'A blog on all things tech, cloud, serverless, and start ups.',
  language: 'en-us',
  siteUrl: 'https://sedky.ca',
  siteRepo: 'https://github.com/sedkis/portfolio-v3',
  siteLogo: '/static/images/s_logo.png',
  image: '/static/images/s_logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'sedky@getserv.io',
  github: 'https://github.com/sedkis',
  twitter: 'https://twitter.com/sedkodes',
  facebook: '',
  youtube: 'https://www.youtube.com/channel/UCXR-k7wwwhdovpXXkRitJ_g',
  linkedin: 'https://www.linkedin.com/in/sedky',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: 'sedkis/portfolio-v3',
      repositoryId: 'R_kgDOGYoFsw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOGYoFs84B_8Nl',
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
