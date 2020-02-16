import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import HeroImage from '../components/HeroImage/HeroImage';

import PostDivStyled from '../components/StyledComponents/PostDivStyled';
import PostH2Styled from '../components/StyledComponents/PostH2Styled';
import PostH4Styled from '../components/StyledComponents/PostH4Styled';
import PostStyled from '../components/StyledComponents/PostStyled';
import PostTextDivStyled from '../components/StyledComponents/PostTextDivStyled';

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const MoreDivStyled = styled.div`
  padding-bottom: 1em;
`;

// const HeroImage = ({ heroImage }) =>
//   heroImage ? <Img fluid={heroImage.childImageSharp.fluid} /> : <div />;

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
  const posts = allPosts.map(({ node }) => {
    // const heroImage = node.frontmatter.heroImage ? (
    //   <Img fluid={node.frontmatter.heroImage.childImageSharp.fluid} />
    // ) : (
    //   <div />
    // );

    return (
      <PostDivStyled key={node.fields.slug}>
        <LinkStyled to={node.fields.slug}>
          <HeroImage heroImage={node.frontmatter.heroImage} />
        </LinkStyled>
        <PostStyled>
          <LinkStyled to={node.fields.slug}>
            <PostH2Styled>{node.frontmatter.title}</PostH2Styled>
            <PostH4Styled>{node.frontmatter.date}</PostH4Styled>
          </LinkStyled>
          <PostTextDivStyled>{node.excerpt}</PostTextDivStyled>
          <MoreDivStyled>
            <LinkStyled to={node.fields.slug}>more...</LinkStyled>
          </MoreDivStyled>
        </PostStyled>
      </PostDivStyled>
    );
  });
  return <div>{posts}</div>;
};

export default IndexPage;
