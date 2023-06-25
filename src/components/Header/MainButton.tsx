import React, {FC, useState} from 'react';
import styled, {css, useTheme} from "styled-components";
import type {DefaultTheme} from 'styled-components';

import {ReactIcon} from '../../elements/ReactIcon'
import {IWrap} from './Header'

interface MainButtonProps extends IWrap {
}

type Props = MainButtonProps;

export const MainButton: FC<Props> = ({isWrap}) => {
    const theme = useTheme() as DefaultTheme;

    const cyanColor = theme.colors.cyan;
    const [iconColor, setIconColor] = useState(cyanColor);

    return (
        <MainButtonHref
            isWrap={isWrap}
            href='/'
            id={MainButton.displayName}
            color={cyanColor}
            onMouseOver={() => setIconColor('white')}
            onMouseOut={() => setIconColor(cyanColor)}
        >
            <Icon color={iconColor}/>
        </MainButtonHref>
    );
};


const MainButtonHref = styled.a<IWrap>`
  ${props => props.isWrap
          ? MainButtonHrefWrappedStyles
          : MainButtonHrefUnwrappedStyles
  }
`

const MainButtonHrefWrappedStyles = css`
  position: relative;
  display: flex;

  min-width: 70px;
  max-width: 80px;
  height: 120%;

  padding: 10px;

  border-radius: 100%;

  background-color: black;

  &::after {
    z-index: -1;
    content: '';
    position: absolute;

    top: 100%;
    width: 50%;
    left: 25%;

    box-shadow: 0 0 15px 5px #929292;
    border-radius: 100%;
  }
`


const MainButtonHrefUnwrappedStyles = css`
  max-height: 80px;
  max-width: 80px;
  
  &::after {
    display: none;
  }
`

const Icon = styled(ReactIcon)`
  @media (min-width: ${({theme}) => theme.breakpoints.mobileRotate}) {
    &:hover {
      animation: rotating 3s linear infinite;
    }
  }
  
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

