import React, { Component } from 'react';

import LargeLogoPageHead from '../../components/LargeLogoPageHead';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { StyledPageContent } from './style';

import { icons } from '../../utils/ui/icons';

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: '',
      password: '',
      passwordConfirm: '',
    });
  };

  handleInputChange = (event, key) => {
    const { value } = event.target;

    this.setState({
      [key]: value,
    });
  };

  render() {
    const { email, password, passwordConfirm } = this.state;

    return (
      <>
        <LargeLogoPageHead />

        <StyledPageContent>
          <div className="signupPageInner">
            <div className="signupThirdPartyButtons">
              <Button
                buttonType="primary"
                buttonSize="large"
                iconPosition="left"
                iconSrc={icons.facebook}
                text="Sign up with Facebook"
                aria-label="Sign up with Facebook"
              />
            </div>

            <div className="signupPageSeparator">
              <div className="signupPageSeparatorLine" />

              <div className="signupPageSeparatorText">Or</div>

              <div className="signupPageSeparatorLine" />
            </div>

            <div className="signupForm">
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="signupInput">
                  <Input
                    type="email"
                    placeholder="Email"
                    inputSize="large"
                    value={email}
                    onChange={event => this.handleInputChange(event, 'email')}
                    filled
                  />
                </div>

                <div className="signupInput">
                  <Input
                    type="password"
                    placeholder="Create a password"
                    inputSize="large"
                    value={password}
                    onChange={event =>
                      this.handleInputChange(event, 'password')
                    }
                    filled
                  />
                </div>

                <div className="signupInput">
                  <Input
                    type="password"
                    placeholder="Repeat password"
                    inputSize="large"
                    value={passwordConfirm}
                    onChange={event =>
                      this.handleInputChange(event, 'passwordConfirm')
                    }
                    filled
                  />
                </div>

                <div className="signupSubmit">
                  <Button
                    buttonType="primary"
                    buttonSize="large"
                    text="Continue"
                    type="submit"
                    aria-label="sign up"
                  />
                </div>
              </form>
            </div>
          </div>
        </StyledPageContent>
      </>
    );
  }
}

export default SignupPage;
