import { FieldValidationResult } from "lc-form-validation";

export interface HotelEntityVm {
  id: string;
  picture: string;
  name: string;
  description: string;
  rating: number;
  city: string;
}

export const createEmptyHotel = () => ({
  id: '',
  picture: '',
  name: '',
  description: '',
  rating: 0,
  city: '',
})


export const cities = [
  'New York',
  'Seattle',
  'Burlingame',
  'Denver'
]

export interface EditHotelFormErrors {
  name: FieldValidationResult;
  picture: FieldValidationResult;
  rating: FieldValidationResult;
  city: FieldValidationResult;
  description: FieldValidationResult
}


export const createDefaultEditHotelFormErrors = ():EditHotelFormErrors => ({
  name: new FieldValidationResult(),
  picture: new FieldValidationResult(),
  rating: new FieldValidationResult(),
  city: new FieldValidationResult(),
  description: new FieldValidationResult(),
});
