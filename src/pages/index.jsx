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
