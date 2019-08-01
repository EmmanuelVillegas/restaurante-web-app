import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Layout
import Layout from './layout';

// Views
import { SignInView, SignUpView, SignOutView } from './views/auth';
import DashboardView from './views/dashboard';
import { AllProducts } from './views/product';
import { AllTables } from './views/table';
import { AllDeliverys } from './views/delivery';
import { AllKitchens } from './views/kitchen';
import { AllBars } from './views/bar';
import { Error404 } from './views/errors';

const App = ({ loggedIn }) => {
  let routes;

  if (loggedIn) {
    routes = (
      <Layout>
        <Switch>
          <Route exact path="/" component={DashboardView} />
          <Route exact path="/products" component={AllProducts} />
          <Route exact path="/tables" component={AllTables} />
          <Route exact path="/deliverys" component={AllDeliverys} />
          <Route exact path="/kitchens" component={AllKitchens} />
          <Route exact path="/bars" component={AllBars} />
          <Route exact path="/sign-out" component={SignOutView} />
          <Redirect exact path="/sign-in" to="/" />
          <Redirect exact path="/sign-up" to="/" />
          <Route component={Error404} />
        </Switch>
      </Layout>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/sign-in" component={SignInView} />
        <Route exact path="/sign-up" component={SignUpView} />
        <Redirect path="/sign-out" to="/" />
        <Redirect path="/" to="/sign-in" />
        <Route component={Error404} />
      </Switch>
    );
  }
  return routes;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null
});

export default connect(mapStateToProps)(App);
