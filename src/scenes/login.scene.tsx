import * as React from "react";
import { Link } from "react-router-dom";

import {routerLinks} from 'core';
import { CenteredLayout } from "layout";
import { LoginContainer } from "pods/login";

export const LoginScene = () => {
  return (
    <CenteredLayout>
      <LoginContainer />
    </CenteredLayout>
  );
};
