import { evaluate } from "mathjs";

/**@module /services */

/**
 * A function used to find regex expression for calculator operators.
 * @function
 * @name regexFindOp
 * @param {String} char - Calculator character
 * @return {bool} - true if regex expression found, false otherwise
 */
const regexFindOp = (char) => {
  const regex = /[+\-*÷]/;
  return regex.test(char);
};

/**
 * Handles the calculator buttons
 * @function
 * @param {Event} e 
 * @param {String} operation - Entire calculator string/operation- passed by Calculator Component
 * @param {callback} setOperation -used to set the operation- passed by Calculator Component
 * @returns {void}
 */
export const handleClick = (e, operation, setOperation) => {
  if (e.target.innerText === "AC") {
    setOperation("");
    return;
  }
  if (e.target.innerText === "=") {
    try {

      const operationFixed = operation.replace('÷','/');

      setOperation(evaluate(operationFixed).toString());
    } catch (error) {
      alert("Please enter a valid expression...:/");
    }
    return;
  }
  if (e.target.innerText === "+/-") {
    let newValue = operation;
    let isFound = false;

    for (let i = newValue.length - 1; i >= 0; i--) {
      console.log(i);
      if (typeof parseInt(operation[i]) === "number" && !isFound) {
        newValue =
          newValue.substring(0, i + 1) +
          ")" +
          newValue.substring(i + 1, newValue.length);
        isFound = true;
        continue;
      }

      if ((regexFindOp(newValue[i]) && isFound) || i === 0) {
        console.log("sadasd");

        i === 0
          ? (newValue = "(-" + newValue.substring(i, newValue.length))
          : (newValue =
              newValue.substring(0, i + 1) +
              "(-" +
              newValue.substring(i + 1, newValue.length));
        break;
      }
    }


    setOperation(newValue);
    return;
  }

  setOperation(`${operation}${e.target.innerText}`);
};
