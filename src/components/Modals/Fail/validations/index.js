import * as Yup from "yup";

export const initialValues = {
  email: "",
  country: "",
  purchase_storage: "",
  code: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  purchase_storage: Yup.string().required("Required"),
  code: Yup.string().required("Required"),
});
