// import React from "react";
import Box from "@mui/material/Box";
import { useState,useEffect } from "react";
import style from "./index.module.css";

const AmountContent = (prop) => {
  const [OtherTax, setOtherTax] = useState(0);
  const [ShippngTax, setShippngTax] = useState(0);
  const [PPMTax, setPPMTax] = useState(0);
  const [DisCount, setDisCount] = useState(0);
  const [Total_value, setTotal_value] = useState();

console.log(Total_value+"suntotal")



  // Calculate OtherTax and update it when prop.totalAmount changes
  useEffect(() => {
    const calculatedOtherTax = prop.totalAmount * 0.1; // Calculate 10% of totalAmount
    const calculatedOtherTax1 = prop.totalAmount * 0.05; // Calculate 5% of totalAmount
    const calculatedOtherTax2 = prop.totalAmount * 0.1; // Calculate 5% of totalAmount
    const disCount= prop.totalAmount -(prop.totalAmount * 0.3); // Subtract 30% from totalAmount
    const AfterDiscountMoney=disCount
    const disCount123=calculatedOtherTax+calculatedOtherTax1+calculatedOtherTax2+AfterDiscountMoney
     
    setOtherTax(calculatedOtherTax);
    setShippngTax(calculatedOtherTax1);
    setPPMTax(calculatedOtherTax2);
    setDisCount(disCount);
    setTotal_value(disCount123);
  }, [prop.totalAmount]);

  return (
    <Box>
      <Box className="sm:flex flex-row-reverse justify-between">
        <Box className="total-sec">
          <input type="hidden" id="subTotal" value="12332" />
         {prop.SubTotal?<Box className={style.itemAmount}>
            <Box className="left">
              <input
                type="text"
                className={style.invoiceHeaderInput}
                name="subTotalLabel"
                placeholder="Subtotal"
                maxLength="20"
                value="Subtotal"
              />
            </Box>
            <Box className="value sub">{prop.value}{prop.totalAmount}</Box>
          </Box>:""}

         { prop.OtherTax?<Box className={style.itemAmount}>
            <Box className="left">
              <input
                type="text"
                name="OtherTax"
                className={style.invoiceHeaderInput}
                placeholder="Sales Tax(%)"
                maxLength="20"
                value="Other Tax(10%)"
              />
            </Box>
            <Box className="value">
              <input
                type="number"
                name="OtherTax"
                className={style.invoiceHeaderInput}
                placeholder="0.0"
                value={OtherTax}
              />
            </Box>
          </Box>:""}

        {prop.Shipping?<Box className={style.itemAmount}>
            <Box className="left">
              <input
                type="text"
                name="Shiping Tax(%)"
                className={style.invoiceHeaderInput}
                placeholder="Shiping Tax(%)"
                maxLength="20"
                value="Shiping Tax(10%)"
              />
            </Box>
            <Box className="value">
              <input
                type="number"
                name="Shipping Tax (1%)"
                className={style.invoiceHeaderInput}
                placeholder="0.0"
                value={ShippngTax}
              />
            </Box>
          </Box>:""}
        

         {prop.PPMtax? <Box className={style.itemAmount}>
            <Box className="left">
              <input
                type="text"
                name="PPM (%)"
                className={style.invoiceHeaderInput}
                placeholder="PPM (%)"
                maxLength="20"
                value="PPM (5%)"
              />
            </Box>
            <Box className="value">
              <input
                type="number"
                name="PPM (%)"
                className={style.invoiceHeaderInput}
                placeholder="0.0"
                value={PPMTax}
              />
            </Box>
          </Box>:""}

       { prop.Discount?<Box className={style.itemAmount}>
            <Box className="left">
              <input
                type="text"
                className={style.invoiceHeaderInput}
                name="discountLabel"
                placeholder="Discount(%)"
                maxLength="20"
                value="Discount(30%)"
              />
            </Box>
            <Box className="value">
              <input
                type="number"
                name="discount"
                className={style.invoiceHeaderInput}
                placeholder="0.0"
                value={DisCount}
              />
            </Box>
          </Box>:""}

          <Box className={style.itemAmountvalue}>
            <input type="hidden" id="totalAmount" value="00000" />
            <Box className="left">
              <input
                type="text"
                maxLength="20"
                style={{ maxWidth: "80px" }}
                className={style.invoiceHeaderInput}
                placeholder="Total"
                value="Total"
                data-gtm-form-interact-field-id="4"
              />
            </Box>

            <Box className="ml-auto flex justify-end">
              <p className="symbol mb-1 ">{prop.value}</p>
              &nbsp;
            </Box>
            <Box className="value">{Total_value}</Box>
          </Box>
        </Box>

        <Box className={`mt-3 ${style.notes}`}>
          <input
            type="text"
            name="noteLabel"
            placeholder="Notes:"
            className={style.invoiceHeaderInput}
            maxLength="50"
            value="Notes:"
          />
          <textarea
            name="note"
            className={style.invoiceHeaderInputTextarea}
            placeholder="Any additional comments"
            maxLength="500"
            rows="6"
          ></textarea>
        </Box>
      </Box>
    </Box>
  );
};
  // Shipping={Shipping} setShipping={setShipping}
          // OtherTax={OtherTax} setOtherTax={setOtherTax}
          // PPMtax={PPMtax} setPPMtax={setPPMtax}
          // SubTotal={SubTotal} setSubTotal={setSubTotal}
          // Discount={Discount} setDiscount={setDiscount}
export default AmountContent;