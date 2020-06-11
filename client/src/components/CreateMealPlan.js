import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

import { Text, Block, Button, Spinner } from "../components";

import { saveMealPlan } from '../redux/actions/mealplan.actions'

const Main = ({ user, saveMealPlan }) => {
  const [btnLoading, setBtnLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const [step, setStep] = useState(1)

  const [dietActive, setDietActive] = useState()
  const [activeCuisine, setActiveCuisine] = useState([])
  const [activeIntolerances, setActiveIntolerances] = useState([])

  const [diet, setDiet] = useState("")
  const [cuisine, setCuisine] = useState([])
  const [intolerances, setIntolerances] = useState("")

  const handleGetMealPlan = async () => {
    const breakfast = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=7&type=breakfast&diet=${diet}&minCalories=300&maxCalories=600&intolerances=${intolerances}&sort=random&apiKey=d02f946e99a84879bf3b2609933b9633`);
    const breakfastData = await breakfast.json();
    const lunch = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=7&type=salad&diet=${diet}&cuisine=${cuisine}&minCalories=600&maxCalories=800&intolerances=${intolerances}&sort=random&apiKey=d02f946e99a84879bf3b2609933b9633`);
    const lunchData = await lunch.json();
    const dinner = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=7&type=maincourse&diet=${diet}&minCalories=800&maxCalories=1100&intolerances=${intolerances}&cuisine=${cuisine}&sort=random&apiKey=d02f946e99a84879bf3b2609933b9633`);
    const dinnerData = await dinner.json();
    await saveMealPlan(user, breakfastData.results, lunchData.results, dinnerData.results)
  }

  const DIETS = [
    "vegetarian",
    "vegan",
    "paleo",
    "ketogenic",
    "whole30"

  ]
  
  const CUISINES = [
  "african",
  "american",
  "british",
  "cajun",
  "caribbean",
  "chinese",
  "french",
  "greek",
  "indian",
  "italian",
  "japanese",
  "korean",
  "mediterranean",
  "mexican",
  "nordic",
  "thai",
  "vietnamese",
]

const INTOLERANCES = [
  "dairy",
  "egg",
  "gluten",
  "grain",
  "peanut",
  "seafood",
  "sesame",
  "shellfish",
  "soy",
  "sulfite",
  "wheat",
]

 const FirstStep = () => (
   <>
   <Text h2>Choose your dietary preference:</Text>
   <Text light>(Optional)</Text>
    <Block row center space={"between"} margin={"16px 0px"}>
      {DIETS.map((currDiet,i) => (
        <Button key={i} pill default={dietActive !== `${currDiet}`} primary={dietActive === `${currDiet}`} onClick={() => {
          if(diet !== `${currDiet}`) {
            setDietActive(`${currDiet}`); 
            setDiet(`${currDiet}`)
          } else {
            setDietActive("")
            setDiet("")
          }
        }} maxWidth={"120px"}>
          {`${currDiet.charAt(0).toUpperCase() + currDiet.slice(1)}`}
        </Button>
      ))}
    </Block>
    <Block row center justify={"flex-end"}>
      <Button secondary onClick={() => setStep(2)}>
        Next
      </Button>
    </Block>
  </>
 )

 const SecondStep = () => (
   <>
    <Text h2>Choose your favorite cuisines:</Text>
    <Text light>(Optional)</Text> 
    <Block row wrap={"true"} margin={"16px 0px"}>
    {CUISINES.map((currCuisine, i) => {
      const foundIndex = activeCuisine.findIndex(index => index === i)
      return(
        <Block key={i} margin={"0px 6px 0px 0px"}>
          <Button pill default={foundIndex < 0} primary={foundIndex >= 0}  onClick={() => {
            if(cuisine.length > 0) {
              if(foundIndex < 0) {
                setActiveCuisine([...activeCuisine, i])
                setCuisine([...cuisine, currCuisine])
              } else {
                setActiveCuisine(activeCuisine.filter(item => item !== i))
                setCuisine(cuisine.filter(cuisine => cuisine !== currCuisine))
              }
            } else {
              setActiveCuisine([i])
              setCuisine([currCuisine])
            }
          }} maxWidth={"130px"}>
            {currCuisine.charAt(0).toUpperCase() + currCuisine.slice(1)}
          </Button>
        </Block>
      )} )}
    </Block>
    <Block row center space={"between"}>
      <Button default onClick={() => setStep(1)}>
        Back
      </Button>
      <Button secondary onClick={() => setStep(3)}>
        Next
      </Button>
    </Block>
    </>
 )

 const ThirdStep = () => (
   <>
    <Text h2>Choose your intolerances:</Text>
    <Text light>(Optional)</Text>
    <Block row wrap={"true"} margin={"16px 0px"}>
      {INTOLERANCES.map((currIntolerance, i) => {
          const foundIndex = activeIntolerances.findIndex(index => index === i)
          return(
          <Block key={i} margin={"0px 6px 0px 0px"}>
            <Button key={i} pill default={foundIndex < 0} primary={foundIndex >= 0} onClick={() => {
            if(intolerances.length > 0) {
              if(foundIndex < 0) {
                setActiveIntolerances([...activeIntolerances, i])
              }
              setIntolerances(`${intolerances}, ${currIntolerance}`)
            } else {
              setActiveIntolerances([i])
              setIntolerances(`${currIntolerance}`)
            }
          }} maxWidth={"120px"}>
              {`${currIntolerance.charAt(0).toUpperCase() + currIntolerance.slice(1)}`}
            </Button>
          </Block>
        )
        })}
    </Block>
    <Block row center space={"between"}>
      <Button default onClick={() => setStep(2)}>
        Back
      </Button>
      <Button secondary onClick={() => {
        handleGetMealPlan()
        setBtnLoading(true)
        setTimeout(() => setRedirect(true), 5000)
        }}>
          {btnLoading ? <Spinner xtrasmall btn/> : "Create Meal Plan"}
      </Button>
    </Block> 
  </>
 )

  const CreateMealPlan = () => (
    <Block card maxWidth={"500px"}>
      {step && step === 1 ? (
        <FirstStep/>
        ) : step === 2 ? (
          <SecondStep/>
        ) : (
          <ThirdStep/>
        )
      }
    </Block>
  )

  return (
    <>
    {redirect && <Redirect to="/meal-plan"/>}
    <Text h1> Create Meal Plan</Text>
    <CreateMealPlan/>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  mealPlan: state.mealPlan.mealPlan
});

export default connect(mapStateToProps, { saveMealPlan } )(Main);
