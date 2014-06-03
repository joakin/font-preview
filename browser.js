
console.log('I\'m in the browser!')

var React = require('react')
  , App = require('./browser/ui/app.jsx')

React.renderComponent(
  App({}),
  document.body
);
