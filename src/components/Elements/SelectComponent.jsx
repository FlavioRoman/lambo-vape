/* eslint-disable react/prop-types */

import { Select, MenuItem, Typography, FormControl } from "@mui/material";

export default function SelectComponent({
  name,
  label,
  width,
  formik,
  values,
}) {
  return (
    <FormControl sx={{ width }} variant="standard">
      <Select
        sx={{ width }}
        name={name}
        label={label}
        value={formik.values[name]}
        onChange={formik.handleChange}
      >
        {values?.map((value) => (
          <MenuItem key={value?.id} value={value?.id}>
            {value?.name}
          </MenuItem>
        ))}
      </Select>
      {formik?.touched[name] && formik.errors[name] && (
        <Typography sx={{ color: "tomato", textAlign: "left" }}>
          {formik.errors[name]}
        </Typography>
      )}
    </FormControl>
  );
}
