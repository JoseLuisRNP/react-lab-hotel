import * as React from 'react';
import { Link } from 'react-router-dom';

import {routerLinks} from 'core';
import { AppLayout } from 'layout';
import { HotelCollectionContainer } from 'pods/hotel-collection';

export const HotelCollectionScene = () => {
  return (
    <AppLayout>
    {/*<h2>Hello from Hotel collection page!</h2>
    <Link to={routerLinks.login}>Navigate to Login Page</Link>*/}
      <HotelCollectionContainer />
    </AppLayout>
  );
}