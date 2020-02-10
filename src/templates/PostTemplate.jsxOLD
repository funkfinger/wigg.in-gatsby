import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Template = ({ data }) => {
  const { postBySlugQuery } = data;
  const { frontmatter, html } = postBySlugQuery;
  const { heroImage } = frontmatter;
  return (
    <div>
      <Img fluid={heroImage.childImageSharp.fluid} />
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

Template.propTypes = {
  data: PropTypes.shape({
    postBySlugQuery: PropTypes.shape({
      html: PropTypes.string.isRequired,
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
  query PostSlugQuery($slug: String!) {
    postBySlugQuery: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
