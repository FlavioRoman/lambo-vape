/* eslint-disable react/prop-types */

// STYLE
import styles from "./main.module.css";

// MATERIAL UI
import { Box, Button, Modal, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

export default function ModalCheck({ setModal }) {
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...style,
        }}
      >
        {/* TITLE */}
        <h1 className={styles.title}>AUTHENTICATION</h1>

        <TextField sx={{ width: "100%" }} label="NAME" variant="standard" />

        <TextField
          sx={{ width: "100%" }}
          label="LAST NAME"
          variant="standard"
        />

        {/* BUTTON */}
        <Button
          type="button"
          sx={{ width: "100%", marginTop: "20px" }}
          variant="outlined"
          onClick={() => setModal(false)}
        >
          CLOSE
        </Button>
      </Box>
    </Modal>
  );
}
