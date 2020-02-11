/* eslint-disable max-len */
// export const logoImageData = {
export default {
  layoutQuery: {
    siteMetadata: {
      title: 'site title',
    },
  },
  seoQuery: {
    siteMetadata: {
      title: 'site title',
      description: 'site description',
      author: '@author',
    },
  },
  gatsbyAstronautPlaceholderImage: {
    childImageSharp: {
      fluid: {
        src: 'gatsby-astronaut.png',
        aspectRatio: 1,
        base64: '',
        sizes: '',
        srcSet: 'gatsby-astronaut.png',
      },
    },
  },
  allPostsQuery: {
    edges: [
      {
        node: {
          excerpt: 'Test post one. :boom: BOOM!',
          fields: {
            slug: '/one/',
          },
          frontmatter: {
            date: '2020-02-01 23:36:04',
            title: 'Test Post 1',
            heroImage: {
              childImageSharp: {
                fluid: {
                  src: 'gatsby-astronaut.png',
                  aspectRatio: 1,
                  base64: '',
                  sizes: '',
                  srcSet: 'gatsby-astronaut.png',
                },
              },
            },
          },
        },
      },
      {
        node: {
          excerpt: 'Test post two. :carrot: BOOM!',
          fields: {
            slug: '/two/',
          },
          frontmatter: {
            date: '2020-02-02 23:35:36',
            title: '💥Test Post 2💥',
            heroImage: {
              childImageSharp: {
                fluid: {
                  src: 'gatsby-astronaut.png',
                  aspectRatio: 1,
                  base64: '',
                  sizes: '',
                  srcSet: 'gatsby-astronaut.png',
                },
              },
            },
          },
        },
      },
      {
        node: {
          excerpt: 'test post 3.',
          fields: {
            slug: '/three/',
          },
          frontmatter: {
            date: '2020-02-03 23:35:51',
            title: 'Test Post 3',
            heroImage: {
              childImageSharp: {
                fluid: {
                  src: 'gatsby-astronaut.png',
                  aspectRatio: 1,
                  base64: '',
                  sizes: '',
                  srcSet: 'gatsby-astronaut.png',
                },
              },
            },
          },
        },
      },
    ],
  },
};
