import { Validators, createFormValidation } from "lc-form-validation";
import { higherThanTwo, isSelected } from 'common';
const validationConstraints = {
  fields: {
    name: [
      {validator: Validators.required},
      {
        validator: Validators.minLength,
        customParams: {length: 3}
      },
    ],
    picture: [
      {validator: Validators.required},
    ],
    rating: [
      {validator: higherThanTwo}
    ],
    city: [
      //Select always has a value, never fails validation
      {validator: isSelected}
    ],
    description: [
      {validator: Validators.required}
    ]
  }
}

export const editHotelFormValidation = createFormValidation(validationConstraints);