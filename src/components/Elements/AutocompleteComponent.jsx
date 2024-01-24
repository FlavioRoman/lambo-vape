/* eslint-disable react/prop-types */

import { Autocomplete, FormControl, TextField } from "@mui/material";

const AutocompleteSelectTextField = ({ formik, name, label, options }) => {
  return (
    <>
      <FormControl sx={{ width: "100%" }}>
        <Autocomplete
          disablePortal
          options={options}
          getOptionLabel={(option) => option.label}
          getOptionSelected={(option, value) => option.value === value.value}
          value={
            options.find((option) => option.value === formik.values[name]) ||
            null
          }
          onChange={(event, value) => {
            formik.setFieldValue(name, value ? value.value : "");
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              name={name}
              label={label}
              variant="standard"
              error={formik.touched[name] && !!formik.errors[name]}
              helperText={formik.touched[name] && formik.errors[name]}
            />
          )}
        />
      </FormControl>
    </>
  );
};

export default AutocompleteSelectTextField;
