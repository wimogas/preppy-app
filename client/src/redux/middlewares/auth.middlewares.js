import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import {
  REGISTER,
  LOAD_USER,
  SIGN_IN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/auth.actions';

import { SET_ALERT } from '../actions/ui.actions';

export const loadUserMiddleware = ({ dispatch }) => next => async action => {
  next(action);
  if (action.type === LOAD_USER) {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/api/auth');
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  }
};

export const signInMiddleware = ({ dispatch }) => next => async action => {
  next(action);
  if (action.type === SIGN_IN) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const {email, password} = action.payload.user
    const body = JSON.stringify({ email, password });
  
    try {
      const res = await axios.post('/api/auth', body, config);
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch({
        type: LOAD_USER,
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
      dispatch({
        type: LOGIN_FAIL
      });
    }
  }
};

export const signUpMiddleware = ({ dispatch }) => next => async action => {
  next(action);
  if (action.type === REGISTER) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const {name, email, password} = action.payload.user;
    const body = JSON.stringify({name, email, password});
    try {
      const res = await axios.post('/api/users', body, config);
      dispatch({
        type: SET_ALERT,
        payload:{
          msg: "User successfully created",
          alertType: "success",
          id: 0
      }
      });
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch({
        type: LOAD_USER,
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
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  }
};

