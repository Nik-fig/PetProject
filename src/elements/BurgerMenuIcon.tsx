import React, {FC} from 'react';
import styled from 'styled-components'

export interface BurgerMenuIconProps {
    color?: string;
    className?: string;
    size?: number

    lineHeight?: number;
}

type Props = BurgerMenuIconProps;

export const BurgerMenuIcon: FC<Props> = ({color, className, size, lineHeight}) => {
    return (
        <IconContainer
            lineHeight={lineHeight}
            size={size}
            className={className}
            color={color}
        >
            <div/>
            <div/>
            <div/>
        </IconContainer>
    );
};

const IconContainer = styled.div<Props>`
  width: ${props => props.size ? props.size : '100%'};
  height: ${props => props.size ? props.size : '100%'};
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  div {
    height: ${props => props.lineHeight ? props.lineHeight + 'px' : '8px'};
    background-color: ${props => props.color ? props.color : 'black'};
  }
`
