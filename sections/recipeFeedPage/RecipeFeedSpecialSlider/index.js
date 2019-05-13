import React, { Component } from 'react';

import Carousel from '../../../components/Carousel';
import RecipeCard from '../../../components/RecipeCard';

import { StyledSection, PrevArrow, NexttArrow } from './style';

import { icons } from '../../../utils/ui/icons';

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '120px',
  touchThreshold: 10,
  prevArrow: <PrevArrow>{icons.prevArrow}</PrevArrow>,
  nextArrow: <NexttArrow>{icons.nextArrow}</NexttArrow>,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '100px',
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerPadding: '80px',
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: '50px',
        arrows: false,
      },
    },
  ],
};

const recipesData = [
  {
    id: 0,
    title: 'Starters for summer',
    thumbnailImageSrc: '/static/images/test.jpg',
    authorName: 'Al.Ta.Cucina',
  },
  {
    id: 1,
    title: 'Starters for summer',
    thumbnailImageSrc: '/static/images/test.jpg',
    authorName: 'Al.Ta.Cucina',
  },
  {
    id: 2,
    title: 'Starters for summer',
    thumbnailImageSrc: '/static/images/test.jpg',
    authorName: 'Al.Ta.Cucina',
  },
  {
    id: 3,
    title: 'Starters for summer',
    thumbnailImageSrc: '/static/images/test.jpg',
    authorName: 'Al.Ta.Cucina',
  },
  {
    id: 4,
    title: 'Starters for summer',
    thumbnailImageSrc: '/static/images/test.jpg',
    authorName: 'Al.Ta.Cucina',
  },
  {
    id: 5,
    title: 'Starters for summer',
    thumbnailImageSrc: '/static/images/test.jpg',
    authorName: 'Al.Ta.Cucina',
  },
];

class RecipeFeedSpecialSlider extends Component {
  render() {
    return (
      <StyledSection>
        <div className="specialSliderInner">
          <div className="specialSliderTitle">Speciale Capodanno</div>

          <div className="specialSliderDescription">
            Easy to cook and super healthy. For all the health conscious people
            out there who don’t have time to prepare lunch.
          </div>

          <div className="specialCarousel">
            <Carousel sliderSettings={sliderSettings}>
              {recipesData.map(item => (
                <div key={item.id}>
                  <RecipeCard
                    title={item.title}
                    thumbnailImageSrc={item.thumbnailImageSrc}
                    authorName={item.authorName}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </StyledSection>
    );
  }
}

export default RecipeFeedSpecialSlider;
