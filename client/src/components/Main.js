import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {Link, Redirect} from 'react-router-dom'
import moment from 'moment'
import { FaThLarge, FaThList, FaAngleUp, FaAngleDown } from "react-icons/fa";

import { Text, Block, Button, Spinner } from "../components";

import { getMealPlan, deleteMealPlan } from '../redux/actions/mealplan.actions'


const Main = ({ user, getMealPlan, mealPlan, deleteMealPlan }) => {
 const [btnLoading, setBtnLoading] = useState(false)
 const [redirect, setRedirect] = useState(false)
 const [full, setFull] = useState(true)


  useEffect(() => {
      getMealPlan(user)
    // eslint-disable-next-line
  }, [])

  const SingleDay = (i) => {
    const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const DAY = DAYS[i.i]
    const TODAY = moment().day()
    const HOUR = moment().hour()
    const MATCHES_TODAY = DAYS.indexOf(DAY) === TODAY - 1
    const MATCHES_PAST = DAYS.indexOf(DAY) - TODAY + 1
    const MATCHES_MORNING = HOUR >= 6 && HOUR < 12
    const MATCHES_NOON =  HOUR >= 12 && HOUR < 17
    const MATCHES_EVENING = HOUR >= 17
    const BREAKFAST = mealPlan[0].week[0][i.i]
    const LUNCH = mealPlan[0].week[1][i.i]
    const DINNER = mealPlan[0].week[2][i.i]
    const TOTAL_CALORIES = mealPlan[0].week[0][i.i].nutrition[0].amount + mealPlan[0].week[1][i.i].nutrition[0].amount + mealPlan[0].week[2][i.i].nutrition[0].amount
    const [dropDownDay, setDropDownDay] = useState()

    const handleDropDown = (i) => {
      if(dropDownDay && dropDownDay === i) {
        setDropDownDay(null)
      } else {
        setDropDownDay(i)
      }
      if(dropDownDay === 0) {
        setDropDownDay(null)
      }
    }
    
    return(
    <>
      <Block row middle onClick={() => {
        handleDropDown(i.i)
      }} style={{cursor: "pointer"}}>
        <Text h2 active={MATCHES_TODAY}>{DAY}</Text>
        <Text light style={{marginLeft: "12px"}}>({TOTAL_CALORIES.toFixed(0)} Calories)</Text>
        {MATCHES_PAST < 0 && dropDownDay === i.i ? <FaAngleDown/> : MATCHES_PAST < 0 ? <FaAngleUp/> : null}
      </Block>
      {MATCHES_PAST >= 0 || dropDownDay === i.i ? (
        <>
        {full ? (
        <Block  row wrap="true" margin={"0px 0px 16px 0px"}>
          <Block card float={MATCHES_TODAY && MATCHES_MORNING} done={MATCHES_PAST < 0} margin={"16px" } >
          <Link to={`/meal-plan/${BREAKFAST.id}`}>
            <Text>Breakfast</Text>
            <Block row middle >
              <img alt="" style={{maxWidth: "72px", marginRight:"16px", borderRadius: "6px"}} src={`https://spoonacular.com/recipeImages/${BREAKFAST.id}-312x231.jpg`}></img>
              <Text h3>{BREAKFAST.title}</Text>
            </Block>
            <Text>{BREAKFAST.nutrition[0].amount} Calories</Text>
            </Link>
          </Block>
          <Block card float={MATCHES_TODAY && MATCHES_NOON} done={MATCHES_PAST < 0} margin={"16px"}>
          <Link to={`/meal-plan/${LUNCH.id}`}>
          <Text>Lunch</Text>
            <Block row middle >
            <img alt="" style={{maxWidth: "72px", marginRight:"16px", borderRadius: "6px"}} src={`https://spoonacular.com/recipeImages/${LUNCH.id}-312x231.jpg`}></img>
            <Text h3>{LUNCH.title}</Text>
            </Block>
            <Text >{LUNCH.nutrition[0].amount} Calories</Text>
            </Link>
          </Block>
          <Block card float={MATCHES_TODAY && MATCHES_EVENING} done={MATCHES_PAST < 0} margin={"16px"}>
          <Link to={`/meal-plan/${DINNER.id}`}>
            <Text>Dinner</Text>
            <Block row middle >
              <img alt="" style={{maxWidth: "72px", marginRight:"16px", borderRadius: "6px"}} src={`https://spoonacular.com/recipeImages/${DINNER.id}-312x231.jpg`}></img>
              <Text h3>{DINNER.title}</Text>
            </Block>
            <Text>{DINNER.nutrition[0].amount} Calories</Text>
            </Link>
          </Block>
        </Block>
      ) : (
        <Block wrap="true" margin={"0px 0px 16px 0px"}>
          <Link to={`/meal-plan/${BREAKFAST.id}`}>
            <Block row middle>
              <img alt="" style={{maxWidth: "42px", marginRight:"16px", borderRadius: "6px"}} src={`https://spoonacular.com/recipeImages/${BREAKFAST.id}-312x231.jpg`}></img>
              <Text primary={MATCHES_TODAY && MATCHES_MORNING} bold={MATCHES_TODAY && MATCHES_MORNING}>{BREAKFAST.title}</Text>
            </Block>
          </Link>
          <Link to={`/meal-plan/${LUNCH.id}`}>
            <Block row middle>
              <img alt="" style={{maxWidth: "42px", marginRight:"16px", borderRadius: "6px"}} src={`https://spoonacular.com/recipeImages/${LUNCH.id}-312x231.jpg`}></img>
              <Text primary={MATCHES_TODAY && MATCHES_NOON} bold={MATCHES_TODAY && MATCHES_NOON}>{LUNCH.title}</Text>
            </Block>
          </Link>
          <Link to={`/meal-plan/${DINNER.id}`}>
            <Block row middle>
              <img alt="" style={{maxWidth: "42px", marginRight:"16px", borderRadius: "6px"}} src={`https://spoonacular.com/recipeImages/${DINNER.id}-312x231.jpg`}></img>
              <Text primary={MATCHES_TODAY && MATCHES_EVENING} bold={MATCHES_TODAY && MATCHES_EVENING}>{DINNER.title}</Text>
            </Block>
          </Link>
        </Block>
      )}  
    </>
      ) : (<></>)}
      
    </>
  )}

  return (
   <>
      {redirect && <Redirect to="/create-meal-plan"/>}
        <Block row middle space={"between"}>
          <Text h1 style={{margin: "0px 0px 32px 0px"}}>This Week's Meal Plan</Text>
          {mealPlan && mealPlan.length > 0 && (
            <Button secondary onClick={() => {
            deleteMealPlan(user)
            setBtnLoading(true)
            setTimeout(() => setRedirect(true), 1000)
            }}>
              {btnLoading ? <Spinner xtrasmall btn/> : "Start New Plan"}
          </Button>
          )}
        </Block>
          <Block row justify={"flex-end"}><Button icon default onClick={() => setFull(!full)}>{full ? <FaThList/> : <FaThLarge/>}</Button></Block>
       {mealPlan && mealPlan.length > 0 ? mealPlan[0].week[0].map((day,i) => (
        <Block key={i}>
          <SingleDay i={i}/>
        </Block>
       )): (
         <Block card center maxWidth={"500px"}>
           <Text style={{textAlign: "center", marginBottom: "16px"}}>Oh no! Your Meal Plan has not yet been created, let's fix that, shall we!</Text>
            <Button secondary onClick={() => setRedirect(true)} maxWidth={"250px"} style={{margin: "auto"}}>Create Meal Plan</Button>
         </Block>
       )}
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  mealPlan: state.mealPlan.mealPlan
});

export default connect(mapStateToProps, { getMealPlan, deleteMealPlan } )(Main);
