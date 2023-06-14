// import { style } from "@mui/system"
import Footer from "../Footer/Footer"
import HeadinPera from "../Heading/HeadinPera"
import NavScrollExample from "../Navigation/Nav"
import Subscrib from '../SuscribEmail/Subscrib'
import style from "./index.module.css";



const Termsanduse = () => {
  return (
    <div>
    <NavScrollExample/>
    <HeadinPera Heading="Terms and use" peragraph="Terms and use our Product"/>
 <div className={style.section}>
 <div className={style.section1}>

<p className={style.pera}>Welcome to Lets Make Invoice! By using our website and services, you agree to the following Terms of Use. If you do not agree to these Terms, please do not use the Service.</p>
<h3 className={style.h3}>What is Lets Make Invoice?</h3>
<p>Lets Make Invoice is an invoice generator that lets you easily create professional invoices by selecting a template, filling in invoice details, and generating a PDF. The best part is, you dont need to provide any account or payment information.</p>
<h3  className={style.h3}>Your Content</h3>
<p className={style.pera}>When you use the Service, you are responsible for the content you create, such as your company details, products or services, and payment terms. You must ensure that your content does not violate any third-party rights or applicable laws.</p>
<h3>Our Intellectual Property
</h3>
<p className={style.pera}>The Service and all its contents, such as the website design, templates, logos, and software, are owned by Let s Make Invoice or its licensors and are protected by Indian and international copyright laws. You may not use our intellectual property without our prior written consen</p>
<h3  className={style.h3}>Limitations of Liability</h3>
<p className={style.pera}>We strive to make our Service reliable and user-friendly, but there may be times when it s not working perfectly. We cannot guarantee that the Service will always be error-free, uninterrupted, or completely secure. To the fullest extent permitted by law, we make no promises or warranties about the Service, including any implied warranties of merchantability and fitness for a particular purpose. In the event that something goes wrong with the Service, we will not be responsible for any damages that you or anyone else may suffer. This includes indirect, incidental, special, or consequential, damages, which could result from your use of the Service or any content accessed through the Service. Governing Law and Dispute Resolution.

These Terms are governed by the laws of India. Any dispute arising out of or in connection with the Service or these Terms shall be resolved through arbitration in New Delhi, India, in accordance with the Indian Arbitration and Conciliation Act, 1996.</p>
<h3  className={style.h3}>Changes to these Terms</h3>
<p className={style.pera}>We may revise these Terms at any time without notice. By continuing to use the Service after any revisions, you agree to be bound by the updated Terms.

If you have any questions or feedback about these Terms or the Service, please contact us at info@letsmakeinvoice.com. We re always happy to help!</p>
</div>
</div>




    <Subscrib/>
    <Footer/>
    </div>
  )
}

export default Termsanduse