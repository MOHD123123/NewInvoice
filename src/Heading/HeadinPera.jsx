
import style from "./index.module.css";
const HeadinPera = (prop) => {
  return (
    <div className={style.Heading}>
  
<h1>{prop.Heading}</h1>
<p>{prop.peragraph}</p>


    </div>
  )
}

export default HeadinPera