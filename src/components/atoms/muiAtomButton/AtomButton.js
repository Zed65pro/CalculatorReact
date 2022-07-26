import React from "react";
import { Button } from "@material-ui/core";

/**@module atoms/muiAtomButton */

/**
 * Atomic button component
 * @function
 * @name AtomButton
 * @param {Object} props - properties of the button
 * @param {String} className 
 * @param {Function} onClick
 * @param {String} type
 * @param {bool} disabled
 * @param {String} color - MuiButton color
 * @param {Object} style - Button styles
 * @param {String} variant - MuiButton variant
 * @returns {JSX.Element}
 */
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
