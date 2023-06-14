import LoadingButton from "../../components/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import style from "./index.module.css";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import InvoiceHeader from "../../components/InvoiceHeader/InvoiceHeader";
import DetailsInvoiceColumn from "../../components/DetailsInvoiceColumn/DetailsInvoiceColumn";
import ShipmentDetailsColumns from "../../components/ShipmentDetailsColumns/ShipmentDetailsColumns";
import TableItem from "../../components/TableItem/TableItem";
import AmountContent from "../../components/AmountContent/AmountContent";
import SelectedListContent from "../SelectedListContent/SelectedListContent";
import CrousalSlider from "../../components/CrousalSlider/CrousalSlider";
import { useRef, useState } from "react";
import Footer from "../../Footer/Footer";
import NavScrollExample from "../../Navigation/Nav";
import Subscrib from "../../SuscribEmail/Subscrib";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome/FontAwesomeIcon";
// import faCircleCheck from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { useReactToPrint } from "react-to-print";
import { RxCross1 } from "react-icons/rx";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { jsPDF } from "jspdf";
import Crocus from "../../ChooseTempletes/Crocus";
import Residust from "../../ChooseTempletes/Residust/ResiDust";
import Moonstone from "../../ChooseTempletes/Moonstone/Moonstone";
import HeadinPera from "../../Heading/HeadinPera";
import Tigereye from "../../ChooseTempletes/Tigereye/Tigereye";
import { BsFacebook } from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import { Link } from "react-router-dom"
import { FiCoffee } from 'react-icons/fi';






const Home = () => {
  const [open, setOpen] = useState(false);

// choostem  
  const [selectedSection, setSelectedSection] = useState("Mirage");
  console.log(selectedSection+" selected person")
  //end
  const[Toggle, setToggle] = useState(true);
  const[Discount, setDiscount] = useState(true);
  const[SubTotal, setSubTotal] = useState(true);
  const[PPMtax, setPPMtax] = useState(true);
  const[OtherTax, setOtherTax] = useState(true);
  const[Shipping, setShipping] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);


  const componentsref= useRef();
  const handletoprint =useReactToPrint({
    content:()=>componentsref.current,
    documentTitle:"invoicedata",
    onAfterPrint:()=>alert("print is successfully")
  })
