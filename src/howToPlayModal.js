import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function HowToPlayModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button class="top-bar-btn" onClick={handleOpen}>
        HOW TO PLAY?
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            Instructions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <li> You have 10 guesses to find the MotD (Movie of the Day) </li>
            <li>
              {" "}
              Each Movie guess reveals whether any of these match - Director,
              Actor, Music Director, Year of Release{" "}
            </li>
            <li> All movies are reasonably popular released post 2000 </li>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
