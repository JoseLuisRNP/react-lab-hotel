import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {TextFieldForm} from 'common/components';
import { makeStyles, createStyles } from '@material-ui/styles';
import { CredentialsEntityVm, LoginFormErrors } from './login.vm';



const useStyles = makeStyles(
  createStyles({
    formContainer: {
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  }),
);

interface Props {
  onLogin: () => void;  
  credentials: CredentialsEntityVm;
  onUpdateCredentials: (fieldId:string, value: string) => void;
  loginFormErrors: LoginFormErrors;
}

export const LoginComponent = (props: Props) => {
  const classes = useStyles({});
  const {onLogin, credentials, loginFormErrors ,onUpdateCredentials } = props;
 
  return(
    <>
      <Card>
        <CardHeader title="Login"/>
        <CardContent>
          <div className={classes.formContainer}>
            <TextFieldForm 
              label="Name" 
              name="username"
              value={credentials.username} 
              onChange={onUpdateCredentials}
              error={loginFormErrors.username.errorMessage}
              />
            <TextFieldForm 
              label="Password" 
              name="password"
              type="password"
              value={credentials.password}
              onChange={onUpdateCredentials}
              error={loginFormErrors.password.errorMessage}
              />
            <Button variant="contained" color="primary" onClick={onLogin}>
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}