var React = require('react');
var Header = require('../components/Header');

function Home () {
  return (
    <div className="jumbotron">
      <Header showProfile={true}/>
      <h2>Welcome to SampleApp™</h2>
      <p>The most interesting app in the world!</p>
    </div>
  )
}

module.exports = Home;
