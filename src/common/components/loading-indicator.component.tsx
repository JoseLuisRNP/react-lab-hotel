import * as React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",  
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 50%)",
  }
});

export const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  const classes = useStyles({});
  
  return(
    promiseInProgress &&
    <div className={classes.container}>
      <Loader className={classes.loader} type="ThreeDots" color="#3f51b5" height="100" width="100"/>
    </div>
    
  )
}