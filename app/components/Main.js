var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
      	<div className="row">
      		<div className="col-md-12">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Main;
