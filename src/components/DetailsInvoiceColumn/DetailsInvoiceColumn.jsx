


// import Box from "@mui/material/Box";
// // import LightInputField from "../LightInputField/LightInputField";
// import Grid from "@mui/material/Grid";
// import { useState } from "react";

// const DetailsInvoiceColumn = () => {
//   const [User, setUser] = useState({
//     Bussiness_Name: "",
//     Street_Address: "",
//     City_State_Zip_Code: "",
//     Namber: "",
//     Website: "",
//     Email: ""
//   });

//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setUser({ ...User, [name]: value });

//     console.log(User); // Log the updated User object
//   };

//   return (
//     <Box>
//       <ul>
//         <Grid container className="container" spacing={5}>
//           <Grid item xs={3}>
//             <li className="mb-1">
//               <input
//                 placeholder="Bussiness Name"
//                 name="Bussiness_Name"
//                 value={User.Bussiness_Name}
//                 onChange={handleInput}
//               />
//             </li>

//             <li className="mb-1">
//               <input
//                 placeholder="Street Address"
//                 name="Street_Address"
//                 value={User.Street_Address}
//                 onChange={handleInput}
//               />
//             </li>

//             <li className="mb-1">
//               <input
//                 placeholder="City, State, Zip Code"
//                 name="City_State_Zip_Code"
//                 value={User.City_State_Zip_Code}
//                 onChange={handleInput}
//               />
//             </li>
//           </Grid>
//           <Grid item xs={3}>
//             <li className="mb-1">
//               <input
//                 placeholder="012-34567-89"
//                 name="Namber"
//                 value={User.Namber}
//                 onChange={handleInput}
//               />
//             </li>
//             <li className="mb-1">
//               <input
//                 placeholder="Website"
//                 name="Website"
//                 value={User.Website}
//                 onChange={handleInput}
//               />
//             </li>

//             <li className="mb-1">
//               <input
//                 placeholder="Email"
//                 name="Email"
//                 value={User.Email}
//                 onChange={handleInput}
//               />
//             </li>
//           </Grid>
//         </Grid>
//       </ul>
//     </Box>
//   );
// };

// export default DetailsInvoiceColumn;
























































// import Box from "@mui/material/Box";
// // import React from "react";
// import LightInputField from "../LightInputField/LightInputField";
// import Grid from "@mui/material/Grid";
// import { useState } from "react";
// // import { totalmem } from "os";

// const DetailsInvoiceColumn = () => {
//   const[BussinessName, setBussinessName]= useState()
//   const[Street_Address, setStreet_Address]= useState()
//   const[City_State_Zip_Code, setCity_State_Zip_Code]= useState()
//   const[Namber, setNamber]= useState()
//   const[Website, setWebsite]= useState()
//   const[Email, setEmail]= useState()
//   const[Tatal,setTotal] = useState([])
//    const handleSubmit=(Products)=>{

//       [ 
//        BussinessName,
//        Street_Address,
//        City_State_Zip_Code,
//        Namber,
//        Website,
//        Email,
//       ]





//      setTotal([...Tatal, Products]) 
//   }
// //  console.log(Tatal.BussinessName+"sgjujjhsh")



//   return (
//     <Box>
//       <ul>
//         <Grid container className="container" spacing={5}>
//           <Grid item xs={3}>
//             <li className="mb-1">
//               <LightInputField placeholder="Bussiness Name"  LightInputValue={BussinessName} onChaneg={(e)=>setBussinessName(e.target.LightInputValue)}/>
//             </li>

//             <li className="mb-1">
//               <LightInputField placeholder="Street Address" LightInputValue={Street_Address} onChaneg={(e)=>setStreet_Address(e.target.LightInputValue)} />
//             </li>

//             <li className="mb-1">
//               <LightInputField placeholder="City, State, Zip Code" LightInputValue={City_State_Zip_Code} onChaneg={(e)=>setCity_State_Zip_Code(e.target.LightInputValue)}/>
//             </li>
//           </Grid>
//           <Grid item xs={3}>
//             <li className="mb-1">
//               <LightInputField placeholder="012-34567-89" LightInputValue={Namber} onChaneg={(e)=>setNamber(e.target.LightInputValue)} />
//             </li>
//             <li className="mb-1">
//               <LightInputField placeholder="Website" LightInputValue={Website
// } onChaneg={(e)=>setWebsite(e.target.LightInputValue)} />
//             </li>

//             <li className="mb-1">
//               <LightInputField placeholder="Email" LightInputValue={Email
// } onChaneg={(e)=>setEmail(e.target.LightInputValue)} />
//             </li>
//           </Grid>
//         </Grid>
//       </ul>
//      <button type="click" onClick={handleSubmit}>click</button>
//     </Box>
//   );
// };

// export default DetailsInvoiceColumn;













import Box from "@mui/material/Box";
import LightInputField from "../LightInputField/LightInputField";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const DetailsInvoiceColumn = () => {
  const [User, setUser] = useState({
    Bussiness_Name: "",
    Street_Address: "",
    City_State_Zip_Code: "",
    Namber: "",
    Website: "",
    Email: ""
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let LightInputValue = e.target.value;

    setUser({ ...User, [name]: LightInputValue });

    console.log(LightInputValue); // Log the specific input field LightInputValue
  };

  return (
    <Box>
      <ul>
        <Grid container className="container" spacing={5}>
          <Grid item xs={3}>
            <li className="mb-1">
              <LightInputField
                placeholder="Bussiness Name"
                name="Bussiness_Name"
                LightInputValue={User.Bussiness_Name}
                onChange={handleInput}
              />
            </li>

            <li className="mb-1">
              <LightInputField
                placeholder="Street Address"
                name="Street_Address"
                LightInputValue={User.Street_Address}
                onChange={handleInput}
              />
            </li>

            <li className="mb-1">
              <LightInputField
                placeholder="City, State, Zip Code"
                name="City_State_Zip_Code"
                LightInputValue={User.City_State_Zip_Code}
                onChange={handleInput}
              />
            </li>
          </Grid>
          <Grid item xs={3}>
            <li className="mb-1">
              <LightInputField
                placeholder="012-34567-89"
                name="Namber"
                LightInputValue={User.Namber}
                onChange={handleInput}
              />
            </li>
            <li className="mb-1">
              <LightInputField
                placeholder="Website"
                name="Website"
                LightInputValue={User.Website}
                onChange={handleInput}
              />
            </li>

            <li className="mb-1">
              <LightInputField
                placeholder="Email"
                name="Email"
                LightInputValue={User.Email}
                onChange={handleInput}
              />
            </li>
          </Grid>
        </Grid>
      </ul>
    </Box>
  );
};

export default DetailsInvoiceColumn;
