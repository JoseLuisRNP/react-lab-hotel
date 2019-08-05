import * as React from "react";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Theme, makeStyles } from "@material-ui/core/styles";

import { HotelEntityVm, cities, EditHotelFormErrors } from "./hotel-edit.vm";
import {
  TextFieldForm,
  RatingField,
  SelectField,
  TextAreaField
} from "common";


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  smallMargin: {
    margin: theme.spacing(2)
  },
  image: {
    maxWidth: "100%",
    maxHeight: "40%"
  }
}));

interface Props {
  hotel: HotelEntityVm;
  onUpdateHotel: (fieldId: string, value: string | number) => void;
  onSaveHotel: () => void;
  editHotelFormErrors: EditHotelFormErrors;
}

export const HotelEditComponent = (props: Props) => {
  const classes = useStyles({});
  const { hotel, onUpdateHotel, onSaveHotel, editHotelFormErrors } = props;

  return (
    <>
      <form className={classes.container}>
        <TextFieldForm
          label="Name"
          name="name"
          value={hotel.name}
          onChange={onUpdateHotel}
          error={editHotelFormErrors.name.errorMessage}
        />

        <img src={hotel.picture} className={classes.image} />

        <TextFieldForm
          label="Picture"
          name="picture"
          value={hotel.picture}
          onChange={onUpdateHotel}
          error={editHotelFormErrors.picture.errorMessage}
        />

        <Box className={classes.box}>
          <RatingField
            label="Rating"
            name="rating"
            value={hotel.rating}
            onChange={onUpdateHotel}
            precision={0.5}
            error={editHotelFormErrors.rating.errorMessage}
          />

          <SelectField
            label="City"
            name="city"
            value={hotel.city}
            onChange={onUpdateHotel}
            collection={cities}
            error={editHotelFormErrors.city.errorMessage}
          />
        </Box>

        <TextAreaField
          label="Description"
          name="description"
          rows={8}
          value={hotel.description}
          onChange={onUpdateHotel}
          error={editHotelFormErrors.description.errorMessage}
        />

        <Button
          className={classes.smallMargin}
          variant="contained"
          color="primary"
          onClick={onSaveHotel}
        >
          Save
        </Button>
      </form>
    </>
  );
};
