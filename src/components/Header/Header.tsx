import React, {FC, useState, ReactEventHandler} from 'react';
import styled, {css} from "styled-components";

import {Navigation} from './Navigation'
import {MainButton} from './MainButton'

import {ServiceButton} from './ServiceButton';
import {LinkType} from '../../interfaces/LinkType'

export interface IWrap {
    isWrap: boolean,
}

export interface ILink {
    links: LinkType[];
}

export interface HeaderProps extends ILink {
}

type Props = HeaderProps;

export const Header: FC<Props> = ({links}) => {
    const [isWrap, setIsWrap] = useState(true);


    const handlerWrappedHeaderClick:ReactEventHandler = (event) => {
        const target = event.target as HTMLDivElement;
        if (!target.classList.contains(Head.componentStyle.componentId))
            return;

        setIsWrap(!isWrap);
    }

    return (
        <Head
            isWrap={isWrap}
            onClick={handlerWrappedHeaderClick}
        >
            <HeadWrapper isWrap={isWrap}>
                <MainButton isWrap={isWrap}/>
                <Navigation isWrap={isWrap} links={links}/>
                <ServiceButton
                    isWrap={isWrap}
                    onClick={() => setIsWrap(!isWrap)}
                />
            </HeadWrapper>
        </Head>
    );
};



const Head = styled.header<IWrap>`
  position: sticky;
  z-index: 50;
  text-align: center;

  width: 100%;
  height: 60px;
  
  background-color: black;

  box-shadow: 0 0 10px 10px #929292;
  
  @media ${({theme}) => theme.media.tablet} {
    ${props => props.isWrap
            ? headerWrappedStyles
            : headerUnwrappedStyles
    }
  }
`
const headerWrappedStyles = css`

`

const headerUnwrappedStyles = css`
  position: static;
  
  height: 100vh;
  background-color: rgba(169, 169, 169, 0.5);

  box-shadow: none;
`

const HeadWrapper = styled.div<IWrap>`
  position: relative;
  z-index: +1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  max-width: 1900px;
  height: 100%;
  padding: 0 30px;
  margin: auto;
  
  
  @media ${({theme}) => theme.media.tablet} {
    ${props => props.isWrap
            ? headerWrapperWrappedStyles
            : headerWrapperUnwrappedStyles
    }
  }
`

const headerWrapperWrappedStyles = css`
  
`

const headerWrapperUnwrappedStyles = css`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: black;
  //height: 80%;  
  height: auto;

  padding: 0;

  box-shadow: 0 0 20px 20px #929292;
`


