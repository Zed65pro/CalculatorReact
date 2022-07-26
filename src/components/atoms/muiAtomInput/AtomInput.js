import { TextField } from "@material-ui/core";
import React from "react";
/**@module atoms/muiAtomInput */

/**
 * Atomic Input field component
 * @function
 * @name AtomInput
 * @param {Object} props - properties of the Input field
 * @param {String} className 
 * @param {Function} onChange
 * @param {String} label
 * @param {String} value
 * @param {String} color - MuiTextField color
 * @param {Object} style - Input styles
 * @param {String} variant - MuiTextField variant
 * @returns {JSX.Element}
 */
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
