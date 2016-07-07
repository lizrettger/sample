var ReactDOM = require('react-dom');
var Firebase = require('firebase');
var routes = require('./config/routes');

firebase.initializeApp({
  apiKey: "AIzaSyAIgtgVPUJMTBes8gox2b2HgmBtOFyvlxU",
  databaseURL: 'https://sample-project-d5d16.firebaseio.com',
});

ReactDOM.render(routes, document.getElementById('app'));
