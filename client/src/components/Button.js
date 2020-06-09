import React from "react";

import styled, { css } from "styled-components";
import { darken } from "polished";

const CustomButton = styled.button`
  color: white;
  font-family: ${props => props.theme.fonts[1]};
  font-size: ${props => props.theme.sizes.base}px;
  padding: ${props => props.theme.sizes.base}px;
  border-radius: ${props => props.theme.sizes.radius}px;
  font-weight: ${props => props.theme.weight.bold};
  border: none;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: ${props => props.theme.transitions.fast};
  :hover {
    background-color: ${props => darken(0.2, props.theme.colors.primary)};
  }
  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.colors.primary};
  `}
  ${props =>
    props.google &&
    css`
      background-color: ${props => props.theme.colors.google};
      :hover {
        background-color: ${props => darken(0.2, props.theme.colors.google)};
      }
  `}
  ${props =>
    props.secondary &&
    css`
      background-color: ${props => props.theme.colors.secondary};
      :hover {
        background-color: ${props => darken(0.2, props.theme.colors.secondary)};
      }
  `}
  ${props =>
    props.outline &&
    css`
      border: 1px solid ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
      background-color: white;
      :hover {
        background-color: ${props => props.theme.colors.primary};
        color: white;
      }
    `}
  ${props =>
    props.icon &&
    css`
      border: none;
      color: ${props => !props.theme.isDark ? props.theme.colors.primary : "white"};
      background-color: transparent;
      font-size: ${props => props.theme.sizes.h3}px;
      :hover {
        background-color: transparent;
        color: ${props => props.theme.colors.header};
      }
  `}
  ${props =>
    props.circle &&
    css`
      border-radius: 50%;
      width: 50px;
      height: 50px;
      color: white;
      background-color: ${props => props.theme.colors.header};
      :hover {
        background-color: transparent;
        color: ${props => props.theme.colors.header};
      }
  `}
  ${props =>
    props.full &&
    css`
      width: 100%;
  `}
  ${props =>
    props.nav &&
    css`
     position: relative;
     bottom: 0px;
      background-color: transparent;
      :hover {
        background-color: transparent;
      }
  `}
  ${props =>
    props.action &&
    css`
      @media screen and (max-width: 450px) {
        position: fixed;
        bottom: 0px;
        left: 0;
        width: calc(100%);
        border-radius: 32px 32px 0px 0px;
        padding: ${props => props.theme.sizes.base * 2}px 0px;
        z-index: 502;
        padding-bottom:36px;
      }
  `}
  ${props =>
    props.alert &&
    css`
      background-color: ${props => props.theme.colors.alert};
      :hover {
        background-color: ${props => props.theme.colors.alert};
      }
  `}
  ${props => props.small && css`
    font-size: ${props => props.theme.sizes.font}px;
    padding: ${props => props.theme.sizes.base / 2}px;
    border-radius: ${props => props.theme.sizes.radius / 1.5}px;
  `}
  ${props =>
    props.active &&
    css`
    ::before {
      transform: translateX(-50%);
      border-radius: 100%;
      position: relative;
      background: white;
      bottom: -15px;
      height: 3px;
      content: '';
      width: 3px;
      left: 50%;
    }
  `}
  ${props =>
    props.default &&
    css`
      color: ${props => props.theme.colors.light};
      :hover {
        background-color: ${props => props.theme.colors.primary};
        color: white
      }
  `}
  ${props => props.close && css`
    border: none;
    color: white;
    background-color: transparent;
    font-size: ${props => props.theme.sizes.h1}px;
  `}
    ${props => props.placeholder && css`
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background-image: ${props => props.theme.utils.placeholderGradient};;
    background-size: 600px;
    animation: shine-button 2.0s infinite ease-out;
    @keyframes shine-button {
      0% {
        background-position: -50px;
      }
      40%, 100% {
        background-position: 100px;
      }
    }
  `}
  ${props => props.maxWidth && css`
      max-width: ${props => props.maxWidth};
    `}
  ${props => props.pill && css`
  border-radius: 32px;
  padding: 12px;
`}
`;

const Button = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default Button;
