import React, {FC, ReactEventHandler} from 'react';
import styled, {useTheme, css} from 'styled-components';
import type {DefaultTheme} from 'styled-components';

import {RiArrowUpDoubleLine} from 'react-icons/ri'

import {IWrap} from './Header';

import {BurgerMenuIcon} from '../../elements/BurgerMenuIcon';


export interface ServiceButtonProps extends IWrap {
    onClick?: ReactEventHandler,
}

type Props = ServiceButtonProps;

export const ServiceButton: FC<Props> = ({onClick, isWrap}) => {
    const theme = useTheme() as DefaultTheme;

    return (
        <Button
            id={ServiceButton.name}
            onClick={onClick}
            isWrap={isWrap}
        >
            {
                isWrap
                    ? <BurgerMenuIcon
                        color={theme.colors.cyan}
                        lineHeight={4}
                    />
                    : <RiArrowUpDoubleLine
                        color={theme.colors.cyan}
                        size={50}
                    />
            }

        </Button>
    );
};


const Button = styled.button<IWrap>`
  display: ${props => props.isWrap ? 'none' : 'block'};

  @media ${({theme}) => theme.media.mobileRotate} {
    display: block;

    ${props => props.isWrap === true
            ? buttonWrappedStyles
            : buttonUnwrappedStyles
    }
  }
`

const buttonWrappedStyles = css`
  position: relative;

  min-width: 70px;
  max-width: 80px;
  height: 120%;
  padding: 12px 15px;


  background-color: black;
  border-radius: 100%;

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
const buttonUnwrappedStyles = css`
  margin-top: 5%;
  width: 100%;
  background-color: #282828;
`

