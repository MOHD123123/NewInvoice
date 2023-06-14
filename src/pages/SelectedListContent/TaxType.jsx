// import React from 'react'
// import style from "./index.module.css";

// import { useState } from "react"

const TaxType = (prop) => {
  // const[Value1,setValue]= useState("")
  // const[GST,setGST]= useState("GST (%)")

  const handleTakeVlaue=(e)=>{
   const value =e.target.value
    prop.setValue1(value);

    
  }
  console.log(prop.value1+"skjgfjg")
  return (
   
<div style={{width:'90%'}} className="input-wrap select-outer mt-6">
<select onChange={handleTakeVlaue} style={{width:'100%'}} name="taxLable" className="form-control theme-ip rounded">
<option value="Custom" >Custom</option>
<option value="GST (%)" >GST </option>
<option value="Vat (%)">Vat </option>
<option value="PPM (%)" >PPM </option></select>

 
</div>

  )
}

export default TaxType