import React from 'react';
import Img from 'gatsby-image';

const HeroImage = ({ heroImage }) => {
  console.log(heroImage);
  return heroImage ? (
    <Img fluid={heroImage.childImageSharp.fluid} />
  ) : (
    <div className="hero-image-holder" />
  );
};
export default HeroImage;
