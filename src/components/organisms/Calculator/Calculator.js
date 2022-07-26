import React, { useState } from "react";

import { Container } from "@material-ui/core";
import AtomInput from "../../atoms/muiAtomInput/AtomInput";
import Operations from "../../molecules/Operations/Operations";

import useStyles from "../../organisms/Calculator/styles";

import { handleClick } from "../../../services/handleCalculator";

/**@module organisms/Calculator */


/**
 * Organism component which renders the main body of the calculator
 * @returns {JSX.Element}
 */
const Calculator = () => {

  /**
   * useStyles classes css
   * @typedef {callback} classes
   */
  const classes = useStyles();

  /**
   * React useState reference state - state of the calculator input operation
   * @typedef {String} operation
   * @const
   */

  /**
   * React useState state setter - setter function for operation
   * @callback setOperation
   * @param {isShowTasks} state
   * @function
   * @returns {void}
   */
  const [operation, setOperation] = useState("");

  /**
   * Handles input field changes
   * @param {Event} e - Event
   */
  const handleChange = (e) => {
    console.log(operation)
    setOperation(e.target.value);
  };

  return (
    <Container fixed className={classes.op}>
      <AtomInput
        label="Calculate..."
        variant="outlined"
        color="primary"
        onChange={handleChange}
        value={operation}
        className={classes.root}
      />
      <Operations
        handleClick={(event) => handleClick(event, operation, setOperation)}
      />
    </Container>
  );
};

export default Calculator;
