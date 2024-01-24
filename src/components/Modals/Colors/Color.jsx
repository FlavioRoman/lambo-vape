/* eslint-disable react/prop-types */

// STYLE
import styles from "./main.module.css";

// MATERIAL UI
import { Box, Modal } from "@mui/material";

// COMPONENT
import ColorSelect from "../../ColorSelect/main";

const style = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  width: "100%",
  transition: "all 0.2s ease",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModalColor({ modal, setModal, handleColor }) {
  return (
    <Modal
      open={modal.color}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...style,
          transform: `${
            modal.color ? "translateY(0px)" : "translateY(-1000px)"
          }`,
        }}
      >
        {/* TITLE */}
        <h1 className={styles.title}>SELECT A FLAVOR</h1>

        {/* COLORS */}
        <ColorSelect position={"relative"} handleColor={handleColor} />

        {/* BUTTON */}
        <button
          className={styles.btn}
          onClick={() => setModal({ color: false })}
        >
          Close
        </button>
      </Box>
    </Modal>
  );
}
