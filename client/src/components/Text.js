import React from "react";

import styled, { css } from "styled-components";

const CustomText = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.sizes.font}px;
  transition: ${props => props.theme.transitions.fast};
  ${props =>
    props.primary &&
    css`
      color: ${props => props.theme.colors.primary};
  `}
  ${props =>
    props.secondary &&
    css`
      color: ${props => props.theme.colors.secondary};
  `}
  ${props =>
    props.info &&
    css`
      color: ${props => props.theme.colors.info};
  `}
  ${props =>
    props.highlight &&
    css`
      color: ${props => props.theme.isDark ? props.theme.colors.info : "white"}
  `}
  ${props =>
    props.white &&
    css`
      color: white;
  `}
  ${props =>
    props.light &&
    css`
      color: ${props => props.theme.colors.light};
  `}
  ${props =>
    props.bold &&
    css`
      font-weight: ${props => props.theme.weight.bold};
  `}
  ${props =>
    props.capitalize &&
    css`
      text-transform: capitalize;
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
  ${props => props.placeholder && css`
    display: block;
    width: ${props => props.placeholder && props.placeholder};
    height: 15px;
    border-radius: 12px;
    background-image: ${props => props.theme.utils.placeholderGradient};
    background-size: 600px;
    animation: shine-text 2.0s infinite ease-out;
    @keyframes shine-text {
      0% {
        background-position: -100px;
      }
      40%, 100% {
        background-position: 310px;
      }
    }
  `}
  ${props => props.sad && css`
    color: ${props => props.theme.colors.sad};
  `}
  ${props => props.size && css`
    font-size: ${props => props.size}px;
  `}
  ${props =>
    props.active &&
    css`
      border-left: 5px solid ${props => props.theme.colors.primary};
      padding-left: 12px;
  `}  
`;

const CustomH1 = styled.h1`
  color: ${props => props.theme.isDark ? "white" : props.theme.colors.header};
  font-size: ${props => props.theme.sizes.h1}px;
`;
const CustomH2 = styled.h1`
  color: ${props => props.theme.isDark ? "white" : props.theme.colors.header};
    font-size: ${props => props.theme.sizes.h2}px;
  ${props =>
    props.info &&
    css`
      color: ${props => props.theme.colors.info};
  `}
  ${props =>
    props.active &&
    css`
      border-left: 5px solid ${props => props.theme.colors.primary};
      padding-left: 12px;
      color: ${props => props.theme.colors.primary};
  `}   
`;
const CustomH3 = styled.h3`
color: ${props => props.theme.isDark ? "white" : props.theme.colors.header};
  font-size: ${props => props.theme.sizes.h3}px;
  ${props =>
    props.highlight &&
    css`
      color: ${props => props.theme.isDark ? props.theme.colors.info : "white"}
  `}  
`;
  const CustomH4 = styled.h4`
color: ${props => props.theme.isDark ? "white" : props.theme.colors.header};
  font-size: ${props => props.theme.sizes.h4}px;
`;
const CustomH5 = styled.h5`
  color: ${props => props.theme.isDark ? "white" : props.theme.colors.header};
  font-size: ${props => props.theme.sizes.h5}px;
`;

const Text = ({ children, ...props }) => {
  if (props.h1) {
    return <CustomH1 {...props}>{children}</CustomH1>;
  } else if (props.h2) {
    return <CustomH2 {...props}>{children}</CustomH2>;
  } else if (props.h3) {
    return <CustomH3 {...props}>{children}</CustomH3>;
  } else if (props.h4) {
    return <CustomH4 {...props}>{children}</CustomH4>;
  } else if (props.h5) {
    return <CustomH5 {...props}>{children}</CustomH5>;
  } else {
    return <CustomText {...props}>{children}</CustomText>;
  }
};

export default Text;
