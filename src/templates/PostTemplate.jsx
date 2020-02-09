import React from 'react';
import { graphql } from 'gatsby';

const Template = ({ data }) => {
  console.log(data.postBySlugQuery.html);
  const { postBySlugQuery } = data;
  const { frontmatter, html } = postBySlugQuery;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
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
      }
      fields {
        slug
      }
    }
  }
`;
