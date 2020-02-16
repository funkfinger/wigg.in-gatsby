import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PostDivStyled = styled.div`
  border: 1px rgba(0, 0, 0, 0.25) solid;
  margin-bottom: 2em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;

const PostTextDivStyle = styled.div`
  padding: 0.5em 2em;
`;

const PostListH2Styled = styled.h2`
  margin: 0;
  padding: 0.25em 0em 1em 0em;
  margin-bottom: -1.1em;
  font-family: 'Sacramento', sans-serif;
  font-size: 2.8em;
  font-weight: normal;
  text-align: center;
  color: #e88d67;
  &: {
    text-decoration: none;
  }
  @media screen and (max-width: 800px) {
    font-size: 2.2em;
  }
  @media screen and (max-width: 600px) {
    font-size: 2em;
  }
`;

const PostListH4Styled = styled.h4`
  margin: 0;
  padding: 0;
  padding-bottom: 8px;
  font-size: 16px;
  color: #bb999c;
  text-align: center;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const PostListExcerptDivStyled = styled.div`
  padding: 1em 0;
  font-size: 1.4em;
`;

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
    <PostDivStyled key={node.fields.slug}>
      <LinkStyled to={node.fields.slug}>
        <Img fluid={node.frontmatter.heroImage.childImageSharp.fluid} />
        <PostTextDivStyle>
          <PostListH2Styled>{node.frontmatter.title}</PostListH2Styled>
          <PostListH4Styled>{node.frontmatter.date}</PostListH4Styled>
          <PostListExcerptDivStyled>{node.excerpt}</PostListExcerptDivStyled>
        </PostTextDivStyle>
      </LinkStyled>
    </PostDivStyled>
  ));
  return <div>{posts}</div>;
};

export default IndexPage;
