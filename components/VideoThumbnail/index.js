import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import VimeoPlayer from 'react-player/lib/players/Vimeo';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { StyledVideoThumbnail, AvatarImage } from './style';

import { icons } from '../../utils/ui/icons';

class VideoThumbnail extends PureComponent {
  static propTypes = {
    thumbnailImageSrc: PropTypes.string.isRequired,
    authorName: PropTypes.string,
    authorImageSrc: PropTypes.string,
    videoUrl: PropTypes.string,
    isLazyLoaded: PropTypes.bool,
  };

  state = {
    showVideo: false,
  };

  toggleVideoState = () => {
    this.setState(state => ({
      showVideo: !state.showVideo,
    }));
  };

  render() {
    const {
      thumbnailImageSrc,
      authorName,
      authorImageSrc,
      videoUrl,
      isLazyLoaded,
    } = this.props;

    const { showVideo } = this.state;

    const authorImage =
      authorName === 'altacucina'
        ? '/static/images/logo/logo-small.svg'
        : authorImageSrc;

    const renderThumbnail = lazyLoaded => {
      if (lazyLoaded) {
        return (
          <LazyLoadImage
            src={thumbnailImageSrc}
            alt="recipe video"
            effect="opacity"
            placeholder={
              <img
                src="/static/images/ornaments/ornament-1.svg"
                alt="placeholder"
              />
            }
          />
        );
      }
      return <img src={thumbnailImageSrc} alt="recipe video" />;
    };

    return (
      <StyledVideoThumbnail>
        <div className="inner">
          <div className="thumbnail">
            <div className={showVideo ? 'thumbnailVideo' : 'hidden'}>
              <VimeoPlayer
                url={videoUrl}
                onEnded={this.toggleVideoState}
                onError={this.toggleVideoState}
                width="100%"
                height="100%"
                playing={showVideo}
                playsinline
              />
            </div>

            <div
              className={showVideo ? 'hidden' : 'thumbnailImg'}
              role="button"
              onClick={this.toggleVideoState}
              onKeyPress={this.toggleVideoState}
              tabIndex="0"
            >
              {renderThumbnail(isLazyLoaded)}
            </div>
          </div>

          {!showVideo && (
            <>
              <div className="createdBy">
                {authorName === 'altacucina' && (
                  <img
                    className="ribbon"
                    src="/static/images/icons/ribbon.svg"
                    alt="ribbon"
                  />
                )}

                <div className="author">
                  <div className="avatar">
                    {authorImageSrc || authorName === 'altacucina' ? (
                      <AvatarImage
                        dimensions={
                          authorName === 'altacucina' ? '40%' : '100%'
                        }
                        src={authorImage}
                        alt="author"
                      />
                    ) : (
                        icons.user
                      )}
                  </div>

                  <span className="name">
                    by{' '}
                    {authorName === 'altacucina' ? 'Al.Ta.Cucina' : authorName}
                  </span>
                </div>
              </div>

              <button
                className="playButton"
                type="button"
                onClick={this.toggleVideoState}
                aria-label="play video"
              >
                {icons.play}
              </button>
            </>
          )}
        </div>
      </StyledVideoThumbnail>
    );
  }
}

export default VideoThumbnail;
