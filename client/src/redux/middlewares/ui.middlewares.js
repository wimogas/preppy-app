import { SET_ALERT, REMOVE_ALERT,REMOVING_ALERT, TOGGLE_DARK_MODE, SET_ACTIVE_NAV } from '../actions/ui.actions';

export const setAlertMiddleware = ({ dispatch, getState }) => next => action => {
    next(action);
    if(action.type === SET_ALERT){
        dispatch({type:REMOVING_ALERT})
    }
    if (action.type === REMOVING_ALERT) {
        const state = getState()
        if(state.ui.alerts.length > 0) {
            setTimeout(() => {
                dispatch({type:REMOVE_ALERT})
            },3000)
        }
    }
};

export const toggleDarkModeLocalStorageMiddleware = ({dispatch}) => next => action => {
    next(action)
    if ( action.type === TOGGLE_DARK_MODE) {
        localStorage.setItem("isDarkMode", !action.payload.isDarkMode);
    }
}

export const setActiveNavMiddleware = ({dispatch}) => next => action => {
    next(action)
    if ( action.type === SET_ACTIVE_NAV) {
        localStorage.setItem("activeNav", JSON.stringify(action.payload.activeNav));
    }
}