/* eslint-disable react/prop-types */

// MATERIAL UI
import { TextField, Typography } from "@mui/material";

export default function TextFieldComponet({
  name,
  type,
  width,
  label,
  formik,
  variant,
  className,
  placeholder,
}) {
  return (
    <>
      <TextField
        name={name}
        sx={{ width }}
        type={type}
        label={label}
        value={formik.values[name]}
        error={formik.touched[name] && !!formik.errors[name]}
        variant={variant}
        className={className}
        helperText={formik.touched[name] && !!formik.errors[name]}
        placeholder={placeholder}
        onChange={formik.handleChange}
      />
      {formik.touched[name] && !!formik.errors[name] && (
        <Typography sx={{ width: "100%", color: "tomato", textAlign: "left" }}>
          {formik.errors[name]}
        </Typography>
      )}
    </>
  );
}
