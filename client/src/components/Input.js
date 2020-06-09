import React from "react";

import styled from "styled-components";

import { Text, Block } from "../components";

const CustomInput = styled.input`
  padding: ${props => props.theme.sizes.base}px;
  color: ${props => props.theme.colors.text};
  border-radius: ${props => props.theme.sizes.radius}px;
  border: 1px solid #EFF3FB;
  background-color: ${props => props.theme.isDark ? props.theme.colors.light : "white"};
  font-size: ${props => props.theme.sizes.base}px;
  :focus {
    color: ${props => props.theme.colors.text};
  }
  ::placeholder {
    color: ${props => props.theme.colors.text};
  }
`;

const Input = props => {
  return (
    <Block style={props.style}>
      {props.title && <Text htmlFor={props.name}>{props.title}</Text>}
      <CustomInput
        search={props.search}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        onFocus={e => {
          e.target.placeholder = "";
        }}
        onBlur={e => {
          e.target.placeholder = props.placeholder;
        }}
      />
    </Block>
  );
};

export default Input;
