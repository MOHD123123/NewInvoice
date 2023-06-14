import  { useState } from 'react';
import style from './index.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { InputBase } from '@mui/material';


const InvoiceHeader = () => {
  const [InvoiceNumber, setInvoiceNumber] = useState('20567');
  const [InvoiceDate, setInvoiceDate] = useState('2023-04-06');
  const [dueDate, setDueDate] = useState('2023-04-06');

  // const NumberChange = (e) => {
  // alert(e.target.value)
  //   // setInvoiceNumber(e.target.value);
  
  // };
  // console.log(handleInvoiceNumberChange)

  const handleInvoiceDateChange = (e) => {
    setInvoiceDate(e.target.value);
    

  };
  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);

  };
  console.log(InvoiceNumber)

  return (
    <Box>
      <Box>
        <Grid spacing={2} className={style.HeaderInvoice}>
          <Grid item xs={4} className={style.InvoiceHeaderOne}>
            <Box>
              <input
                className={style.invoiceHeaderInput}
                type="text"
                value="Invoice #"
              />
            </Box>
           

              <InputBase
                className={style.materialUiinput
                }
                type="text"
                placeholder="0000"
                value={InvoiceNumber}
                
                name="inVoiceNumber"
                onChange={(e)=>setInvoiceNumber(()=>console.log(e.target.value))}
              />
         

          </Grid>

          <Grid item xs={4} className={style.InvoiceHeadertwo}>
            <Box>
              <input
                className={style.invoiceHeaderInput}
                type="text"
                value="Invoice Date"
                id="Invoice date"
              />
              <input
                className={style.invoiceHeaderInput}
                placeholder="Enter Date"
                type="date"
                value={InvoiceDate}
                onChange={handleInvoiceDateChange}
              />
            </Box>
          </Grid>

          <Grid item xs={4} className={style.InvoiceHeaderthree}>
            <Box>
              <input
                className={style.invoiceHeaderInput}
                type="text"
                value="Due date"
                id="Due date"
              />
              <input
                className={style.invoiceHeaderInput}
                type="date"
                value={dueDate}
                onChange={handleDueDateChange}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InvoiceHeader;