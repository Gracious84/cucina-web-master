import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import IconButton from '../../../../components/IconButton';
import Button from '../../../../components/Button';

import { StyledModal } from './style';

import { icons } from '../../../../utils/ui/icons';

ReactModal.setAppElement('#__next');

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    backgroundColor: '#faf8f2',
    borderRadius: '0',
    bottom: 'unset',
    left: '50%',
    right: 'unset',
    top: '20vh',
    transform: 'translateX(-50%)',
  },
};

class CookNowMobileModals extends PureComponent {
  state = {
    showRecipeQueryModal: true,
    recipeLiked: false,
    recipeDisliked: false,
  };

  handleQueryModalClose = () => {
    const { onModalClose } = this.props;

    this.setState({ showRecipeQueryModal: false }, () => {
      onModalClose();
    });
  };

  handleRecipeLike = () => {
    this.setState({
      showRecipeQueryModal: false,
      recipeLiked: true,
    });
  };

  handleRecipeDislike = () => {
    this.setState({
      showRecipeQueryModal: false,
      recipeDisliked: true,
    });
  };

  render() {
    const { showRecipeQueryModal, recipeLiked, recipeDisliked } = this.state;

    const { onCookNowClose } = this.props;

    return (
      <>
        <ReactModal
          isOpen={showRecipeQueryModal}
          onRequestClose={this.handleQueryModalClose}
          style={modalStyles}
        >
          <StyledModal>
            <div className="cookNowMobileModal">
              <h3 className="cookNowMobileModalTitle">Well done!</h3>

              <p className="cookNowMobileModalDescription">
                Was this recipe successful?
              </p>

              <div className="cookNowMobileQueryModalBtns">
                <IconButton
                  buttonType="secondary"
                  iconSrc={icons.close}
                  onClick={this.handleRecipeDislike}
                />

                <IconButton
                  buttonType="secondary"
                  iconSrc={icons.check}
                  onClick={this.handleRecipeLike}
                />
              </div>
            </div>
          </StyledModal>
        </ReactModal>

        <ReactModal
          isOpen={recipeLiked}
          shouldCloseOnOverlayClick={false}
          shouldCloseOnEsc={false}
          style={modalStyles}
        >
          <StyledModal>
            <div className="cookNowMobileModal">
              <h3 className="cookNowMobileModalTitle">Glad you enjoyed it!</h3>

              <p className="cookNowMobileModalDescription">
                Please share this great recipe with your friends to inspire them
                too!
              </p>

              <div className="cookNowMobileModalBtns">
                <Button
                  buttonType="primary"
                  buttonSize="large"
                  text="Share recipe"
                />

                <Button
                  buttonType="secondary"
                  buttonSize="large"
                  text="Done"
                  onClick={onCookNowClose}
                />
              </div>
            </div>
          </StyledModal>
        </ReactModal>

        <ReactModal
          isOpen={recipeDisliked}
          shouldCloseOnOverlayClick={false}
          shouldCloseOnEsc={false}
          style={modalStyles}
        >
          <StyledModal>
            <div className="cookNowMobileModal">
              <h3 className="cookNowMobileModalTitle">Cooking is learning</h3>

              <p className="cookNowMobileModalDescription">
                Would you like to leave your comments to improve the recipe?
              </p>

              <div className="cookNowMobileModalBtns">
                <Button
                  buttonType="primary"
                  buttonSize="large"
                  text="Share recipe"
                />

                <Button
                  buttonType="secondary"
                  buttonSize="large"
                  text="Done"
                  onClick={onCookNowClose}
                />
              </div>
            </div>
          </StyledModal>
        </ReactModal>
      </>
    );
  }
}

CookNowMobileModals.propTypes = {
  onCookNowClose: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default CookNowMobileModals;
