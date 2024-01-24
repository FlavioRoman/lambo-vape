import * as Yup from "yup";

export const initialValues = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  direction: "",
  country: "",
  enterprise: "",
  company_website: "",
  message: "",
  check_option: [],
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  direction: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  enterprise: Yup.string().required("Required"),
  company_website: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  check_option: Yup.array()
    .min(1, "Please select at least one option")
    .required("Required"),
});
