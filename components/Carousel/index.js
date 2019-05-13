import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Carousel extends Component {
  state = {
    isServer: true,
  };

  componentDidMount() {
    this.setState({ isServer: false });
  }

  render() {
    const { isServer } = this.state;

    const { children, sliderSettings, elementRef } = this.props;

    // const Slider = dynamic(import('react-slick'), { ssr: isServer });

    return (
      <Slider ref={elementRef} {...sliderSettings}>
        {children}
      </Slider>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  sliderSettings: PropTypes.object.isRequired,
  elementRef: PropTypes.func,
};

export default Carousel;
