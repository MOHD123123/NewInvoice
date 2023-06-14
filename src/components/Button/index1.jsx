import { Button } from "@mui/material";

const LoadingButton1 = ({ ButtonName, clickAddItem ,className }) => {
  return (
    <Button variant="outline" onClick={clickAddItem} className={` ${className}`}>
      {ButtonName}
    </Button>
  );
};

export default LoadingButton1;
