var React = require('react');
var PropTypes = React.PropTypes;
var Header = require('../components/Header');

function Profile (props) {
  return (
    <div className="jumbotron">
      <Header />
      <h2>Welcome, {props.firstName}!</h2>
      <div className="thumbnail">
        <img className="img-rounded img-responsive" src={props.profileImage}/>
        <div className="caption">
          <h3>{props.firstName} {props.lastName}</h3>
          <p>{props.city}, {props.state}</p>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  profileImage:PropTypes.string.isRequired
}

module.exports = Profile;
