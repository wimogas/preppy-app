import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {ReactComponent as Logo} from '../assets/logo.svg'

import { Text, Block, Button } from "../components";

const HomePage = ({ user, history }) => {
  const [redirectTo, setRedirectTo] = useState(false);

  useEffect(() => {
    if (user) {
      setRedirectTo(true);
    }
  }, [user]);

  return (
    <Block full>
      {redirectTo ? <Redirect to="/main-screen" /> : null}
      <Block center middle>
        <Block card center middle style={{maxWidth: "500px", maxHeight: "400px"}}>
          <Block center middle flex={"2"}>
            <Logo style={{ fill: "#0C0B24", maxWidth:"250px" }}></Logo>
            <Text style={{marginTop: "10px"}}>Welcome to Preppy.</Text>
            <Text center style={{padding: "16px"}}>Start your Weekly Meal Plan, it's quick, easy and free!</Text>
          </Block>
          <Block flex={"1"} style={{width: "100%"}}>
          <Button full primary onClick={() => history.push("/sign-in")}>
          Sign in
        </Button>
        <Button full icon onClick={() => history.push("/sign-up")}>
          Sign up
        </Button>
      
          </Block>
        
        </Block>
        </Block>
    </Block>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(HomePage);
