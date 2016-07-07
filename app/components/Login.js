var React = require('react');
var PropTypes = React.PropTypes;
var Header = require('../components/Header');

function Login (props) {
  return (
    <div className="jumbotron">
      <Header showLogin={false}/>
      <h2>Please log in</h2>
      <small className="error" >{props.message}</small>
      <form onSubmit={props.onSubmitUser}>
        <div className="form-group">
        <fieldset className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input
            id='emailInput'
            className='form-control'
            onChange={props.onUpdateEmail}
            placeholder='Email Address'
            type='text'
            value={props.email} />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            id='passwordInput'
            className='form-control'
            onChange={props.onUpdatePassword}
            placeholder='Password'
            type='password'
            value={props.password} />
        </fieldset>
        </div>
        <div className="form-group col-sm-4 col-sm-offset-4">
          <button
            className="btn btn-success btn-large"
            type="submit">
              Submit
          </button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateEmail: PropTypes.func.isRequired,
  onUpdatePassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
}

module.exports = Login;
