import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const HeroImage = ({ heroImage }) => {
  return heroImage ? (
    <Img fluid={heroImage.childImageSharp.fluid} />
  ) : (
    <div className="hero-image-holder" />
  );
};

HeroImage.propTypes = {
  heroImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}).isRequired,
    }),
  }),
};

HeroImage.defaultProps = {
  heroImage: null,
};

export default HeroImage;
