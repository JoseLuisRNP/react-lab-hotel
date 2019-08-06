import * as React from "react";
import { HotelEditComponent } from "./hotel-edit.component";
import {
  HotelEntityVm,
  EditHotelFormErrors,
  createDefaultEditHotelFormErrors,
  createEmptyHotel
} from "./hotel-edit.vm";
import { editHotelFormValidation } from "./hotel-edit.validation";
import { getHotelById } from "./hotel-edit.api";
import { hotelEntityApiToVm, hotelEntityVmToApi } from "./hotel-edit.mapper";
import { CustomSnackbar } from "common";
import { FormValidationResult } from "lc-form-validation";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routerLinks, baseApirUrl } from "core";
import Axios from "axios";

interface Props extends RouteComponentProps{
  hotelId: string;
}

const HotelEditContainerInner = (props: Props) => {
  const [hotel, setHotel] = React.useState<HotelEntityVm>(createEmptyHotel());
  const [editHotelFormErrors, setEditHotelFormErrors] = React.useState<
    EditHotelFormErrors
  >(createDefaultEditHotelFormErrors());
  const [snackbarError, setSnackbarError] = React.useState({
    message:
      "Oooops! something seems to have gone wrong. Can you check the fields?.",
    open: false,
    variant: "error"
  });

  const {hotelId, history} = props;

  React.useEffect(() => {    
    getHotelById(hotelId).then(result => {
      const hotelSelected = hotelEntityApiToVm(result);
      setHotel(hotelSelected);
    });    
  }, []);

  const onUpdateHotelField = (fieldId: string, value: string | number) => {
    setHotel({
      ...hotel,
      [fieldId]: value
    });    
  };

  const onSnackbarError = () => {
    setSnackbarError({
      ...snackbarError,
      open: false
    });
  };

  const doUpdateHotel = () => {
    editHotelFormValidation.validateForm(hotel).then(formValidationResult => {
      handleFormValidation(formValidationResult);
    });

    const handleFormValidation = (
      formValidationResult: FormValidationResult
    ) => {
      if (formValidationResult.succeeded) {
        updateHotel();
        history.push(routerLinks.hotelCollection);
        console.log(hotel);
      } else {
        showEditHotelFormErrors(formValidationResult);
      }
    };
  };

  const updateHotel = () => {
    const hotelApi = hotelEntityVmToApi(hotel);
    console.log(hotelApi);
    const putApiUrl = `${baseApirUrl}/api/hotels/${hotel.id}`;
    Axios.patch(putApiUrl, hotelApi, {headers: {"Content-Type": "application/json"}});
  }

  const showEditHotelFormErrors = (formValidationResult: FormValidationResult) => {
    setSnackbarError({
      ...snackbarError,
      open: true
    });
    const updateEditHotelFormErrors = {
      ...editHotelFormErrors,
      ...formValidationResult.fieldErrors
    };
    setEditHotelFormErrors(updateEditHotelFormErrors);
  }

  return (
    <>
      <HotelEditComponent
        hotel={hotel}
        onUpdateHotel={onUpdateHotelField}
        onSaveHotel={doUpdateHotel}
        editHotelFormErrors={editHotelFormErrors}
      />
      <CustomSnackbar
        open={snackbarError.open}
        message={snackbarError.message}
        variant="error"
        handleClose={onSnackbarError}
      />
    </>
  );
};

export const HotelEditContainer = withRouter(HotelEditContainerInner);