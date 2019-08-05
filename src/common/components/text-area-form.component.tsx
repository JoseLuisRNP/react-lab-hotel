import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

interface Props {
  label: string;
  name: string;
  rows: number;
  value: string;
  onChange: (field: string, value: string) => void;
  error?: string;
}

export const TextAreaField = (props: Props) => {
  const { label, name, rows, value, onChange, error } = props;

  const handleChange = (field: string) => event => {
    onChange(field, event.target.value);
  };

  return (
    <>
      <TextField
        id={name}
        label={label}
        multiline={true}
        rows={rows}
        value={value}
        onChange={handleChange(name)}
      />
      <Typography variant="caption" color="error" gutterBottom>
        {error}
      </Typography>
    </>
  );
};
