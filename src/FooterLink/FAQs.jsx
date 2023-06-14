// import { Style } from "@mui/icons-material";
import { Box } from "@mui/system";
// import { Dropdown } from 'react-bootstrap'
import Dropdown123 from "../DropDown/FAQsD";
import Footer from "../Footer/Footer";
// import{ React} from 'react'
import HeadinPera from "../Heading/HeadinPera";
import NavScrollExample from "../Navigation/Nav";
import Subscrib from "../SuscribEmail/Subscrib";
import style from "./index.module.css";

const FAQs = () => {
  return (
    <Box>
      <NavScrollExample />
      <HeadinPera Heading="FAQs" peragraph="Frequently ask questions by user" />
        
       <div className={style.margint}>
   <div>

      <Dropdown123
        count="01"
        perah3="What information do I need to create an invoice with your generator?"
        pera="
You'll need to provide your business information, such as your company name and address, as well as the details of the invoice, such as the products or services provided and their costs."
      />
       <Dropdown123
        count="02"
        perah3="Can I customize the look of my invoices?"
        pera="
        Yes! Our invoice generator includes customizable templates so you can create invoices that match your brand's look and feel."
      />
       <Dropdown123
        count="03"
        perah3="How can I add taxes to my invoices?"
        pera="
        Simply specify the tax rate and our system will automatically perform the calculation for you. You can also add multiple tax rates for each invoice, if necessary."
      />
          <Dropdown123
        count="04"
        perah3=" Is your invoice generator secure?"
        pera="
        Yes! We take security seriously and employ industry-standard measures to protect your sensitive information. All data is encrypted and stored securely, so you can generate invoices with confidence."
      />
   </div>

     </div>



     
      <Subscrib />
      <Footer />
    </Box>
  );
};

export default FAQs;
