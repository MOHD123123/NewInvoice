// import  from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol,  } from 'mdb-react-ui-kit';
import NavigationLogo from '../components/Logo/InvoiceLogo';
import style from './index.module.css';
import { BsFacebook } from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import {ImPhone} from 'react-icons/im';
import {CgMail} from 'react-icons/cg';


import { Link } from "react-router-dom"
// import { fontSize } from '@mui/system';



const Footer = () => {
  return (
    <div className={style.mainfootrer}>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-10'>
      <section className={style.Footer}>
        <MDBContainer className='text-center text-md-start'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-10 mt-16'>
              <h6 className='text-uppercase fw-bold mb-4'>
             
                <NavigationLogo />
              </h6>
              <p>
                <a href='tel:+917696906015' className='text-reset'>
                <span style={{display:"flex",justifyContent:"space-between",width:"170px"}}> <ImPhone  className={style.PhoneIcon}/> <span className={style.PhoneNumber}>+91-7696906015 </span></span>
                </a>
              </p>
              <p>
                <a href='mailto:info@letmakeinvoice.com' className='text-reset'>
             
                <span style={{display:"flex"}}> <CgMail  className={style.gmailIcon}/>info@letmakeinvoice.com</span>
                </a>
              </p>
            </MDBCol>
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-10 mt-20'>
           
                <h6 className={style.h6}>Useful links</h6>
          
              <p>
                <Link to='/FAQs' className='text-reset'>
                  FAQs
                </Link>
              </p>
              <p>
              <Link to='/Termsanduse' className='text-reset'>
                  Terms of use
                  </Link>
              </p>
              <p>
                <Link to='/Privecy' className='text-reset'>
                  Privacy Policy
                </Link>
              </p>
            </MDBCol>
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-10 mt-20'>
        
                <h6 className={style.h6}>Social Links</h6>
          
            <ul className={style.SocialIconsul}>
            <li><Link to="/"><BsFacebook/></Link></li>
            <li><Link to="/"><FaInstagramSquare/></Link></li>
            <li><Link to="/"><BsLinkedin/></Link></li>
            </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-4' style={{ 
        // backgroundColor: 'rgba(0, 0, 0, 0.03)'
        backgroundColor:'#0b2033',color:"white"
        , fontSize: '22px', fontFamily: 'Matter', fontWeight: '400' }}>
        © 2023 LetsMakeInvoice.com |
        <a className='text-reset' href='https://mdbootstrap.com/'>
          All Rights Reserved.
        </a>
      </div>
    </MDBFooter>
    </div>
  );
};

export default Footer;