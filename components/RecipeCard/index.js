import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import IconButton from '../IconButton';
import VideoThumbnail from '../VideoThumbnail';

import { StyledCard } from './style';

import { icons } from '../../utils/ui/icons';

const RecipeCard = props => {
  const {
    thumbnailImageSrc,
    authorName,
    title,
    link,
    asUrl,
    videoUrl,
    isLazyLoaded,
  } = props;

  return (
    <StyledCard>
      <div className="recipeCardThumbnail">
        <VideoThumbnail
          thumbnailImageSrc={thumbnailImageSrc}
          authorName={authorName}
          isLazyLoaded={isLazyLoaded}
          videoUrl={videoUrl}
        />
      </div>

      <div className="recipeCardFooter">
        <Link href={link} as={asUrl}>
          <a className="recipeCardTitle">{title}</a>
        </Link>

        <div className="recipeCardActionButtons">
          <IconButton
            iconSrc={icons.bookmarkBorder}
            buttonType="secondary"
            buttonSize="medium"
            aria-label="bookmark"
          />

          <IconButton
            iconSrc={icons.share}
            buttonType="secondary"
            buttonSize="medium"
            aria-label="share"
          />
        </div>
      </div>
    </StyledCard>
  );
};

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  asUrl: PropTypes.string.isRequired,
  thumbnailImageSrc: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  isLazyLoaded: PropTypes.bool,
};

export default RecipeCard;
