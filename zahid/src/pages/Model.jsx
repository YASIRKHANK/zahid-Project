import React from "react";
import pic from "../images/furby.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "24px",
  pt: 2,
  px: 4,
  pb: 3,
};

const Model = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-center items-center mt-44">
      <div className="border rounded-md bg-blue-200 p-2 w-96 text-justify ">
        <img src={pic} alt="Furby" />
        <p> If you spend much time on sanctuary grounds,</p>
        <Button onClick={handleOpen}>Open to Read More</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 400, height: "400" }}>
            <img src={pic} alt="Furby" />
            <h2 id="child-modal-title" className="text-blue-400">
              About This Hourse
            </h2>
            <p id="child-modal-description" className="text-justify">
              you likely know that residents have complex and fascinating
              personalities and quirks. However, many people have never had the
              opportunity to experience all the amazing things that make
              residents unique for themselves. We have created a series of
              articles compiling fun and fascinating facts about residents to
              share with supporters and the general public. Horses are amazing
              beings who deserve to be better known!
            </p>
            <Button onClick={handleClose}>Save</Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Model;
