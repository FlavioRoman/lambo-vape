/* eslint-disable react/prop-types */

// STYLE
import styles from "./main.module.css";

// MATERIAL UI
import { Box, Button, Modal } from "@mui/material";

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

export default function ModalAuthentic({ setModal }) {
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
        <h1 className={styles.title}>Woo hoo! You product is authentic!</h1>

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