//currencuSelectusestate
const[value , setValue]=useState('')


  const jsPDFgenerator = () => {
    const doc = new jsPDF();

    // Generate PDF content
    const content = componentsref.current;

    // Print PDF
    doc.html(content, {
      callback: () => {
        doc.save("invoice.pdf");
        // You can add additional logic after saving the PDF
    
      }
    });
  };
  const handleClickOpen = () => {
    jsPDFgenerator();
    setOpen(true);
   
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  

//choostemplet par function

const selected=(section)=>{
  setSelectedSection(section)
}
//end


 

  return (
    <>
    

    <NavScrollExample/>
    <HeadinPera Heading="Invoice Generator" peragraph="please add all details in invoice to below create your pdf invoice"/>
        <Box sx={{ flexGrow: 1 }} className="justify-center flex  w-full ">
        <div className={style.print}>
        <Grid container className="container " spacing={10}>
        <Grid  item xs={8} className={style.firstGrid}>
        <Box>
            <Box className="flex gap-4 mt-10 mb-3">
              <LoadingButton  clickAddItem={() => handleClickOpen()} ButtonName="Get PDF" />
              <LoadingButton clickAddItem={handletoprint} ButtonName="Print" />
            </Box>

              <Box ref={componentsref} className={style.adminCard}>
           {  selectedSection==="Mirage"&&<Box>

             
              <Box className="flex justify-between items-center h-full w-full">
                <Box>
                  <input
                    className={style.inputText}
                    type="text"
                    value="INVOICE"
                    id="name"
                  />
                </Box>
                <Box>
                  <ImageUploader />
                </Box>
              </Box>
              <InvoiceHeader />
              <DetailsInvoiceColumn />
              <ShipmentDetailsColumns  Toggle={Toggle} setToggle={setToggle} />
              <TableItem  totalAmount={totalAmount} setTotalAmount={setTotalAmount}/>
              <AmountContent 
              value={ value} 
              Shipping={Shipping} setShipping={setShipping}
              OtherTax={OtherTax} setOtherTax={setOtherTax}
              PPMtax={PPMtax} setPPMtax={setPPMtax}
              SubTotal={SubTotal} setSubTotal={setSubTotal}
              Discount={Discount} setDiscount={setDiscount}
              // 
              totalAmount={totalAmount} setTotalAmount={setTotalAmount}

              />
               </Box>}
               { selectedSection==="crocus"&&
                <Crocus  Toggle={Toggle} setToggle={setToggle} totalAmount={totalAmount} setTotalAmount={setTotalAmount}/>
               }
               {selectedSection==="Tigereye"&&<Tigereye Toggle={Toggle} setToggle={setToggle} totalAmount={totalAmount} setTotalAmount={setTotalAmount}/>}
               {selectedSection==="Rosedust"&&
               <Residust Toggle={Toggle} setToggle={setToggle} totalAmount={totalAmount} setTotalAmount={setTotalAmount}/>}
            {selectedSection==="Moonstone"&&<Moonstone  Toggle={Toggle} setToggle={setToggle} totalAmount={totalAmount} setTotalAmount={setTotalAmount}/>}
            </Box>

            <Box className="flex justify-end gap-4 mt-5 mb-3">
              <LoadingButton clickAddItem={() => handleClickOpen()} ButtonName="Get PDF" />
              <LoadingButton  clickAddItem={handletoprint}  ButtonName="Print" />
            </Box>

          </Box>
        </Grid>
        

        <Grid item xs={4} className={style.secondGrid}>
          <Box>
            <SelectedListContent 
            value={ value}  setValue={setValue}
            Shipping={Shipping} setShipping={setShipping}
            OtherTax={OtherTax} setOtherTax={setOtherTax}
            PPMtax={PPMtax} setPPMtax={setPPMtax}
            SubTotal={SubTotal} setSubTotal={setSubTotal}
            Discount={Discount} setDiscount={setDiscount}
            Toggle={Toggle} setToggle={setToggle}
             />
            <CrousalSlider  selected={selected}/>
          </Box>
        </Grid>
      </Grid>
  
      </div>
      </Box>
      <Subscrib/>
    <Footer/>
      {/* Dialog component */}
      <Dialog open={open} onClose={handleClickClose}>
        <Box className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <Box className="relative p-6 flex-auto text-center pt-0">
          <Button
              onClick={handleClickClose}
              className={` !mx-2 width ${style.themeBtn}`}
              type="button"
            >
              <RxCross1 className={style.cross}></RxCross1>
            </Button>
          <Box className="flex items-center justify-center p-6 pt-0 pb-10">
           </Box>
            <Box className={style.warningIconDiv}>
            {/* <FontAwesomeIcon className={style.warningIcon} icon={faCircleCheck} /> */}
            </Box>
            <h3 className={style.popupText}>thank you !</h3>
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
            Were delighted to have made your invoicing process hassle-free.
Help us improve our product and provide you with even more amazing features to make invoicing effortless.
            </p>
            <Button variant="contained" color="error">
  <FiCoffee/>buy a coffee
</Button>
   <ul className={style.SocialIconsul}>
            <li><Link to="/"><BsFacebook/></Link></li>
            <li><Link to="/"><FaInstagramSquare/></Link></li>
            <li><Link to="/"><BsLinkedin/></Link></li>
            </ul>
          </Box>
       
        </Box>
      </Dialog>

 
    </>
  );
};

export default Home;

















// import Crocus from "../../ChooseTempletes/Crocus";

// const Home = () => {


// return (
//   <>
//   <Crocus/>
//    </>
//   );
// };

// export default Home;