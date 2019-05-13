import React, { Component } from 'react';
import Link from 'next/link';

import IconButton from '../IconButton';
import Button from '../Button';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import UserAvatar from '../UserAvatar';

import { StyledNav } from './style';

const links = [
  {
    label: 'Ricette',
    href: '/',
  },
  {
    label: 'Diventa Partner',
    href: '/',
  },
];

class NavigationBar extends Component {
  render() {
    return (
      <StyledNav>
        <div className="navigationBarInner">
          <div className="logo">
            <Logo small />
          </div>
          <div className="navList medium-up">
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                <a className="navLink">{link.label}</a>
              </Link>
            ))}
          </div>
        </div>
        {/*
        <div className="searchBar">
          <SearchBar />
        </div>

        <div className="navList medium-up">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <a className="navLink">{link.label}</a>
            </Link>
          ))}
        </div>

        <div className="createBtn medium-up">
          <Button
            buttonType="secondary"
            buttonSize="large"
            iconPosition="left"
            text="Create"
          />
        </div>

        <div className="createBtn medium-down">
          <IconButton buttonType="secondary" buttonSize="large" />
        </div>

        <div className="userAvatar medium-up">
          <UserAvatar userNameAbbr="JN" />
        </div>
        <div className="userAvatar medium-down">
          <UserAvatar userNameAbbr="JN" small />
        </div>
        */}
      </StyledNav>
    );
  }
}

export default NavigationBar;
