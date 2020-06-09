import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from 'styled-components'

import {Text, Block, BackButton} from '../components'

const CustomImg = styled.img`
  max-width: 172px;
  border-radius: 12px;
  margin-right: 16px;
  @media screen and (max-width: 450px) {
    width: 100%;
    max-width: 100%;
  }
`
const Single = ({match, history}) => {

  const [recipeData, setRecipeData] = useState()

  const getSingle = async (i) => {
    const res = await fetch(`https://api.spoonacular.com/recipes/${i}/information?apiKey=d02f946e99a84879bf3b2609933b9633`);
    const data = await res.json();
    await setRecipeData(data)
  }
  
  useEffect(() => {
    getSingle(match.params.itemId)

  },[])

  return (
    <>
     {recipeData && (
        <Block card maxWidth={"600px"}>  
        <BackButton history={history} />
         <Block row wrap={"true"} middle padding={"0px 0px 16px 0px"} style={{borderBottom: "1px solid #EFF3FB"}}>
           <CustomImg src={`https://spoonacular.com/recipeImages/${recipeData.id}-312x231.jpg`}></CustomImg>
           <Block >
            <Text h1>{recipeData.title}</Text> 
             <Text style={{marginRight:"16px"}}>{recipeData.servings} Servings</Text>
             <Text>Ready in: {recipeData.readyInMinutes} Minutes</Text>
           </Block>
         </Block>
         <Block padding={"12px 0px 0px 0px"}>
          <Text h2>Ingredients</Text>
          {recipeData.extendedIngredients && recipeData.extendedIngredients.map((ingredient,i) => (
            <Block row middle>
              <Block row center style={{maxWidth:"80px"}}>
              <img alt={`${i}`} style={{maxWidth:"45px", maxHeight:"45px"}} src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}/>
              </Block>
            <Text key={i}>{ingredient.amount.toFixed(2)} {ingredient.unit} {ingredient.name}</Text>
            </Block>
          ))}
         </Block>
         <Block padding={"12px 0px"}>
         {recipeData.analyzedInstructions.length>0 && (
           <>
            <Text h2>Instructions</Text>
            {recipeData.analyzedInstructions[0].steps.map((step,i) => (
              <Text key={i}>{i + 1}. {step.step}</Text>
            ))}
          </>
         )}
         </Block>
       </Block>
     )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, )(Single);
