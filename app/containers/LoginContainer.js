var React = require('react');
var Login = require('../components/Login');

var LoginContainer = React.createClass({
  contextTypes: {
     router: React.PropTypes.object.isRequired
   },
  getInitialState: function () {
    return {
      email: '',
      password: '',
      message: ''
    }
  },
  handleSubmitUser: function (e) {
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;
    var top = this;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      var errorMessage = error.message;
      top.setState({
        message: errorMessage
      });
    });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user !== null) {
        top.context.router.push('/profile')
      }
    });
  },
  handleUpdateEmail: function (event) {
    this.setState({
      email: event.target.value
    });
  },
  handleUpdatePassword: function (event) {
    this.setState({
      password: event.target.value
    });
  },
  render: function () {
    return (
      <Login
        onSubmitUser={this.handleSubmitUser}
        onUpdateEmail={this.handleUpdateEmail}
        onUpdatePassword={this.handleUpdatePassword}
        email={this.state.email}
        message={this.state.message}/>
    )
  }
});

module.exports = LoginContainer;
