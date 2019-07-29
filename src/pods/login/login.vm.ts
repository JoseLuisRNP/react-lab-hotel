import { FieldValidationResult } from "lc-form-validation";
import { Variant } from "common/components/customSnackbar.component";

export interface CredentialsEntityVm {
  username: string;
  password: string;
}

export const createEmptyLogin = (): CredentialsEntityVm => ({
  username: '',
  password: '',
});

export interface LoginFormErrors {
  username : FieldValidationResult;
  password: FieldValidationResult;
}

export const createDefaultLoginFormErrors = () : LoginFormErrors => ({
  username: new FieldValidationResult(),
  password: new FieldValidationResult(),
})

//Crear vm para snackbar?