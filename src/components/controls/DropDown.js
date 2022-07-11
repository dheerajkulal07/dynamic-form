import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { FormControl, InputLabel } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dropdown: {
    minWidth: 230,
  },
}));

export default function DropDown(props) {
  const classes = useStyles();

  const {
    name,
    label,
    value,
    onChange,
    options,
    error = null,
    ...other
  } = props;

  return (
    <FormControl
      className={classes.dropdown}
      {...other}
      {...(error && { error: true })}
      InputLabelProps={{ shrink: true }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...other}
      >
        <MenuItem value=""></MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {" "}
            {item.title}{" "}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
