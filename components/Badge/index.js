import PropTypes from 'prop-types';

import { StyledBadge } from './style';

const Badge = props => {
  const { text, color } = props;

  return <StyledBadge color={color}>{text}</StyledBadge>;
};

Badge.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'warning',
    'success',
    'danger',
    'default',
  ]),
};

export default Badge;
