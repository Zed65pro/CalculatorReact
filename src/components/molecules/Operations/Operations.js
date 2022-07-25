import { Grid } from "@material-ui/core";
import React from "react";
import AtomButton from "../../atoms/muiAtomButton/AtomButton";
import { OPERATIONS } from "../../../consts/consts";
import useStyles from "./styles";

const Operations = ({ handleClick }) => {
  const classes = useStyles();

  const highlight = (op) =>
    op === "÷" || op === "*" || op === "-" || op === "+" || op === "="
      ? "highlight"
      : "";

  return (
    <Grid container>
      {OPERATIONS.map((op) => {
        return op !== "0" ? (
          <Grid item md={3} key={`${op}001`}>
            <AtomButton
              variant="contained"
              color="default"
              onClick={handleClick}
              className={`${classes.opButton} ${classes[highlight(op)]}`}
            >
              {op}
            </AtomButton>
          </Grid>
        ) : (
          <Grid item md={6} key={`${op}001`}>
            <AtomButton
              variant="contained"
              color="default"
              onClick={handleClick}
              className={classes.opButton}
            >
              {op}
            </AtomButton>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Operations;
