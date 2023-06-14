import { useState } from 'react';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {MdKeyboardArrowDown} from 'react-icons/md';
import style from "./index.module.css";



const Dropdown123 = (prop) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (<>
<div className={style.Dropdown1}>



    <div className={style.Dropdown123}>
    <div style={{display:"flex",justifyContent:"space-between"}}>

    <div style={{display:"flex" ,width:"100%"}}>

    <div><h1 className={style.h1}>{prop.count}</h1></div>
    <h3 className={style.h3}>{prop.perah3}</h3>
    </div>

      <button onClick={toggleDropdown}>{!isOpen?<MdKeyboardArrowUp className={style.icon}/>:<MdKeyboardArrowDown className={style.icon}/>}</button>
    </div>
    
    {isOpen && (
        <div>
        <p className={style.peradrop}>{prop.pera}</p>
        </div>
      )}
    </div>






</div>

  </>
  );
};

export default Dropdown123;