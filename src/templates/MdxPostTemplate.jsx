import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Template = ({ data }) => {
  const { mdxPostBySlugQuery } = data;
  const { frontmatter, body } = mdxPostBySlugQuery;
  const { heroImage } = frontmatter;
  return (
    <div>
      <Img fluid={heroImage.childImageSharp.fluid} />
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

Template.propTypes = {
  data: PropTypes.shape({
    mdxPostBySlugQuery: PropTypes.shape({
      body: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        heroImage: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({}),
          }),
        }),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Template;

// DON"T USE `useStaticQuery` in queries that need data passed to them...
export const pageQuery = graphql`
  query MdxPostSlugQuery($slug: String!) {
    mdxPostBySlugQuery: mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        heroImage {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
