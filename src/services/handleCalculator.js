import { evaluate } from "mathjs";

const regexFind = (char) => {
  const regex = /[+\-*÷]/;
  return regex.test(char);
};

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

      if ((regexFind(newValue[i]) && isFound) || i === 0) {
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
