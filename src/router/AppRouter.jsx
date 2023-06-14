import {  Route, Routes } from "react-router-dom";

import FAQs from "../FooterLink/FAQs";
import Privecy from "../FooterLink/Privecy";
import Termsanduse from "../FooterLink/Termsanduse";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="FAQs" element={<FAQs/>} />
      <Route path="Termsanduse" element={<Termsanduse/>} />
      <Route path="Privecy" element={<Privecy/>} />


     

    </Routes>
  );
};

export default AppRouter;
