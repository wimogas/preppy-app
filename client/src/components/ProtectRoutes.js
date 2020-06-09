import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { Nav } from "../components";

const CustomBlock = styled.div`
margin-bottom: 100px;
margin-top: 10px;
  @media screen and (min-width: 450px) {
    margin-top: 90px;
  }
`;

const PrivateRoute = ({ user, history, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        user !== null ? (
          <CustomBlock>
            <Component {...props} />
            <Nav history={history} />
          </CustomBlock>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export const mapStateToProps = state => ({
  user: state.auth.user
});
export default withRouter(connect(mapStateToProps)(PrivateRoute));
