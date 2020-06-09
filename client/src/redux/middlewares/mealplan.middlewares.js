import axios from 'axios';

import {
SAVE_MEALPLAN,
SAVE_MEALPLAN_SUCCESS,
GET_MEALPLAN,
GET_MEALPLAN_SUCCESS,
DELETE_MEALPLAN,
} from '../actions/mealplan.actions';

import { SET_ALERT } from '../actions/ui.actions';

export const saveMealPlanMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    if (action.type === SAVE_MEALPLAN) {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify(action.payload);
      try {
        const res = await axios.post('/api/mealplans', body, config);
        dispatch({
            type: SAVE_MEALPLAN_SUCCESS,
            payload: res.data
        });
      } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach((error,i) => dispatch({
            type: SET_ALERT, 
            payload: {
              msg: error.msg,
              alertType: "danger",
              id: i
          }}));
        }
      }
    }
  };

  
export const getMealPlanMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    if (action.type === GET_MEALPLAN) {
      try {
        const res = await axios.get('/api/mealplans', action.payload.user);
        dispatch({
            type: GET_MEALPLAN_SUCCESS,
            payload: res.data
        });
      } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach((error,i) => dispatch({
            type: SET_ALERT, 
            payload: {
              msg: error.msg,
              alertType: "danger",
              id: i
          }}));
        }
      }
    }
  };

  
export const deleteMealPlanMiddleware = ({ dispatch }) => next => async action => {
  next(action);
  if (action.type === DELETE_MEALPLAN) {
    try {
      await axios.delete('/api/mealplans', action.payload.user);
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error,i) => dispatch({
          type: SET_ALERT, 
          payload: {
            msg: error.msg,
            alertType: "danger",
            id: i
        }}));
      }
    }
  }
};



  
  
  
  