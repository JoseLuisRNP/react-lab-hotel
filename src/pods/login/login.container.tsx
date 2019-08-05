import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { LoginComponent } from "./login.component";
import { routerLinks, SessionContext } from "core";
import {
  createEmptyLogin,
  CredentialsEntityVm,
  LoginFormErrors,
  createDefaultLoginFormErrors
} from "./login.vm";
import { validateCredentials } from "./login.api";
import { loginFormValidation } from "./login.validation";
import { FormValidationResult } from "lc-form-validation";
import {CustomSnackbar, Variant} from 'common';

interface Props extends RouteComponentProps {}

const LoginContainerInner = (props: Props) => {
  const [loginFormErrors, setLoginFormErrors] = React.useState<LoginFormErrors>(
    createDefaultLoginFormErrors()
  );
  const [credentials, setCredentials] = React.useState<CredentialsEntityVm>(
    createEmptyLogin()
  );

  const [snackbarError, setSnackbarError] = React.useState({
    message:'',
    open: false,
    variant: 'error' 
  });
  
  const { history } = props;

  const { updateLogin } = React.useContext(SessionContext);

  const doLogin = () => {
    loginFormValidation.validateForm(credentials).then(formValidatonResult => {
      handleFormValidation(formValidatonResult);
    });
  };

  const handleFormValidation = (formValidatonResult: FormValidationResult) => {
    if (formValidatonResult.succeeded) {
      doServerLogin();
    } else {
      showLoginFormErrors(formValidatonResult);
    }
  }

  const doServerLogin = () => {
    validateCredentials(credentials.username, credentials.password).then(
      areValidCredentials =>
        areValidCredentials
          ? navigateToHotelCollection()
          : setSnackbarError({
            ...snackbarError,
            message:"Invalid credentials",
            open: true,
            variant: 'error'
          })
    );
  }

  const navigateToHotelCollection = () => {
    updateLogin(credentials.username);
    history.push(routerLinks.hotelCollection);
  }

  const showLoginFormErrors = (formValidatonResult: FormValidationResult) => {
    setSnackbarError({
      ...snackbarError,
      message:"Empty fields are not allowed, review the fields",
      open: true,
      variant: 'warning'
    })
        const updateLoginFormErrors = {
          ...loginFormErrors,
          ...formValidatonResult.fieldErrors
        };
        setLoginFormErrors(updateLoginFormErrors);
  }

  const onUpdateCredentialsField = (fieldId: string, value: string) => {
    setCredentials({
      ...credentials,
      [fieldId]: value
    });

    loginFormValidation
      .validateField(credentials, fieldId, value)
      .then(fieldValidationResult => {
        setLoginFormErrors({
          ...loginFormErrors,
          [fieldId]: fieldValidationResult
        });
      });
  };

  const onSnackbarError = () => {
    setSnackbarError({
      ...snackbarError,
      open: false
    })
  }

  return (
    <>
      <LoginComponent
        onLogin={doLogin}
        credentials={credentials}
        onUpdateCredentials={onUpdateCredentialsField}
        loginFormErrors={loginFormErrors}
      />      
      <CustomSnackbar 
        open={snackbarError.open}
        message={snackbarError.message}
        handleClose={onSnackbarError}
        variant={snackbarError.variant as Variant}
      />
    </>
  );
};

export const LoginContainer = withRouter(LoginContainerInner);
