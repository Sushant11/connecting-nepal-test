import React, { Fragment } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

// Import custom components
import PublicRoute from '../../routes/PublicRoute';

import {
    AsyncAppLayout,
    AsyncDashboard,
    AsyncBooking,
    AsyncCalendar,
    AsyncNotFound,
} from './AsyncComponent';

const App = () => (
  <Fragment>
    <Switch>
      <PublicRoute exact path="/" layout={AsyncAppLayout} component={AsyncDashboard} />
      <PublicRoute exact path="/booking" layout={AsyncAppLayout} component={AsyncBooking} />
      <PublicRoute exact path="/calendar" layout={AsyncAppLayout} component={AsyncCalendar} />

      <Route path="/404" component={AsyncNotFound} />
      <PublicRoute layout={AsyncAppLayout} component={AsyncNotFound} />
    </Switch>
  </Fragment>
);

export default withRouter(App);
