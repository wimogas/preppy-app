import React from "react";

import styled, { css } from "styled-components";

const CustomForm = styled.form`
  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: ${props => props.theme.sizes.base}px;
  `}
`;

const FormContainer = ({ children, ...props }) => {
  return (
    <CustomForm onSubmit={props.onSubmit} {...props}>
      {children}
    </CustomForm>
  );
};

export default FormContainer;
