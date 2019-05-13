import Link from 'next/link';
import PropTypes from 'prop-types';

import { LogoSmall } from './style';

const Logo = props => {
  const { small } = props;

  const imgSrc = small
    ? '/static/images/logo/logo-small.svg'
    : '/static/images/logo/logo-large.svg';

  return (
    <Link href="/" passHref>
      <LogoSmall small={small}>
        <img src={imgSrc} alt="Al.Ta.Cucina" />
      </LogoSmall>
    </Link>
  );
};

Logo.propTypes = {
  small: PropTypes.bool,
};

Logo.defaultProps = {
  small: false,
};

export default Logo;
