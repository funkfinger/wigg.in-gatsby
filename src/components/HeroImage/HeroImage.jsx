import React from 'react';
import Img from 'gatsby-image';

const HeroImage = ({ heroImage }) => {
  return heroImage ? <Img fluid={heroImage.childImageSharp.fluid} /> : <div />;
};
export default HeroImage;
