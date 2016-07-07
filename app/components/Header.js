var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

var Header = React.createClass({
  propTypes: {
    showLogin: PropTypes.bool,
    showProfile: PropTypes.bool
  },
  getDefaultProps: function () {
    return {
      showLogin: true,
      showProfile: false
    }
  },
  contextTypes: {
     router: React.PropTypes.object.isRequired
   },
  getInitialState: function () {
    return {
      isLoggedIn: false
    }
  },
  componentWillMount: function() {
    var top = this;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        top.setState({
          isLoggedIn: true
        });
      }
      else {
        top.setState({
          isLoggedIn: false
        });
      }
    });
  },
  logout: function()
  {
    firebase.auth().signOut();
    this.setState({
      isLoggedIn: false
    });
    this.context.router.push('/')
  },
  render: function () {
    var loginButton;
    if (this.state.isLoggedIn)
    {
      loginButton = <button onClick={this.logout} type='button' className='navbar-brand'>Log Out</button>;
    }
    else
    {
      loginButton =
      <Link to='/login'>
        <button type='button' className='navbar-brand'>Log In</button>
      </Link>;
    }
    return (
      <nav className="navbar navbar-default" role="navigation">
				<div className="navbar-header">
          <Link to='/'>
            <button type='button' className='navbar-brand'>Home</button>
          </Link>
          {this.props.showProfile && this.state.isLoggedIn && 
            <Link to='/profile'>
              <button type='button' className='navbar-brand'>Profile</button>
            </Link>
          }
          {this.props.showLogin && loginButton}
				</div>
      </nav>
    )
  }
})

module.exports = Header;
