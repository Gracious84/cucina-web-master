import React from 'react';
import PropTypes from 'prop-types';

import VideoThumbnail from '../../../components/VideoThumbnail';

import { Intro } from './style';

const RecipePageIntro = props => {
  const { data } = props;

  const { recipeOwner, recipeVideo } = data;

  return (
    <Intro>
      <div className="introInner">
        <div className="videoThumbnail">
          <VideoThumbnail
            authorName={recipeOwner.username}
            authorImageSrc={recipeOwner.mugshot}
            thumbnailImageSrc={recipeVideo.thumbnail}
            videoUrl={recipeVideo.link}
            isLazyLoaded
          />
        </div>
      </div>
    </Intro>
  );
};

RecipePageIntro.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RecipePageIntro;
