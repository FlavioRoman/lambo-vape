/* eslint-disable react/prop-types */

// STYLE
import styles from "./main.module.css";

// MATERIAL UI
import { Box, Button, Grid, Modal } from "@mui/material";

import { initialValues, validationSchema } from "./validations";

import TextFieldComponet from "../../Elements/TextFieldComponte";
import { useFormik } from "formik";

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

export default function ModalFail({ setModal }) {
  const onSubmit = () => {
    console.log("onSubmit");
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

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
        <h1 className={styles.title}>
          Authentication failed! Please complete the information to follow up on
          the report
        </h1>

        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <TextFieldComponet
              width={"100%"}
              formik={formik}
              name={"email"}
              label={"EMAIL"}
              variant={"standard"}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextFieldComponet
              width={"100%"}
              formik={formik}
              name={"country"}
              label={"COUNTRY"}
              variant={"standard"}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextFieldComponet
              width={"100%"}
              formik={formik}
              name={"purchase_storage"}
              label={"PURCHASE STORAGE"}
              variant={"standard"}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextFieldComponet
              width={"100%"}
              formik={formik}
              name={"code"}
              label={"CODE"}
              variant={"standard"}
            />
          </Grid>
        </Grid>

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
