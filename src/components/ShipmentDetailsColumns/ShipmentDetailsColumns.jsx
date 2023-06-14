// import {useState} from "react";
import DarkInputFiled from "../DarkInputFiled/DarkInputFiled";
import LightInputField from "../LightInputField/LightInputField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const ShipmentDetailsColumns = (prop) => {
  const[BillShip,setBillShip]= useState({
    Bill_Client_Name:"",
    Bill_Mobile_Number:"",
    Bill_email:"",
    Bill_Street_Address:"",
    Bill_City_State_Zip_Code:"",
    Ship_Client_Name:"",
    Ship_Mobile_Number:"",
    Ship_email:"",
    Ship_Street_Address:"",
    Ship_City_State_Zip_Code:""
 
  })
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setBillShip({ ...BillShip, [name]: value });

    console.log(value); // Log the specific input field value
  };
  
 
  return (
    <>
      <Box className="mt-5">
        <ul>
          <Grid container className="container" spacing={5}>
            <Grid item xs={3}>
              <Box className="mb-2">
                <DarkInputFiled darkInputName="Bill to" />
              </Box>
              <li className="flex items-center mb-1">
                <LightInputField name="Bill_Client_Name"  onChange={handleInput} value={BillShip.Bill_Client_Name}  placeholder="Client Name" />
              </li>
              <li className="flex items-center mb-1">
                <LightInputField name="Bill_Mobile_Number"  onChange={handleInput} value={BillShip.Bill_Mobile_Number} placeholder="0123-456-789" />
              </li>
              <li className="flex items-center mb-1">
                <LightInputField   name="Bill_email"  onChange={handleInput} value={BillShip.Bill_email} placeholder="Email" />
              </li>
              <li className="flex items-center mb-1">
                <LightInputField name="Bill_Street_Address"  onChange={handleInput} value={BillShip.Bill_Street_Address} placeholder="Street Address" />
              </li>
              <li className="flex items-center mb-1">
                <LightInputField  name="Bill_City_State_Zip_Code"  onChange={handleInput} value={BillShip.Bill_City_State_Zip_Code} placeholder="City, State, Zip Code" />
              </li>
            </Grid> 

            {prop.Toggle?<Grid item xs={3}>
              <Box className="mb-2">
                <DarkInputFiled darkInputName="Ship to" />
              </Box>
              <li className="flex items-center mb-1">
                <LightInputField name="Ship_Client_Name"  onChange={handleInput} value={BillShip.Ship_Client_Name} placeholder="Client Name" />
              </li>
              <li className="flex items-center mb-1">
                <LightInputField name="Ship_Mobile_Number"  onChange={handleInput} value={BillShip.Ship_Mobile_Number} placeholder="0123-456-789" />
              </li>
              <li className="flex items-center mb-1">
                <LightInputField name="Ship_email"  onChange={handleInput} value={BillShip.Ship_email} placeholder="Email" />
              </li>
              <li className="flex items-center mb-1">
                <LightInputField name="Ship_Street_Address"  onChange={handleInput} value={BillShip.Ship_Street_Address} placeholder="Street Address" />
              </li>
              <li className="flex items-center mb-1">
                <LightInputField name="Ship_City_State_Zip_Code"  onChange={handleInput} value={BillShip.Ship_City_State_Zip_Code} placeholder="City, State, Zip Code" />
              </li>
            </Grid>:""}
          </Grid>
        </ul>
      </Box>
    </>
  );
};

export default ShipmentDetailsColumns;
