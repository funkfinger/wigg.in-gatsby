/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const TemplatePure = ({ img, title, date, body }) => {
  // export const TemplatePure = ({ title, date }) => {
  return (
    <div>
      <Img fluid={img} />
      <h1>{title}</h1>
      <h2>{date}</h2>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

TemplatePure.propTypes = {
  // img: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  // body: PropTypes.string.isRequired,
};

const Template = ({
  data: {
    mdxPostBySlugQuery: {
      frontmatter: {
        heroImage: {
          childImageSharp: { fluid },
        },
        title,
        date,
      },
      body,
    },
  },
}) => {
  return <TemplatePure img={fluid} title={title} date={date} body={body} />;
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
