import React from 'react';
import Link from 'next/link';

import BorderedSubSection from '../BorderedSubSection';
import SocialLink from '../SocialLink';
import Input from '../Input';
import Button from '../Button';
import LargeLogoPageHead from '../LargeLogoPageHead';

import { StyledFooter } from './style';

const Footer = () => (
  <StyledFooter>
    <div className="footerHead">
      <LargeLogoPageHead />
    </div>

    <div className="footerSections">
      <div className="footerSection footerAboutUsSection">
        <BorderedSubSection title="Lavora con Noi">
          <div className="footerAboutUsLinks">
            <Link href="/">
              <a>Diventa Partner</a>
            </Link>
            <Link href="/">
              <a>Entra nel Team</a>
            </Link>
          </div>
        </BorderedSubSection>
      </div>

      <div className="footerSection footerFollowSection">
        <BorderedSubSection title="Seguici sui Social">
          <div className="socialLinks">
            <SocialLink type="facebook" />

            <SocialLink type="instagram" />

            <SocialLink type="youtube" />
          </div>
        </BorderedSubSection>
      </div>

      <div className="footerSection footerNewsletterSection">
        <BorderedSubSection title="Iscriviti alla nostra newsletter">
          <div className="footerNewsletterForm">
            <form noValidate>
              <div className="footerNewsletterInput">
                <Input
                  inputSize="large"
                  type="email"
                  placeholder="Il tuo indirizzo email"
                />
              </div>

              <Button
                buttonType="primary"
                buttonSize="large"
                text="Iscriviti"
                type="submit"
                aria-label="submit newsletter subscription"
              />
            </form>
          </div>

          <div className="footerNewsletterMsg">
            By clicking "submit", you’re consenting to our email newsletter with
            cooking content and information on products. You may withdraw your
            consent at any time.
          </div>
        </BorderedSubSection>
      </div>
    </div>

    <div className="footerMsg">Made in Italy with pasta</div>
  </StyledFooter>
);

export default Footer;
