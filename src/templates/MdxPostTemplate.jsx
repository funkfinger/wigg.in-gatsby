/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import HeroImage from '../components/HeroImage/HeroImage';

import PostDivStyled from '../components/StyledComponents/PostDivStyled';
import PostH2Styled from '../components/StyledComponents/PostH2Styled';
import PostH4Styled from '../components/StyledComponents/PostH4Styled';
import PostTextDivStyled from '../components/StyledComponents/PostTextDivStyled';
import PostStyled from '../components/StyledComponents/PostStyled';

export const TemplatePure = ({ img, title, date, body }) => {
  // export const TemplatePure = ({ title, date }) => {
  return (
    <PostDivStyled className="post-container single-post">
      <HeroImage className="hero-image" heroImage={img} />
      <PostStyled className="post">
        <PostH2Styled className="post-title">{title}</PostH2Styled>
        <PostH4Styled className="post-date">{date}</PostH4Styled>
        <PostTextDivStyled className="post-content">
          <MDXRenderer>{body}</MDXRenderer>
        </PostTextDivStyled>
      </PostStyled>
    </PostDivStyled>
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
        heroImage,
        // heroImage: {
        //   childImageSharp: { fluid },
        // },
        title,
        date,
      },
      body,
    },
  },
}) => {
  return <TemplatePure img={heroImage} title={title} date={date} body={body} />;
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
