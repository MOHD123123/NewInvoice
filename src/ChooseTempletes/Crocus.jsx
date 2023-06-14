import style from "./index.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DetailsInvoiceColumn from "../components/DetailsInvoiceColumn/DetailsInvoiceColumn";
// import ShipmentDetailsColumns from "../components/ShipmentDetailsColumns/ShipmentDetailsColumns";
// import TableItem from "../components/TableItem/TableItem";
import AmountContent from "../components/AmountContent/AmountContent";
import { useEffect,useState } from "react";
//

import Grid from '@mui/material/Grid';
//
import CloseIcon from '@mui/icons-material/Close';
import FormLabel from "@mui/material/FormLabel";
// import LightInputField from "../components/LightInputField/LightInputField";
// import DarkInputFiled from "../components/DarkInputFiled/DarkInputFiled";
import LIghtInputfeild from "./LIghtInputfeild";
// import LoadingButton from "../components/Button";
import LoadingButton1 from "../components/Button/index1";




const Crocus = (prop) => {
  // const[Toggle, setToggle] = useState(true);
  const[Discount, setDiscount] = useState(true);
  const[SubTotal, setSubTotal] = useState(true);
  const[PPMtax, setPPMtax] = useState(true);
  const[OtherTax, setOtherTax] = useState(true);
  const[Shipping, setShipping] = useState(true);
  // const [totalAmount, setTotalAmount] = useState(0);

  //invoive header
 
  const [InvoiceNumber, setInvoiceNumber] = useState('#20567');
  const [InvoiceDate, setInvoiceDate] = useState('2023-04-06');
  const [dueDate, setDueDate] = useState('2023-04-06');
//imageuploader
const [uploadedPhoto, setUploadedPhoto] = useState(null);
const [isHovered, setIsHovered] = useState(false);
const [onMouse, setOnMouse] = useState(false);

//imageuploader
const handlePhotoUpload = (event) => {
  const file = event.target.files[0];
  
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  }
};

const handleRemovePhoto = () => {
  setUploadedPhoto(null);
};





const handleMouseEnter = (e)=>{
  console.log(e)
  setOnMouse(true)
  setIsHovered(true);
 }

 const handleMouseleave=(e)=>{
  console.log(e)
  setOnMouse(false)
  setIsHovered(false);
 }












  //invoive header
 

    const handleInvoiceNumberChange = (e) => {
      setInvoiceNumber(e.target.value);
    };
  
    const handleInvoiceDateChange = (e) => {
      setInvoiceDate(e.target.value);
    };
  
    const handleDueDateChange = (e) => {
      setDueDate(e.target.value);
    };
    //shipdetails
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
    
// tableadditem
// const[onMouse,setOnMouse] =useState(false)
const [open, setOpen] = useState(false);
const [inputFields, setInputFields] = useState([
  {
    fullName: "",
    quantity: "",
    price: "",
    amount: 0,
  },
]);
const [itemToRemove, setItemToRemove] = useState(null);

useEffect(() => {
  // Calculate the total amount when inputFields change
  const sum = inputFields.reduce((total, item) => total + item.amount, 0);
  prop.setTotalAmount(sum);
}, [inputFields, prop]);

const handleClickOpen = (index) => {
  setOpen(true);
  setItemToRemove(index);
};

const handleClickClose = () => {
  setOpen(false);
};

const addInputField = () => {
  setInputFields([
    ...inputFields,
    {
      fullName: "",
      quantity: "",
      price: "",
      amount: 0,
    },
  ]);
};

const removeInputFields = () => {
  setOpen(false);
  const rows = [...inputFields];
  rows.splice(itemToRemove, 1);
  setInputFields(rows);
};

