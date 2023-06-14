// import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandableItem from "../ExpandableItem/ExpandableItem";
import Box from "@mui/material/Box";
import style from "./index.module.css";
import CountrySelect from "./Country";
import TaxType from "./TaxType";
import {useState} from 'react'









export default function SelectedListContent(prop) {
  const[Value1,setValue1]= useState("")
  // const[GST,setGST]= useState("GST (%)")





  return (
    <Box className="adminCard">
    <List component="nav" aria-labelledby="nested-list-subheader">
      <ListItem button>
        <ListItemText className={style.settingText} primary="Settings" />
      </ListItem>
      <div style={{ borderTop: "1px solid #ddd" }}></div>
      <ExpandableItem
        render={(xprops) => (
          <div>
          
            <ListItem button onClick={() => xprops.setOpen(!xprops.open)} >
              <ListItemText className={`pt-3 ${style.subSettingText}`} primary="Invoice details" />
              {
                xprops.open ? <ExpandLess /> : <ExpandMore />
            }
            </ListItem>
            <Collapse in={xprops.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                </ListItem>
                <div  style={{display:"flex", justifyContent:"space-between",backgroundColor:"#faf8f7",padding:"15px"}} className="form-check form-switch">
             
                <div>
                <label style={{fontSize:"18px",color:"#585f6b"}} className="form-check-label">SHIP TO</label>
                </div>
                <div>
                <input style={{fontSize:"24px"}} onClick={()=>prop.setToggle(!prop.Toggle)} className="form-check-input" type="checkbox" id="flex" defaultChecked />
                </div>
              </div>
              
              </List>
            </Collapse>
          </div> 
        )}
      />
      <ExpandableItem
        render={(xprops) => (
          <div>
            <ListItem button onClick={() => xprops.setOpen(!xprops.open)} >
              <ListItemText primary="Totals" className={style.subSettingText}  />
              {xprops.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={xprops.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
             
                <ListItem button  style={{display:"flex",flexDirection:"column"}}>
                <CountrySelect value={prop.value} setValue={prop.setValue}/>
                <TaxType Value1={Value1} setValue1={setValue1}/>
                <div  style={{display:"flex",    width:"100%", justifyContent:"space-between",padding:"15px"}} className="form-check form-switch">
                <div><label style={{fontSize:"16px",color:"#585f6b"}} className="form-check-label">Subtotal</label></div>
                <div> <input style={{fontSize:"19px"}} onClick={()=>prop.setSubTotal(!prop.SubTotal)} className="form-check-input" type="checkbox" id="flex" defaultChecked /></div>  </div>
                <div  style={{display:"flex",width:"100%", justifyContent:"space-between",padding:"15px"}} className="form-check form-switch">
                <div><label style={{fontSize:"16px",color:"#585f6b"}} className="form-check-label">Other Tax(%)</label></div>
                <div><input style={{fontSize:"19px"}} onClick={()=>prop.setOtherTax(!prop. OtherTax)} className="form-check-input" type="checkbox" id="flex" defaultChecked />  </div>  </div>
                <div  style={{display:"flex", width:"100%", justifyContent:"space-between",padding:"15px"}} className="form-check form-switch">
                <div><label style={{fontSize:"16px",color:"#585f6b"}} className="form-check-label">Shiping Tax(%)</label>  </div>
                <div> <input style={{fontSize:"19px"}} onClick={()=>prop.setShipping(!prop.Shipping)} className="form-check-input" type="checkbox" id="flex" defaultChecked /></div> </div>
                <div style={{display:"flex",  width:"100%", justifyContent:"space-between",padding:"15px"}} className="form-check form-switch">
                <div><label style={{fontSize:"16px",color:"#585f6b"}} className="form-check-label">{Value1}</label></div>
                <div> <input style={{fontSize:"19px"}} onClick={()=>prop.setPPMtax(!prop.PPMtax)} className="form-check-input" type="checkbox" id="flex" defaultChecked /></div></div>
                <div  style={{display:"flex",  width:"96%", justifyContent:"space-between",padding:"15px"}} className="form-check form-switch">
                <div> <label style={{fontSize:"16px",color:"#585f6b"}} className="form-check-label">Discount(%)</label></div>
                <div> </div><input style={{fontSize:"19px"}} onClick={()=>prop.setDiscount(!prop.Discount)} className="form-check-input" type="checkbox" id="flex" defaultChecked />   </div>
                </ListItem>
                </List>
              
            </Collapse>
          </div>
        )}
      />

      <ExpandableItem
        render={(xprops) => (
          <div>
            <ListItem button onClick={() => xprops.setOpen(!xprops.open)} >
              <ListItemText primary="Style" className={style.subSettingText} />
              {xprops.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={xprops.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
               
                </ListItem>
               
              </List>
            </Collapse>
          </div>
        )}
      />
    </List>
 
    </Box>
    
  );
}
