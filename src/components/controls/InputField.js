import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(_theme => ({
  notchedOutline: {
    borderWidth: '2px',
    borderColor: '#fdb92a !important',
  },
}));

export default function InputField(props) {
  const classes = useStyles();
  const {
    name,
    label,
    value,
    onChange,
    error = null,
    flag,
    InputProps,
    ...other
  } = props;

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
      {...other}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        ...InputProps,
        classes: {
          notchedOutline: flag === true ? classes.notchedOutline : '',
        },
      }}
    />
  );
}
