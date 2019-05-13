import React from 'react';

import Button from '../../components/Button';
import LargeLogoPageHead from '../../components/LargeLogoPageHead';

import { StyledPage } from './style';

const NotRegisteredPage = () => (
  <StyledPage>
    <LargeLogoPageHead />

    <div className="notRegisteredPageMsg">
      Join our community of 20,000+ passionate Italian food lovers!
    </div>

    <div className="notRegisteredPageButtons">
      <Button
        buttonType="primary"
        buttonSize="large"
        text="Sign Up"
        to="/signup"
        aria-label="sign up"
      />

      <Button
        buttonType="secondary"
        buttonSize="large"
        text="Explore recipes"
        to="/"
        aria-label="explore recipes"
      />
    </div>
  </StyledPage>
);

export default NotRegisteredPage;
