import React, { useState } from "react";

import { Container } from "@material-ui/core";
import AtomInput from "../../atoms/muiAtomInput/AtomInput";
import Operations from "../../molecules/Operations/Operations";

import useStyles from "../../organisms/Calculator/styles";

import { handleClick } from "../../../services/handleCalculator";

const Calculator = () => {
  const classes = useStyles();
  const [operation, setOperation] = useState("");

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
