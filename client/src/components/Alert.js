import React from "react";
import { connect } from "react-redux";

import styled, { css } from "styled-components";

const CustomAlert = styled.div`
  position: fixed;
  z-index: 501;
  top: 0;
  left: 0;
  width: calc(100% - 64px);
  text-align: center;
  margin: auto;
  padding: 32px;
  ${props =>
    props.alertType &&
    props.alertType === "danger" &&
    css`
      background-color: ${props => props.theme.colors.softAlert};
      color: ${props => props.theme.colors.alert};
  `}
  ${props =>
    props.alertType &&
    props.alertType === "success" &&
    css`
      background-color: ${props => props.theme.colors.softSuccess};
      color: ${props => props.theme.colors.success};
  `}
`;

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert, i) => (
    <CustomAlert alertType={alert.alertType} key={i}>
      {alert.msg}
    </CustomAlert>
  ));

const mapStateToProps = state => ({
  alerts: state.ui.alerts
});

export default connect(mapStateToProps)(Alert);
