import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";

import { routerSwitchRoutes, SessionProvider } from "core";
import { LoginScene, HotelCollectionScene, HotelEditScene } from "./scenes";

ReactDOM.render(
  <SessionProvider>
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={routerSwitchRoutes.login}
          component={LoginScene}
        />
        <Route
          path={routerSwitchRoutes.hotelCollection}
          component={HotelCollectionScene}
        />
        <Route 
          path={routerSwitchRoutes.hotelEdit}
          component={HotelEditScene}
        />
      </Switch>
    </HashRouter>
  </SessionProvider>,
  document.getElementById("root")
);
