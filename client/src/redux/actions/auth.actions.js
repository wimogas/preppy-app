
const AUTH = "[auth]"
export const REGISTER = `${AUTH} Register User`
export const LOAD_USER = `${AUTH} Load User`
export const SIGN_IN = `${AUTH} Sign In`
export const REGISTER_SUCCESS = `${AUTH} Register Success`
export const REGISTER_FAIL = `${AUTH} Register Fail`
export const USER_LOADED = `${AUTH} User Loaded`
export const AUTH_ERROR = `${AUTH} Error`
export const LOGIN_SUCCESS = `${AUTH} Login Success`
export const LOGIN_FAIL = `${AUTH} Login Fail`
export const LOGOUT = `${AUTH} Logout`

// Load User
export const loadUser = () => ({
  type: LOAD_USER,
})

// Register User
export const register = (name, email, password) => ({
  type: REGISTER,
  payload: {
    user: {
      name,
      email,
      password
    }
  }
});

// Login User
export const login = (email, password) => ({
  type: SIGN_IN,
  payload: {
    user: {
      email,
      password
    }
  }
})

// Logout / Clear Profile
export const logout = () => ({
  type: LOGOUT
});