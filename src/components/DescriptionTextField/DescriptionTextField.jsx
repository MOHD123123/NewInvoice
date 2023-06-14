// import React from "react";
import DarkInputFiled from "../DarkInputFiled/DarkInputFiled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const DescriptionTextField = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DarkInputFiled darkInputName="Description" />
        </Grid>

        <Grid item xs={3}>
          <DarkInputFiled darkInputName="Qty" />
        </Grid>

        <Grid item xs={3}>
          <DarkInputFiled darkInputName="Price" />
        </Grid>
        <Grid item xs={3}>
          <DarkInputFiled darkInputName="Amount" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DescriptionTextField;
