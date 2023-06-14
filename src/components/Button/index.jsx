import { Button } from "@mui/material";

const LoadingButton = ({ ButtonName, clickAddItem ,className }) => {
  return (
    <Button variant="outline" onClick={clickAddItem} className={`Darkbutton ${className}`}>
      {ButtonName}
    </Button>
  );
};

export default LoadingButton;
