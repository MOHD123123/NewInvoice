// import { Button } from "react-bootstrap"
// import { Form } from "react-router-dom";
// // eslint-disable-next-line no-unused-vars
// import React from "react";




// const Subscrib = () => {
//   return (
//     <div className={style.Subscribdiv}>
//     <div className={style.SubscribHeadDiv}>
//     <h1 className={style.SubscribHeadDiv}> Subscribe to Newsletter</h1>
//     </div>
//     <div className={style.SubscribperaDiv}>
//     <p className={style.Subscribpera}>
//     Keep your billing process on track with the latest news and tips. Subscribe to our newsletter now!
//     </p>
//     </div>
//     <div className={style.SubscribFormdiv}>
//     <Form  className={style.SubscribForm}>
// <input className={style.SubscribInput}
// type="email"
// name="noteLabel"
// placeholder="Enter your email:"

// // maxLength="50"
// value="Notes:"
// />
// <Button variant="denger">Suscribe</Button>
// </Form>
//     </div>
   
 
 

//     </div>
//   )
// }

// export default Subscrib



import { useFormik } from 'formik'
import './indexmodule.css'
import  { useState } from 'react';




const Subscrib = () => {
  const [submitted, setSubmitted] = useState(false);

  const Formik1= useFormik({
    initialValues:{
      email:""
    },
    onSubmit:values=>{
      console.log("sjgj" + values)
      setSubmitted(true)
      setTimeout(()=>setSubmitted(false),2000);
      // email:""
    },validate:values=>{
      let errors= {}
      if(!values.email){
        errors.email="please enter your bussiness email"
      }

      return errors
    }
  })
  return (
    <div className="Subscribdiv" >
    <div className="SubscribHeadDiv">
        <h2 className="SubscribHead"> Subscribe to Newsletter</h2>
        </div>
        <div className="SubscribperaDiv">
            <p className="Subscribpera">
            Keep your billing process on track with the latest news and tips. Subscribe to our newsletter now!
            </p>
            </div>
                <div className="SubscribFormdiv">
    <form onSubmit={Formik1.handleSubmit} className="SubscribForm">
<input className="SubscribInput" type="email" placeholder="Enter your email:" name='email' onChange={Formik1.handleChange} value={
  Formik1.values.email
}

maxLength="50"
/>
<button className='button' >Subscribe</button>
</form>
    </div>
  <p className='form-error'>{Formik1.errors.email?<p style={{color:"red"}}>{Formik1.errors.email}</p>:null} 
{submitted?<p style={{color:"green",fontSize:"20px"}}>Thanks for your subscribtion</p>:""}
</p>
    </div>
  )
}

export default Subscrib















// import  { useState } from 'react';
// import { useFormik } from 'formik';
// import './indexmodule.css';

// const Subscrib = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       email: ''
//     },
//     onSubmit: (values) => {
//       console.log("sjgj" + values);
//       setSubmitted(true);
//     },
//     validate: (values) => {
//       let errors = {};
//       if (!values.email) {
//         errors.email = 'Required';
//       }
//       return errors;
//     }
//   });

//   return (
//     <div className="Subscribdiv">
//       <div className="SubscribHeadDiv">
//         <h2 className="SubscribHead">Subscribe to Newsletter</h2>
//       </div>
//       <div className="SubscribperaDiv">
//         <p className="Subscribpera">
//           Keep your billing process on track with the latest news and tips. Subscribe to our newsletter now!
//         </p>
//       </div>
//       <div className="SubscribFormdiv">
//         {!submitted ? (
//           <form onSubmit={formik.handleSubmit} className="SubscribForm">
//             <input
//               className="SubscribInput"
//               type="email"
//               name='email'
//               placeholder="Enter your email:"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//               maxLength="50"
//             />
//             <button className="button">Subscribe</button>
//           </form>
//         ) : (
//           <p>Thanks for subscribing!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Subscrib;
