export const UI = '[ui]'

export const SET_ALERT = `${UI} Set Alert - command`
export const REMOVE_ALERT = `${UI} Remove Alert - command`
export const REMOVING_ALERT = `${UI} Removing Alert - event`
export const TOGGLE_DARK_MODE = `${UI} Toggle Dark Mode - command`
export const TOGGLE_RIGHT_SIDE_NAV = `${UI} Toggle Right Side Nav - command`
export const SET_ACTIVE_NAV = `${UI} Set Active Nav - command`

export const setAlert = (msg, alertType, id) => ({
    type: SET_ALERT,
    payload: {
        msg,
        alertType,
        id
    }
})

export const toggleDarkMode = (isDarkMode) => ({
    type: TOGGLE_DARK_MODE,
    payload: {
        isDarkMode
    }
})

export const toggleShowRightSideNav = (showRightSideNav) => ({
    type: TOGGLE_RIGHT_SIDE_NAV,
    payload: {
        showRightSideNav
    }
})

export const setActiveNav = (activeNav) => ({
    type: SET_ACTIVE_NAV,
    payload: {
        activeNav
    }
})