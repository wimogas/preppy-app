import React from "react";
import {connect} from 'react-redux'
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#46A724",
    secondary: "#FF332C",
    header: "#0C0B24",
    text: "#75869C",
    light: "#8C9EB9",
    backgroundLightGray: "#EFF3FB",
    success: "#4FC44A",
    alert: "#FF4141",
    warning: "#FFC907",
    info: "#00CEFF",
    softSuccess: "#DBFFD9",
    softAlert: "#FDE8E7",
    softWarning: "#FFFADF",
    softInfo: "#E4F9FF",
    google: "#4C8BF5",
    background: "#EFF3FB",
    sad: "#383838",
  },
  fonts: ["sans-serif", "Roboto"],
  sizes: {
    base: 16,
    font: 14,
    radius: 12,
    padding: 25,
    // font sizes
    hero: 32,
    h1: 26,
    h2: 20,
    h3: 18,
    title: 18,
    header: 16,
    body: 14,
    caption: 12
  },
  weight: {
    bold: "700",
    regular: "400"
  },
  transitions: {
    fast: "all .1s ease-in-out",
    slow: "all .3s ease-in-out",
    slowest: "all .6s ease-in-out"
  },
  utils: {
    placeholderGradient: `linear-gradient(90deg, rgba(219,219,219,0.8) 0px, rgba(235,235,235,0.8) 40px, rgba(219,219,219,0.8) 80px);`
  }
};
const darkTheme = {
  isDark: true,
  colors: {
    primary: "#46A724",
    secondary: "#FF332C",
    header: "#4C8BF5",
    text: "#D6D6D6",
    light: "#777777",
    backgroundLightGray: "#f2f2f2",
    success: "#49C642",
    alert: "#FF4141",
    warning: "#FFC907",
    info: "#00CEFF",
    softSuccess: "#DBFFD9",
    softAlert: "#FDE8E7",
    softWarning: "#FFFADF",
    softInfo: "#E4F9FF",
    google: "#4C8BF5",
    background: "#383838",
    sad: "#383838",
  },
  fonts: ["sans-serif", "Roboto"],
  sizes: {
    base: 16,
    font: 14,
    radius: 12,
    padding: 25,
    // font sizes
    hero: 32,
    h1: 26,
    h2: 20,
    h3: 18,
    title: 18,
    header: 16,
    body: 14,
    caption: 12
  },
  weight: {
    bold: "700",
    regular: "400"
  },
  transitions: {
    fast: "all .1s ease-in-out",
    slow: "all .3s ease-in-out",
    slowest: "all .6s ease-in-out"
  },
  utils: {
    placeholderGradient: `linear-gradient(90deg, rgba(119,119,119,0.8) 0px, rgba(135,135,135,0.8) 40px, rgba(119,119,119,0.8) 80px);`
  }
};

const Theme = ({ children, isDarkMode }) => {
 
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      {children}
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  isDarkMode: state.ui.isDarkMode
})

export default connect(mapStateToProps)(Theme);
