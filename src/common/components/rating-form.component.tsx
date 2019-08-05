import * as React from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import {  makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme:Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  smallMargin: {
    margin: theme.spacing(2)
  },
  
}));

interface Props {
  label: string;
  name: string;
  value: number;
  onChange: (fieldId:string, value: number) => void;
  precision: number;
  error?: string;
}

export const RatingField = (props: Props) => { 
  const {label, name, value, onChange, precision, error} = props;
  const classes = useStyles({});

  const handleChange = (field: string) => event => {
    onChange(field, parseFloat(event.target.value))
  }

  return (
    <Box className={classes.container}>
      <InputLabel htmlFor={name} className={classes.smallMargin}>
        {label}
      </InputLabel>
      <Rating
        name={name}
        value={value}
        onChange={handleChange(name)}
        precision={precision}
      />
      <Typography variant="caption" color="error" gutterBottom>
        {error}
      </Typography>
    </Box>
  );
};
