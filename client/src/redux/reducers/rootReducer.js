import { combineReducers } from "redux";

import { authReducer } from "./auth.reducer";
import { uiReducer } from "./ui.reducer";
import { mealPlanReducer } from "./mealplan.reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  mealPlan: mealPlanReducer,
});

export default rootReducers;
