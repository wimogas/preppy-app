import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import { Button, Block } from "../components";
import styled from "styled-components";
import {darken} from 'polished'
import { FaUser, FaHome} from "react-icons/fa";
import {ReactComponent as Logo} from '../assets/logo.svg'
import { toggleDarkMode, setActiveNav} from "../redux/actions/ui.actions";

const CustomNav = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0;
  width: calc(100%);
  background-color: ${props => props.theme.isDark ? darken(0.04,props.theme.colors.background) : props.theme.colors.primary};
  padding: ${props => props.theme.sizes.radius}px 0px;
  z-index: 500;
  @media screen and (min-width: 500px) {
    top: 0;
    max-height: 50px;
    border-radius: 0px 0px 32px 32px;
  }
  border-radius: 32px 32px 0px 0px;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2)
`;

const Nav = ({
  user,
  children,
  history,
  setActiveNav,
  activeNav,
  ...props
}) => {

  return (
    <>
        <CustomNav {...props}>
          <Block row space={"evenly"} hide={"desktop"}>
            <Button nav active={activeNav === "meal-plan"} onClick={() => {
              setActiveNav("meal-plan")
              history.push("/meal-plan")
            }}>
              <FaHome />
            </Button>
            <Button nav active={activeNav === "user"} onClick={() => {
              setActiveNav("user")
              history.push("/user")
            }}>
              <FaUser />
            </Button>
          </Block>
          <Block row hide={"mobile"}>
            <Block flex={"0.2"} justify={"flex-start"}>
                <Link to="/meal-plan" onClick={() => setActiveNav("meal-plan")}><Logo style={{ fill: "white", maxWidth: "100px", marginLeft: "32px"}}></Logo></Link>
            </Block>
            <Block
              row
              justify={"flex-end"}
              flex={"2"}
              margin={"0px 16px 0px 0px"}
            >
              <Button nav active={activeNav === "user"} onClick={() => {
              setActiveNav("user")
              history.push("/user")
            }}>
                <FaUser />
              </Button>
            </Block>
          </Block>
        </CustomNav>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  activeNav: state.ui.activeNav,
});

export default connect(mapStateToProps, { toggleDarkMode, setActiveNav })(Nav);
