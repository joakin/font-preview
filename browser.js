
console.log('I\'m in the browser!');

var fs = require('fs');
var React = require('react');
var App = require('./browser/ui/app.jsx');
var fonts = require('./fonts.json');

var sampleText = fs.readFileSync(__dirname + '/static/sample.txt', 'utf8');

React.renderComponent(
  App({
    fonts: fonts,
    text: sampleText
  }),
  document.body
);
