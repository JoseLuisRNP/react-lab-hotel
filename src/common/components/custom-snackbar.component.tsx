import * as React from 'react';
import { Snackbar, SnackbarContent, IconButton, Theme, makeStyles} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import clsx from 'clsx';


export type Variant = 'success' | 'warning' | 'info' | 'error' | 'none';
const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}

const useStyles = makeStyles(
  (theme:Theme) => ({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.main,
    },
    info: {
      backgroundColor: theme.palette.primary.main,
    },
    warning: {
      backgroundColor: amber[600],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.8,
      marginRight: theme.spacing(1),
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    }
  }),
);

interface Props {
  open: boolean;
  message: string;
  variant : Variant
  handleClose: () => void;
}

export const CustomSnackbar = (props: Props) => {
  const classes = useStyles({});
  const {handleClose, open, message, variant} = props;
  const Icon = variantIcon[variant]
  return (
    <Snackbar 
      anchorOrigin={{
        vertical: 'bottom',
        horizontal:'center',
      }}
      open={open}
      onClose={handleClose}
      autoHideDuration={5000}
      >
      <SnackbarContent 
        message={
          <span className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)}/>
            {message}
            </span>
        }
        action={
          [
            <IconButton key="close" color="inherit" onClick={handleClose}>
              <CloseIcon className={classes.icon}/>
            </IconButton>
          ]
        }
        className={clsx(classes[variant])}
        aria-describedby="snackbar"

      />
    </Snackbar>
  )
  
  Snackbar.defaultProps = {
    open: false,
    
  }
  
}