import { Typography } from "@material-ui/core";
import React from "react";
import Calculator from "../../organisms/Calculator/Calculator";

/**@module pages/MainPage */


/**
 * page component - MainPage of the calculator App
 * @returns {JSX.Element}
 */
const MainPage = () => {
  return (
    <div>
      <Typography variant="h3" color="textSecondary" align="center">
        Calculator
      </Typography>
      <Calculator />
    </div>
  );
};

export default MainPage;
