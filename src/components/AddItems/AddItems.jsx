import React from "react";
import LightInputField from "../LightInputField/LightInputField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const AddItems = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <LightInputField LightInputValue="Item 1" />
        </Grid>

        <Grid item xs={3}>
          <LightInputField LightInputValue="0" />
        </Grid>

        <Grid item xs={3}>
          <LightInputField LightInputValue="0" />
        </Grid>
        <Grid item xs={3}>
          <LightInputField LightInputValue="0" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddItems;
