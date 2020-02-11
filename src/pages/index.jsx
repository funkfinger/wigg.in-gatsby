/*
import React from 'react';
import { Link } from 'gatsby';
import { HelmetProvider } from 'react-helmet-async';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <HelmetProvider>
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </HelmetProvider>
);

export default IndexPage;
*/

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { HelmetProvider } from 'react-helmet-async';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AllPostsQuery {
      allPostsQuery: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              heroImage {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const allPosts = data.allPostsQuery.edges;
  const posts = allPosts.map(({ node }) => (
    <div key={node.fields.slug}>
      <Link to={node.fields.slug}>
        <Img fluid={node.frontmatter.heroImage.childImageSharp.fluid} />
      </Link>
      <h2>{node.frontmatter.title}</h2>
      <h4>{node.frontmatter.date}</h4>
      <div>{node.excerpt}</div>
    </div>
  ));
  return (
    <HelmetProvider>
      <div>{posts}</div>
    </HelmetProvider>
  );
};

export default IndexPage;
