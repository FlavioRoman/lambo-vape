/* eslint-disable react/prop-types */

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

export default function CheckBoxComponent({ values, formik, name }) {
  return (
    <>
      <FormGroup style={{ flexDirection: "row" }}>
        {values?.map((value) => (
          <FormControlLabel
            disableRipple={true}
            key={value.id}
            label={value.name}
            control={
              <Checkbox
                name={`${name}.${value.id}`}
                checked={formik.values[name]?.includes(value.id)}
                onChange={(event) => {
                  const isChecked = event.target.checked;
                  const updatedValues = isChecked
                    ? [...formik.values[name], value.id]
                    : formik.values[name].filter((id) => id !== value.id);

                  formik.setFieldValue(name, updatedValues);
                }}
              />
            }
          />
        ))}
      </FormGroup>
      {formik.touched[name] && !!formik.errors[name] && (
        <Typography sx={{ color: "tomato", textAlign: "left" }}>
          {formik.errors[name]}
        </Typography>
      )}
    </>
  );
}
