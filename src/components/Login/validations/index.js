import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().notRequired("Requerido"),
  password: Yup.string().notRequired("Requerido"),
});
