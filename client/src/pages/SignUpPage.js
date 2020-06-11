import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  Button,
  Block,
  Text,
  Input,
  FormContainer,
  BackButton
} from "../components";

import { register } from "../redux/actions/auth.actions";
import { setAlert } from "../redux/actions/ui.actions";

const SignUpPage = ({ user, history, register, setAlert }) => {
  const [name, SetName] = useState("Test");
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123123");
  const [confirmPassword, setConfirmPassword] = useState("123123");

  const handleSignIn = e => {
    e.preventDefault();
    if (email && password && password === confirmPassword) {
      register(name, email, password);
    } else if (password !== confirmPassword) {
      setAlert("Passwords do not match", "danger", 0);
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
        <Block card center middle style={{maxWidth: "500px"}}>
          <Block center middle flex={"2"}>
            <Text h1>Create an Account</Text>
            <Text>Sign up to get access to +5000 recipes and exclusive Meal Plans</Text>
          </Block>
          <Block style={{width: "100%"}} flex={"1"}>
            <FormContainer
              onSubmit={e => handleSignIn(e)}
              style={{ margin: "16px 0px" }}
            >
              <Input
                title={"Name"}
                type={"text"}
                name={"name"}
                value={name}
                placeholder={"Name"}
                handleChange={e => SetName(e.target.value)}
                style={{ marginBottom: "16px" }}
              />
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
              <Input
                title={"Confirm Password"}
                type={"password"}
                name={"confirmpassword"}
                value={confirmPassword}
                placeholder={"Confirm Password"}
                handleChange={e => setConfirmPassword(e.target.value)}
                style={{ marginBottom: "16px" }}
              />
              <Button full primary type={"submit"}>
                Create an account
              </Button>
            </FormContainer>
          </Block>
        </Block>
      </Block>
      <Block row center middle>
        <Text>Already have an account?</Text>
        <Link to="/sign-in" style={{ marginLeft: "8px" }}>
          Sign in
        </Link>
      </Block>
    </Block>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, {register, setAlert})(SignUpPage);
