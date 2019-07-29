import {
  createFormValidation,
  ValidationConstraints,
  Validators
} from 'lc-form-validation';

const loginFormValidationContrainsts : ValidationConstraints = {
  fields:{
    username: [{validator: Validators.required}],
    password: [{validator: Validators.required}],
  }
}

export const loginFormValidation = createFormValidation(loginFormValidationContrainsts);