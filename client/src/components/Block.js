import React from "react";

import styled, { css } from "styled-components";
import { darken } from 'polished'

const CustomBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  > * {
    margin-bottom:4px;
  }
  ${props =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    `}
  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
  ${props =>
    props.row &&
    css`
      flex-direction: row;
    `}
  ${props =>
    props.middle &&
    css`
      align-items: center;
    `}
  ${props =>
    props.align &&
    css`
      align-items: ${props.align};
    `}
  ${props =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${props =>
    props.full &&
    css`
      height: 100%;
      min-height: calc(100vh - 32px);
      width: 100%;
    `}
  ${props =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
  ${props =>
    props.space &&
    css`
      justify-content: space-${props.space};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.hide &&
    props.hide === "mobile" &&
    css`
      @media screen and (max-width: 450px) {
        display: none;
      }
    `}
  ${props =>
    props.hide &&
    props.hide === "desktop" &&
    css`
      @media screen and (min-width: 450px) {
        display: none;
      }
    `}
  ${props =>
    props.quote &&
    css`
      border-left: 5px solid ${props => props.theme.colors.text};
    `}
  ${props =>
    props.card &&
    css`
      background-color: ${props => !props.theme.isDark ? "white" : darken(0.2,props.theme.colors.light)};
      border-radius: ${props => props.theme.sizes.radius}px;
      padding: ${props => props.theme.sizes.base}px;
  `}
  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props => props.maxWidth};
      margin: auto;
  `}
  ${props =>
    props.primary &&
    css`
    background-color: ${props => !props.theme.isDark ? props.theme.colors.primary : "white"};
    border-radius: ${props => props.theme.sizes.radius}px;
    padding: ${props => props.theme.sizes.base}px;
  `}
  ${props =>
    props.secondary &&
    css`
    background-color: ${props => !props.theme.isDark ? props.theme.colors.secondary : "white"};
    border-radius: ${props => props.theme.sizes.radius}px;
    padding: ${props => props.theme.sizes.base}px;
  `}
  ${props =>
    props.info &&
    css`
    background-color: 
    border-radius: ${props => props.theme.sizes.radius}px;
    padding: ${props => props.theme.sizes.base}px;
  `}
  ${props =>
    props.float &&
    css`
    box-shadow: 0px 16px 52px -34px rgba(0,0,0,0.75);
    border: 4px solid ${props => props.theme.colors.primary};
  `}
  ${props =>
    props.done &&
    css`
    opacity: 0.7;
    background: rgba(0,0,0,0.1);
  `}
`;

const Block = ({ children, ...props }) => {
  return <CustomBlock {...props}>{children}</CustomBlock>;
};

export default Block;
