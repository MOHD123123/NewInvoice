
import Container from 'react-bootstrap/Container';
// import { Link } from "react-router-dom"


import './Nav.css'
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavigationLogo from '../components/Logo/InvoiceLogo';


function NavScrollExample() {
  return (
    <Navbar style={{ color: 'white', height: '68px', }} className="bg-[#0B2033]">
      <Container fluid>
        
        
        <div className="nav-logo" style={{marginLeft:"240px"}} >
        <NavigationLogo/>
        </div>
        
        
     
        {/* <Navbar.Toggle className='humber' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" header-link me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Link to="/">Why LetsMakeInvoice?</Link>
          <Link to="/"> How It Works</Link>
          <Link to="/">FAQs</Link>
          </Nav>
          </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;