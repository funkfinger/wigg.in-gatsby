const emoji = require('remark-emoji');

const imageMaxWidth = 1000;
module.exports = {
  siteMetadata: {
    title: 'wigg.in',
    description: 'Jay Wiggins, trying to remember',
    author: '@jaywiggins',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Sacramento', 'Open Sans', 'Roboto:300,400'],
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet-async',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'wigg.in',
        short_name: 'wigg.in',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/ramen.svg', // This path is relative to the root of the site.
      },
    },

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        remarkPlugins: [emoji],
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          // {
          //   resolve: 'gatsby-remark-embed-gist',
          //   options: {
          //     username: 'funkfinger',
          //     includeDefaultCss: false,
          //   },
          // },

          // {
          //   resolve: 'gatsby-remark-prismjs',
          //   options: {
          //     classPrefix: 'language-',
          //     inlineCodeMarker: null,
          //     aliases: {},
          //     showLineNumbers: false,
          //     noInlineHighlight: false,
          //     languageExtensions: [
          //       {
          //         language: 'superscript',
          //         extend: 'javascript',
          //         definition: {
          //           superscript_types: /(SuperType)/,
          //         },
          //         insertBefore: {
          //           function: {
          //             superscript_keywords: /(superif|superelse)/,
          //           },
          //         },
          //       },
          //     ],
          //     prompt: {
          //       user: 'root',
          //       host: 'localhost',
          //       global: false,
          //     },
          //     escapeEntities: {},
          //   },
          // },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: imageMaxWidth,
            },
          },
          {
            // see https://github.com/matchilling/gatsby-remark-emojis for options
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: 'emoji-icon',
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
