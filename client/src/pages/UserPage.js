import React from "react";
import { connect } from "react-redux";
import { FaSun, FaMoon} from "react-icons/fa";

import { Text, Block, Button} from "../components";
import { toggleDarkMode} from "../redux/actions/ui.actions";
import { logout } from "../redux/actions/auth.actions";

const UserPage = ({ user, logout, isDarkMode, toggleDarkMode }) => {
  return (
    <>
      <Block row middle space={"between"} margin={"0px 0px 16px 0px"}>
      <Text h1>My Account</Text>
      </Block>
      <Block card maxWidth={"500px"}>
        <Block row space={"between"} middle>
          <Text>Name:</Text>
          <Text>{user && user.name}</Text>
        </Block>
        <Block row space={"between"} middle>
          <Text>Email:</Text>
          <Text>{user && user.email}</Text>
        </Block>
        <Block row middle space={"between"}>
          <Text>Dark Mode: ({isDarkMode ? "ON" : "OFF"})</Text> 
          <Button default small maxWidth={"100px"} onClick={() => toggleDarkMode(isDarkMode)}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </Block>
        <Block row padding={"50px 0px 0px 0px"}>
          <Button alert small onClick={() => logout()}>
            Log out
          </Button>
        </Block>
      </Block>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isDarkMode: state.ui.isDarkMode,
});

export default connect(mapStateToProps, {logout, toggleDarkMode })(UserPage);
