import React from "react";
import { Route } from "react-router-dom";

import { Single, Main } from "../components";

const MainScreen = () => {
  return (
    <>
      <Route path={`/main-screen`} exact component={Main} />
      <Route path={`/main-screen/:itemId`} exact component={Single} />
    </>
  );
};

export default MainScreen;
