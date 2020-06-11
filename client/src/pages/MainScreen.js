import React from "react";
import { Route } from "react-router-dom";

import { Single, Main } from "../components";

const MainScreen = () => {
  return (
    <>
      <Route path={`/meal-plan`} exact component={Main} />
      <Route path={`/meal-plan/:itemId`} exact component={Single} />
    </>
  );
};

export default MainScreen;
