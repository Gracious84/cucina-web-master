import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './style';

import { icons } from '../../utils/ui/icons';

const link = {
  facebook: {
    icon: icons.facebook,
    href: 'https://www.facebook.com/Altaticucina/',
  },
  instagram: {
    icon: icons.instagram,
    href: 'https://www.instagram.com/al.ta.cucina/',
  },
  twitter: {
    icon: icons.twitter,
    href: '',
  },
  youtube: {
    icon: icons.youtube,
    href: 'https://www.youtube.com/channel/UCEKBVaQdCjJRjCmZTrLQz7w',
  },
};

const SocialLink = props => {
  const { type } = props;

  return (
    <StyledLink href={link[type].href} target="_blank" rel="noopener">
      {link[type].icon}
    </StyledLink>
  );
};

SocialLink.propTypes = {
  type: PropTypes.oneOf(['facebook', 'instagram', 'twitter', 'youtube']),
};

export default SocialLink;