const handleChange = (index, evnt) => {
  const { name, value } = evnt.target;
  const list = [...inputFields];
  list[index][name] = value;

  // Calculate the amount
  const quantity = parseInt(list[index].quantity);
  const price = parseInt(list[index].price);
  if (!isNaN(quantity) && !isNaN(price)) {
    list[index].amount = quantity * price;
  } else {
    list[index].amount = 0;
  }

  setInputFields(list);
};
 









  
  return (
    <>
    <Box>

    <Box className={style.adminCard}>
    <Box className={style.invoivceInp}><input className={style.invoivceInp1} type="text"  value="INVOICE" id="name"/></Box>
    
    <Box className="flex justify-between items-center h-full w-full">
  {/* imageuploadercomponents */}
  {uploadedPhoto ? (
        <Box
          className="Uploaded-Logo"
          onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <img
            src={uploadedPhoto}
            alt="Uploaded Logo"
            className={style.uploaded}
          />
          {isHovered && (
            <button className={style.cutButton} onClick={handleRemovePhoto}>
              <CloseIcon />
            </button>
          )}
        </Box>
      ) : (
        <FormLabel id="form1" runat="server">
          <Box> 
            <span className={style.fileWrapper}>
              <input
                type="file"
                name="photo"
                id="imgInp"
                accept="image/*"
                className={style.uploader}
                onChange={handlePhotoUpload}
              />
              <span className={style.btnAlpha}>Add or Drag logo</span>
            </span>
          </Box>
        </FormLabel>
      )}
    <Box>
     {/* imageuploadercomponents */} 
    </Box>
    {/* detalis */}
    <Box>
    <Box>
      <Box>
        <Grid spacing={2} className={style.HeaderInvoice}>
          <Grid item xs={4} className={style.InvoiceHeaderOne}>
            <Box className={style.date2}>
              <input
                className={style.invoiceHeaderInput1}
                type="text"
                value="Invoice #"
                id="name"
              />
              <input
                className={style.invoiceHeaderInput}
                type="text"
                placeholder="#0000"
                value={InvoiceNumber}
                onChange={handleInvoiceNumberChange}
              />
            </Box>
          </Grid>

          <Grid item xs={4} className={style.InvoiceHeadertwo}>
            <Box className={style.date2}>
              <input
                className={style.invoiceHeaderInput1}
                type="text"
                value="Invoice Date"
                id="Invoice date"
              />
              <input
                className={style.invoiceHeaderInput}
                type="date"
                value={InvoiceDate}
                onChange={handleInvoiceDateChange}
              />
            </Box>
          </Grid>

          <Grid item xs={4} className={style.InvoiceHeaderthree}>
            <Box  className={style.date2}>
              <input
                className={style.invoiceHeaderInput1}
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
</Box>
</Box>
    <Box> 
    {/* detailInvoice */}
<DetailsInvoiceColumn/>
</Box>
    <Box className={style.shipdata}>
    <Box className="mt-5">
        <ul>
          <Grid container className={style.gap} spacing={2}>
            <Grid item xs={6}>
              <Box className="mb-2">
                <LIghtInputfeild  className={style.LightInputField1} value="Bill to" placeholder="Bill to" />
              </Box>
              <li className={style.list}>
              <LIghtInputfeild  className={style.LightInputField} name="Bill_Client_Name"  onChange={handleInput} value={BillShip.Bill_Client_Name}  placeholder="Client Name" />
                </li>
              <li className={style.list}>
                <LIghtInputfeild  className={style.LightInputField} name="Bill_Mobile_Number"  onChange={handleInput} value={BillShip.Bill_Mobile_Number} placeholder="0123-456-789" />
              </li>
              <li className={style.list}>
                <LIghtInputfeild  className={style.LightInputField}  name="Bill_email"  onChange={handleInput} value={BillShip.Bill_email} placeholder="Email" />
              </li>
              <li className={style.list}>
                <LIghtInputfeild  className={style.LightInputField} name="Bill_Street_Address"  onChange={handleInput} value={BillShip.Bill_Street_Address} placeholder="Street Address" />
              </li>
              <li className={style.list}>
                <LIghtInputfeild  className={style.LightInputField}  name="Bill_City_State_Zip_Code"  onChange={handleInput} value={BillShip.Bill_City_State_Zip_Code} placeholder="City, State, Zip Code" />
              </li>
            </Grid> 

            {prop.Toggle?<Grid item xs={6}>
              <Box className="mb-2">
                <LIghtInputfeild  className={style.LightInputField1} value="Ship to" placeholder="Ship to"/>
              </Box>
              <li className={style.list}>
                <LIghtInputfeild  className={style.LightInputField} name="Ship_Client_Name"  onChange={handleInput} value={BillShip.Ship_Client_Name} placeholder="Client Name" />
              </li>
              <li className={style.list}>
                <LIghtInputfeild  className={style.LightInputField} name="Ship_Mobile_Number"  onChange={handleInput} value={BillShip.Ship_Mobile_Number} placeholder="0123-456-789" />
              </li>
              <li className={style.list}>
                <LIghtInputfeild  className={style.LightInputField}name="Ship_email"  onChange={handleInput} value={BillShip.Ship_email} placeholder="Email" />
              </li>
              <li className={style.list}>
                <LIghtInputfeild  className={style.LightInputField} name="Ship_Street_Address"  onChange={handleInput} value={BillShip.Ship_Street_Address} placeholder="Street Address" />
              </li>
              <li className={style.list}>
                <LIghtInputfeild  className={style.LightInputField} name="Ship_City_State_Zip_Code"  onChange={handleInput} value={BillShip.Ship_City_State_Zip_Code} placeholder="City, State, Zip Code" />
              </li>

            </Grid>:""}
          </Grid>
        </ul>
      </Box>
    </Box>
    <Box> 
    {/* tableamount */}
    
    <Box>
        <table className=" theme-table mb-2 w-full mt-3 rounded-3">
          {/* Table header */}
          <thead className={style.baseLine}>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>

          {/* Table body */}
          {inputFields.map((data, index) => {
            const { fullName, quantity, price, amount } = data;
            return (
              <tbody
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseleave}
                className={style.borderBottomWidth}
                key={index}
                onChange={(evnt) => handleChange(index, evnt)}
                value={fullName}
                name="fullName"
                
              >
                <tr >
                  <td>
                    <textarea
                      className={style.invoiceHeaderInput}
                      name="itemDescription"
                      placeholder="Item Description"
                      maxLength="200"
                      value={"item" + "" + (index + 1)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className={style.invoiceHeaderInputtable}
                      name="quantity"
                      placeholder="0"
                      maxLength="12"
                      value={quantity}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      className={style.invoiceHeaderInputtable}
                      placeholder="0"
                      maxLength="12"
                      value={price}
                    />
                  </td>
                  <td className={style.cutbtnamount}>
                    <p>{amount}</p>

              {onMouse?<box>{inputFields.length >= 1 ? (
                      <button className={style.croosBtn} onClick={() => handleClickOpen(index)}>x
                      </button> ) : ( "")}</box>:""}
                  </td>
                </tr>
              </tbody>
            );
          })}
          <tbody>
    
            <tr  className={style.additembtn}>
              <td colSpan="4">
                <LoadingButton1 className={style.className1}
                  clickAddItem={addInputField}
                  ButtonName="+ Add Item"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
{/* additem end */}
    </Box>
    <Box> <AmountContent
        Shipping={Shipping} setShipping={setShipping}
              OtherTax={OtherTax} setOtherTax={setOtherTax}
              PPMtax={PPMtax} setPPMtax={setPPMtax}
              SubTotal={SubTotal} setSubTotal={setSubTotal}
              Discount={Discount} setDiscount={setDiscount}
    /></Box>

    </Box>

    </Box>
    <Dialog open={open} onClose={handleClickClose}>
        {/* Dialog content */}
        <Box className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <Box className="relative p-6 flex-auto text-center pt-0">
            <Box className={style.warningIconDiv}>
              <img
                className={style.warningIcon}
                alt="warning icon"
                src="https://img.freepik.com/premium-vector/warning-icon-vector-isolated-white-background_162100-446.jpg?w=2000"
              />
            </Box>
            <h3 className={style.popupText}>Are you sure?</h3>
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
              Are you sure you want to remove this item?
            </p>
          </Box>
          <Box className="flex items-center justify-center p-6 pt-0 pb-10">
            <Button
              onClick={handleClickClose}
              className={` !mx-2 width ${style.themeBtn}`}
              type="button"
            >
              No
            </Button>
            <Button
              onClick={removeInputFields}
              className={` !mx-2 width ${style.themeBtnOne}`}
              type="button"
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Dialog>

    </>
  )
}

export default Crocus