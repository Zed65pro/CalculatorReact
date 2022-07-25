import React from "react";
import { Button } from "@material-ui/core";

const AtomButton = (props) => {
  return (
    <Button
      className={props.className}
      onClick={props.onClick}
      type={props.type}
      disabled={props.isDisabled}
      color={props.color}
      variant={props.variant}
      fullWidth
      style={props.style}
    >
      {props.children}
    </Button>
  );
};

export default AtomButton;
