import { makeStyles } from "@material-ui/core";

const focusedColor = "rgba(68, 65, 66, 0.8)";

export default makeStyles(()=>({
    op: {
        margin: "auto",
        padding: "10px",
      },
      root: {
        // input label when focused
        "& label.Mui-focused": {
          color: focusedColor
        },
        // focused color for input with variant='standard'
        "& .MuiInput-underline:after": {
          borderBottomColor: focusedColor
        },
        // focused color for input with variant='filled'
        "& .MuiFilledInput-underline:after": {
          borderBottomColor: focusedColor
        },
        // focused color for input with variant='outlined'
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: focusedColor
          },
        "& .PrivateNotchedOutline-root-3": {
          borderRadius: "0",
        }
        }
      }
}))