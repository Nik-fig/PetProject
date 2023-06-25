import React, {FC} from 'react';
import styled from 'styled-components'

export interface ReactIconProps {
    color?: string,
    className?: string,
    size?: number
}

type Props = ReactIconProps;

export const ReactIcon: FC<Props> = ({size, className, color}) => {
    return (
        <IconSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"

            className={className}
            color={color}
            size={size}
        >
            <defs>
                <ellipse
                    id='ellipse'
                    cx="50"
                    cy="50"
                    rx="18"
                    ry="45"
                    strokeWidth="4"
                />
                <circle
                    id='circle'
                    cx="50"
                    cy="50"
                    r="8"
                />
            </defs>
            <use href='#circle'/>
            <g>
                <use href='#ellipse'/>
                <use href='#ellipse'/>
                <use href='#ellipse'/>
            </g>
        </IconSvg>
    );
};


const IconSvg = styled.svg<Props>`
  width: ${props => props.size ? props.size : '100%'};
  height: ${props => props.size ? props.size : '100%'};

  ellipse {
    stroke: ${props => props.color ? props.color : 'black'};
    fill: none;
  }

  circle {
    fill: ${props => props.color ? props.color : 'black'};
  }

  g use {
    transform-origin: center;

    &:nth-child(1n) {
      transform: rotate(30deg);
    }

    &:nth-child(2n) {
      transform: rotate(-30deg);
    }

    &:nth-child(3n) {
      transform: rotate(90deg);

    }
  }
`


