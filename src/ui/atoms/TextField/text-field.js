import React from 'react'
import TextField from "@material-ui/core/TextField";

export default ({
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  }) => (
  <TextField
    {...rest}
    name={name}
    inputProps={restInput}
    onChange={onChange}
    value={value}
  />
)