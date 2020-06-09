import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import styled from "styled-components";
import Theme from "./constants/Theme";
import "./index.css";
import bg from './assets/bg.png'
import bgd from './assets/bgd.png'

import { store } from "./redux/store";

import App from "./App";

const CustomBody = styled.div`
  background-image: url(${props => props.theme.isDark ? bgd : bg});
  height: 100%;
  min-height: 100vh;
`;

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <CustomBody>
        <App />
      </CustomBody>
    </Theme>
  </Provider>,
  document.getElementById("root")
);
