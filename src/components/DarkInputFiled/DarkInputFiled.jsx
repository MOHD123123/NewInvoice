// import React from "react";
import Box from "@mui/material/Box";
import style from "./index.module.css";

const DarkInputFiled = (prop) => {
  return (
    <Box>
      <input className={style.BillDate} type="text" value={prop.darkInputName} id="name"/>
    </Box>
  );
};

export default DarkInputFiled;
