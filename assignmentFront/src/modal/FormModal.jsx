import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";

import FormClaim from "../claims/FormClaim";
import FormOwner from "../owners/FormOwner";
import FormVehicle from "../vehicles/FormVehicle";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#3a3a3a",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    color: "#ebebeb"
  };
  
  const FormModal = ({modal, setModal}) => {
    const [open, setOpen] = useState(false);

    const handleClose = () =>{
        setOpen(false);
        setModal("");
    }; 

    useEffect(() => {
      if(modal !== "") setOpen(true);
    }, [modal]);
  
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{overflow: "scroll"}}
        >
          <Box sx={{ ...style, width: 700 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {/* <IconButton onClick={handleClose}>
                ❌
              </IconButton> */}
              <Box> 
                {modal === "0" && <FormVehicle setOpen={setOpen} setModal={setModal}/>}
                {modal === "1" && <FormOwner setOpen={setOpen} setModal={setModal}/>}
                {modal === "2" && <FormClaim setOpen={setOpen} setModal={setModal}/>}
              </Box>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  };

export default FormModal;