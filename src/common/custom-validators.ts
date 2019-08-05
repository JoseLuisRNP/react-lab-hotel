import { FieldValidationResult } from "lc-form-validation";


export const higherThanTwo = (value, vm, customParams) => {
  const minValue = 2;
  const isValid = value >= minValue;
  const errorMessage = 'Minimum two stars to be accepted';
  const validationResult = new FieldValidationResult();

  validationResult.succeeded = isValid;
  validationResult.type = 'IS_HIGHER_THAN_TWO';
  validationResult.errorMessage = isValid ? '' : errorMessage;

  return validationResult;
}

export const isSelected = (value, vm, customParams) => {
  const isValid = value;
  const errorMessage = 'A city must be selected';
  const validationResult = new FieldValidationResult();

  validationResult.succeeded = !!isValid;
  validationResult.type = 'CITY_IS_SELECTED'
  validationResult.errorMessage = isValid ? '' : errorMessage;

  return validationResult;
}