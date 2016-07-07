var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var LoginContainer = require('../containers/LoginContainer');
var ProfileContainer = require('../containers/ProfileContainer');
var HomeContainer = require('../containers/HomeContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='login' component={LoginContainer} />
      <Route path='profile' component={ProfileContainer} />
    </Route>
  </Router>
);

module.exports = routes;
