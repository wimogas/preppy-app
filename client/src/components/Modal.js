import React from "react";

import styled from "styled-components";

const CustomModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 520px;
  padding: ${props => props.theme.sizes.base}px;
  box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.1);
  border-radius: ${props => props.theme.sizes.radius}px;
  z-index: 600;
  transition: ${props => props.theme.transitions.slowest};
  display: block;
  @media screen and (max-width: 450px) {
    width: 320px;
  }
`;

const Modal = ({ children }) => {
  return (
    <>
      <CustomModal>{children}</CustomModal>
    </>
  );
};

export default Modal;
