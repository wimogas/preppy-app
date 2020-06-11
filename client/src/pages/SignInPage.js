import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../redux/actions/auth.actions";

import {
  Button,
  Block,
  Text,
  Input,
  FormContainer,
  BackButton
} from "../components";
import { setActiveNav } from '../redux/actions/ui.actions';

const SignInPage = ({ user, login, history, setActiveNav }) => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123123");

  const handleSignIn = e => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      setActiveNav("meal-plan")
    }
  };
  const [redirectTo, setRedirectTo] = useState(false);

  useEffect(() => {
    if (user) {
      setRedirectTo(true);
    }
  }, [user]);
  return (
    <Block full>
      {redirectTo ? <Redirect to="/meal-plan" /> : null}
      <Block flex={"0.5"}>
        <BackButton history={history} />
      </Block>
      <Block center middle>
        <Block card center middle style={{maxWidth: "500px", maxHeight: "400px"}}>
        <Block center middle flex={"2"}>
        <Text h1>Welcome Back</Text>
        <Text>Sign in to access your recipes, meal plans and more.</Text>
      </Block>
      <Block style={{width: "100%"}} flex={"1"}>
        <FormContainer onSubmit={e => handleSignIn(e)}>
          <Input
            title={"Email"}
            type={"text"}
            name={"email"}
            value={email}
            placeholder={"Email"}
            handleChange={e => setEmail(e.target.value)}
            style={{ marginBottom: "16px" }}
          />
          <Input
            title={"Password"}
            type={"password"}
            name={"password"}
            value={password}
            placeholder={"Password"}
            handleChange={e => setPassword(e.target.value)}
            style={{ marginBottom: "16px" }}
          />
          <Button full primary>
            Sign in
          </Button>
        </FormContainer>
        </Block>
        </Block>
        </Block>
        <Block row center middle>
          <Text>New?</Text>
          <Link to="/sign-up" style={{ marginLeft: "8px" }}>
            Create an account
          </Link>
        </Block>
      </Block>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, { login, setActiveNav })(SignInPage);
