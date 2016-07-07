var React = require('react');
var Profile = require('../components/Profile');

var ProfileContainer = React.createClass({
  getInitialState: function () {
    return {
      firstName: '',
      lastName: '',
      city: '',
      state: '',
      profileImage: ''
    }
  },
  componentWillMount: function() {
    var top = this;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
            var firstName = snapshot.val().firstName;
            var lastName = snapshot.val().lastName;
            var city = snapshot.val().city;
            var state = snapshot.val().state;
            var profileImage = snapshot.val().profileImage;
            top.setState({
              firstName: firstName,
              lastName: lastName,
              city:city,
              state:state,
              profileImage: profileImage
            });
        });
      } else {
        top.context.router.push('/')
      }
    });


  },
  render: function () {
    return (
      <Profile
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        city={this.state.city}
        state={this.state.state}
        profileImage={this.state.profileImage}
      />
    )
  }
});

module.exports = ProfileContainer;
