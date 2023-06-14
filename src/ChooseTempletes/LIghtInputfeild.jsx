// import React from 'react'

import Box from "@mui/material/Box";
// import React from "react";

const LIghtInputfeild = (prop) => {
  return (
    <Box>
    <input
      className={prop.className}
      type="text"
      value={prop.LightInputValue}
      onChange={prop.onChange}
      placeholder={prop.placeholder}
      id="number"
      name={prop.name}
    />
  </Box>
  )
}

export default LIghtInputfeild