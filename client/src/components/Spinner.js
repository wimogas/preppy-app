import React from "react";

import styled, { css } from "styled-components";

const Spinner = props => {
  const SpinnerContainer = styled.div`
  ${props =>
    props.large &&
    css`
      position: fixed;
      margin: auto;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    `}
  ${props =>
    props.small &&
    css`
      position: relative;
      margin-left: 10px;
    `}
  ${props =>
    props.xtrasmall &&
    css`
      position: relative;
      width: 19px;
      height: 19px;
    `}
    ${props =>
      props.btn &&
      css`
        svg {
          fill: white; 
        }
      `}
    z-index: 999;
    overflow: show;
    max-width: 50px;
    max-height: 50px;
  `;

  const SpinnerSVG = styled.svg`
    fill: ${props => props.theme.colors.primary};
  `;

  return (
    <div>
      <SpinnerContainer {...props}>
        <SpinnerSVG
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
        >
          <path
            d="M75,50c0-13.8-11.2-25-25-25S25,36.2,25,50v2h7.7c0-1.1,0.1-2.5,0.3-4h0c0.2-2,0.8-3.8,1.6-5.6c0-0.1,0.1-0.1,0.1-0.2
            c0,0,0,0,0-0.1c0.1-0.3,0.3-0.5,0.4-0.7c3-5.1,8.5-8.5,14.8-8.5c7.3,0,13.6,4.7,16,11.2l0,0c0,0,0.1,0.2,0.3,0.8
            c0,0.1,0,0.1,0.1,0.2c0,0,0,0.1,0,0.1c0.2,0.7,0.4,1.5,0.5,2.3c0.2,1.1,0.4,2.6,0.7,4.5H75V50z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </SpinnerSVG>
      </SpinnerContainer>
    </div>
  );
};

export default Spinner;
