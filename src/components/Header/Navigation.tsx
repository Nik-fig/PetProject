import React, {FC} from 'react';
import styled, {css} from 'styled-components';

import {changeColorShade} from '../../utils/changeColorShade';

import {IWrap} from './Header'
import {ILink} from './Header'

export interface NavigationProps extends IWrap, ILink {
}

type Props = NavigationProps;

export const Navigation: FC<Props> = ({links, isWrap}) => {
    return (
        <Nav
            isWrap={isWrap}
        >
            {links.map(
                (item, index) =>
                    <LinkContainer
                        key={index}
                    >
                        <Link
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    </LinkContainer>
            )}
        </Nav>
    );
};

const Nav = styled.nav<IWrap>`
  z-index: +1;
  position: relative;
  display: flex;
  flex-direction: row;

  height: 120%;

  transition: all ease-in .1s;

  a {
    transition: all ease-in .3s;
  }

  &::before, &::after {
    display: ${props => props.isWrap ? 'block' : 'none'};
  }
  
  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    left: -10%;

    height: 100%;
    width: 120%;
    background-color: black;

    border-bottom-right-radius: 100%;
    border-bottom-left-radius: 100%;
  }

  &::after {
    z-index: -2;
    content: '';
    position: absolute;

    top: 100%;
    left: 10%;

    width: 80%;

    border-bottom-right-radius: 100%;
    border-bottom-left-radius: 100%;

    box-shadow: 0 0 15px 5px #929292;
  }

  &:hover {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    transition: all ease-in .1s;

    a {
      transition: ease-in .4s;
      color: ${({theme}) => changeColorShade(theme.colors.cyan, -50)};
    }
    
    &::before {
      left: 0;
      width: 100%;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    &::after {
      left: 0;
      width: 100%;

      border-bottom-right-radius: 100px;
      border-bottom-left-radius: 100px;
    }
  }

  @media ${({theme}) => theme.media.mobileRotate} {
    ${props => props.isWrap === true 
            ? navWrappedStyles
            : navUnwrappedStyles
    }
  }

`

const navWrappedStyles = css`
  display: none;
`

const navUnwrappedStyles = css`
  width: 100%;
  
  height: 100%;
  
  margin-top: 5%;
  
  justify-content: space-evenly;
  
`


const LinkContainer = styled.div`
  display: flex;
  position: relative;

  z-index: +1;
  
  min-height: 60px;
  height: 100%;

  &:hover {
    animation: pulseShadow 1.5s linear infinite;
    border-radius: 10px;

    & a {
      color: ${({theme}) => theme.colors.cyan};
    }
  }

  @keyframes pulseShadow {
    0% {
      box-shadow: inset 0 0 10px 5px ${({theme}) => theme.colors.cyan};
    }
    50% {
      box-shadow: inset 0 0 2px 2px ${({theme}) => theme.colors.cyan};
    }
    100% {
      box-shadow: inset 0 0 10px 5px ${({theme}) => theme.colors.cyan};
    }
  }
`

const Link = styled.a`
  margin: auto;
  color: ${({theme}) => theme.colors.cyan};
  
  font-weight: 700;
  font-size: 1.5em;

  padding: 0 15px;

  @media ${({theme}) => theme.media.mobile} {
    font-size: 1.3em;
  }
`

