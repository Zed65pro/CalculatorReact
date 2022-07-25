import { TextField } from "@material-ui/core";
import React from "react";

const AtomInput = (props) => {
  return (
    <TextField
      onChange={props.onChange}
      className={props.className}
      label={props.label}
      variant={props.variant}
      color={props.color}
      value={props.value}
      fullWidth
      style={props.style}
    >
      {props.children}
    </TextField>
  );
};

export default AtomInput;
