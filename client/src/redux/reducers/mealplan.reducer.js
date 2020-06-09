import {
    SAVE_MEALPLAN_SUCCESS,
    GET_MEALPLAN_SUCCESS
  } from '../actions/mealplan.actions';

const initialState = {
    mealPlan: []
};


export const mealPlanReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case SAVE_MEALPLAN_SUCCESS:
      case GET_MEALPLAN_SUCCESS:
        return {
          mealPlan: payload,
        };
        
      default:
        return state;
    }
  }