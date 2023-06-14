import { useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import style from "./index.module.css";
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';

const ImageUploader = () => {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setUploadedPhoto(reader.result);
      };
  
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setUploadedPhoto(null);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box>
      {uploadedPhoto ? (
        <Box
          className="Uploaded-Logo"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={uploadedPhoto}
            alt="Uploaded Logo"
            className={style.uploaded}
          />
          {isHovered && (
            <button className={style.cutButton} onClick={handleRemovePhoto}>
              <CloseIcon />
            </button>
          )}
        </Box>
      ) : (
        <FormLabel id="form1" runat="server">
          <Box>
            <span className={style.fileWrapper}>
              <input
                type="file"
                name="photo"
                id="imgInp"
                accept="image/*"
                className={style.uploader}
                onChange={handlePhotoUpload}
              />
              <span className={style.btnAlpha}>Add or Drag logo</span>
            </span>
          </Box>
        </FormLabel>
      )}
    </Box>
  );
};

export default ImageUploader;