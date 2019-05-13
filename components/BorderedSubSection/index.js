import PropTypes from 'prop-types';

import { StyledSection } from './style';

const BorderedSubSection = props => {
  const { title, children } = props;

  return (
    <StyledSection>
      <div className="title">{title}</div>

      {children}
    </StyledSection>
  );
};

BorderedSubSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BorderedSubSection;
