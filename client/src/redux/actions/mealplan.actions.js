
const MEALPLAN = "[MEALPLAN]"

export const SAVE_MEALPLAN = `${MEALPLAN} Save`
export const SAVE_MEALPLAN_SUCCESS = `${MEALPLAN} Save Success`
export const GET_MEALPLAN = `${MEALPLAN} Get`
export const GET_MEALPLAN_SUCCESS = `${MEALPLAN} Get Success`
export const DELETE_MEALPLAN = `${MEALPLAN} Delete`

export const saveMealPlan = (user, breakfast, lunch, dinner) => ({
    type: SAVE_MEALPLAN,
    payload: {
      user,
      breakfast,
      lunch,
      dinner
    }
  });
  
export const getMealPlan = (user) => ({
  type: GET_MEALPLAN,
  payload: user
});

export const deleteMealPlan = (user) => ({
  type: DELETE_MEALPLAN,
  payload: user
});