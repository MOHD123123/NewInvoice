// import { useState, useMemo } from 'react';
// import Select from 'react-select';
// import { countryList } from 'react-select-country-list';




// const CountrySelect = () => {
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const options = useMemo(() => countryList().getData(), []);

//   const handleCountrySelect = (e) => {
//     const value = e.target.value
//     setSelectedCountry(value);
//   };

//   return (
//     <div>
//       <h1>Country Selection</h1>
//       <Select options={options} value={options} onChange={handleCountrySelect} />
//       <div>
//         Selected Country: {selectedCountry && selectedCountry.label}
//       </div>
//     </div>
//   );
// };

// export default CountrySelect;


















// import React, { useState } from "react";
// // import { Select, MenuItem } from "@material-ui/core";
// import Select from '@mui/material/Select';


// import MenuItem from '@mui/material/MenuItem';

// import countries from "i18n-iso-countries";
// // Import the languages you want to use
// import enLocale from "i18n-iso-countries/langs/en.json";
// import itLocale from "i18n-iso-countries/langs/it.json";

// export default function  CountrySelect() {
  //   const [selectedCountry, setSelectedCountry] = useState("");
  
  //   const selectCountryHandler = (value) => setSelectedCountry(value);
  
  //   // Have to register the languages you want to use
  //   countries.registerLocale(enLocale);
  //   countries.registerLocale(itLocale);
  
  //   // Returns an object not a list
  //   const countryObj = countries.getNames("en", { select: "official" });
  
  //   const countryArr = Object.entries(countryObj).map(([key, value]) => {
    //     return {
      //       label: value,
      //       value: key
      //     };
      //   });
      
      
      //   return (<React.Fragment>
      
      //     <h1 style={{textAlign:"start"}}>Select Currency</h1>
      //    <div className={style.CountrySelect}>
      //       <Select className={style.Select}
      //         value={selectedCountry}
      //         onChange={(e) => selectCountryHandler(e.target.value)}
      //       >
      //         {!!countryArr?.length &&
      //           countryArr.map(({ label, value }) => (
        //             <MenuItem  className={style.MenuItem} style={{maxWidth:"300px",}} key={value} value={value}>
        //               {label}
        //             </MenuItem>
        //           ))}
        //       </Select>
        //     </div>
        //     </React.Fragment> 
        //   );
        // }
        
        
        
        
        
        
        import style from "./index.module.css";
        function  CountrySelect(prop){
 
  const options =[
    {label:"Currency Select",value:"INR"},
    {label:" Albania Lek",value:"Lek"},
    {label:"Afghanistan ",value:"AFN"},
    {label:"USA",value:"$"},
    {label:"Argentina Peso",value:"$"},
    {label:"Bahamas Dollar",value:"$"},
    {label:"Belarus Ruble",value:"Br"},
    {label:"Belize Dollar",value:"BZ$"},
    {label:"Cambodia Riel",value:"៛"},
    {label:"Canada Dollar",value:"$"},
    {label:"China Yuan Renminbi",value:"¥"},
    {label:"Cuba Peso",value:"₱"},
    {label:"Czech Republic Koruna",value:"Kč"},
    {label:"India Rupee",value:"INR"},
    {label:"Indonesia Rupiah",value:"Rp"},
    {label:"Iran Rial",value:"﷼"},
    {label:"Israel Shekel",value:"₪"},
    {label:"Korea (North) Won",value:"₩"},
    {label:"Kyrgyzstan Som",value:"лв"},
    {label:"LAK",value:"₭"},
    {label:"Macedonia Denar",value:" ден "},
    {label:"Mexico Peso",value:"$"},
    {label:"Nepal Rupee",value:"₨"},
    {label:"Oman Rial",value:"﷼"},
    {label:"Pakistan Rupee",value:"₨"},
    {label:"Saudi Arabia Riyal",value:"﷼"},
 
  ]
  function handleSelect(e){
    prop.setValue(e.target.value)
  } 

  return(
    <div className={style.seclectedcurrncybox}>
       <h3> Currency Select </h3>
       <select className="form-select mt-3" onChange={handleSelect}>
        { options.map(option =>(
          // eslint-disable-next-line react/jsx-key
          <option value={option.value}>{option.label}</option>
        ))}
       </select>
     
    </div>  
  ) 
}
export default  CountrySelect;