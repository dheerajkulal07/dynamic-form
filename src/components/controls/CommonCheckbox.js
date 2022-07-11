import { Checkbox } from "@material-ui/core";
import React from "react";
import { FormControlLabel } from "@mui/material";

export default function CommonCheckbox(props) {
  return (
    <FormControlLabel
      control={<Checkbox {...props}></Checkbox>}
      label={props.label}
    />
  );
}
