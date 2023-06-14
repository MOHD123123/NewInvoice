import Box from "@mui/material/Box";
// import React from "react";
import style from "./index.module.css";

const LightInputField = (prop) => {
  return (
    <Box>
      <input
        className={`${style.invoiceHeaderInput} ${prop.className}`}
        type="text"
        value={prop.LightInputValue}
        onChange={prop.onChange}
        placeholder={prop.placeholder}
        id="number"
        name={prop.name}
      />
    </Box>
  );
};

export default LightInputField;
