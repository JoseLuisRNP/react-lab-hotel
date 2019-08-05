import * as React from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme:Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  smallMargin: {
    margin: theme.spacing(2),
  },
  formControl: {
    minWidth: theme.spacing(20),
  },
}));

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (field: string, value: string) => void;
  collection: string[];
  error: string;
}

export const SelectField = (props: Props) => {
  const classes = useStyles({});
  const {label, name, value, onChange, collection, error} = props;

  const handleChange = (field:string) => (event) => {
    onChange(field, event.target.value)
  }

  return (
    <>
    <Box className={classes.container}>
      <InputLabel htmlFor={name} className={classes.smallMargin}>{label}</InputLabel>
      <FormControl className={classes.formControl}>
        <TextField
          select
          type="text"
          value={value}
          onChange={handleChange(name)}
          inputProps={{
            name,
          }}
        >
          {collection.map(itemCollection => 
            <MenuItem key={itemCollection} value={itemCollection}>
              {itemCollection}
            </MenuItem>
          )}
        </TextField>
      </FormControl>      
    </Box>
    <Typography variant="caption" color="error" gutterBottom>
    {error}
    </Typography>
    </>
  );
};
