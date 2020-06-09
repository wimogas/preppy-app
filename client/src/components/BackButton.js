import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Button, Block } from "../components";

const BackButton = ({ history, ...props }) => {
  return (
    <Block row align={"flex-start"}>
      <Button
        icon
        onClick={() => history.goBack()}
        style={{ marginLeft: "0", paddingLeft: "0" }}
      >
        <FaArrowLeft />
      </Button>
    </Block>
  );
};

export default BackButton;
