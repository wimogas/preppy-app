import { SET_ALERT, REMOVE_ALERT, TOGGLE_DARK_MODE,TOGGLE_RIGHT_SIDE_NAV, SET_ACTIVE_NAV } from "../actions/ui.actions";

const initalState = {
  alerts: [],
  isDarkMode: JSON.parse(localStorage.getItem("isDarkMode")),
  showRightSideNav: false,
  activeNav: JSON.parse(localStorage.getItem("activeNav")),
  newNotification: true
};

export const uiReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return { ...state, alerts: [action.payload] };
    case REMOVE_ALERT:
      return { ...state, alerts: [] };
    case TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    case TOGGLE_RIGHT_SIDE_NAV:
      return { ...state, showRightSideNav: !action.payload.showRightSideNav, newNotification: false};
    case SET_ACTIVE_NAV:
      return { ...state, activeNav: action.payload.activeNav};
    default:
      return state;
  }
};
