import * as React from "react";

import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Theme
} from "@material-ui/core";

import { HotelEntityVm } from "../hotel-collection.vm";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  media: {
    height: 0,
    paddingTop: "56%"
  },
  card: {
    width: "500px",
    marginTop: "10px"
  }
}));

interface Props {
  hotel: HotelEntityVm;
  editHotel: (id: string) => void;
}

export const HotelCard = (props: Props) => {
  const { hotel, editHotel } = props;
  const classes = useStyles({});

  const goToEditHotel = () => {
    editHotel(hotel.id);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label="hotel">{hotel.rating}</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={hotel.name}
        subheader={hotel.address}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={hotel.picture}
            title={hotel.name}
            className={classes.media}
          />
          <Typography variant="subtitle1" gutterBottom>
            {hotel.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites" onClick={goToEditHotel}>
            <EditIcon />
          </IconButton>
        <IconButton aria-label="Share">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
