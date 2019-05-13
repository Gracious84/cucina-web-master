import React, { Component } from 'react';

import LargeLogoPageHead from '../../components/LargeLogoPageHead';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { StyledPageContent } from './style';
import { icons } from '../../utils/ui/icons';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  };

  handleInputChange = (event, key) => {
    const { value } = event.target;

    this.setState({
      [key]: value,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <LargeLogoPageHead />

        <StyledPageContent>
          <div className="loginPageInner">
            <div className="loginThirdPartyButtons">
              <Button
                buttonType="primary"
                buttonSize="large"
                iconPosition="left"
                iconSrc={icons.facebook}
                text="Login with Facebook"
                aria-label="Login with Facebook"
              />
            </div>

            <div className="loginPageSeparator">
              <div className="loginPageSeparatorLine" />

              <div className="loginPageSeparatorText">Or</div>

              <div className="loginPageSeparatorLine" />
            </div>

            <div className="loginForm">
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="loginInput">
                  <Input
                    type="email"
                    placeholder="Email"
                    inputSize="large"
                    value={email}
                    onChange={event => this.handleInputChange(event, 'email')}
                    filled
                  />
                </div>

                <div className="loginInput">
                  <Input
                    type="password"
                    placeholder="Password"
                    inputSize="large"
                    value={password}
                    onChange={event =>
                      this.handleInputChange(event, 'password')
                    }
                    filled
                  />
                </div>

                <div className="loginSubmit">
                  <Button
                    buttonType="primary"
                    buttonSize="large"
                    text="Continue"
                    type="submit"
                    aria-label="login"
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

export default LoginPage;
