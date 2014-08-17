
console.log('I\'m in the browser!');

var fs = require('fs');
var React = require('react');
var Routes = require('react-router/Routes');
var Route = require('react-router/Route');
var Link = require('react-router/Link');


// var App = require('./browser/ui/app.jsx');
var fonts = require('./fonts.json');

var sampleText = fs.readFileSync(__dirname + '/static/sample.txt', 'utf8');

/*
[1, 2, 3].forEach((x) => console.log(x));
var [a, b] = [1, 2];
class Ass {}
*/

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li><Link to="about">About</Link></li>
          <li><Link to="home">Home</Link></li>
        </ul>
        <this.props.activeRouteHandler/>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return <h2>Home</h2>;
  }
});

var About = React.createClass({
  render: function() {
    return <h2>About</h2>;
  }
});


React.renderComponent(
  Routes({ location:"history" },
    Route({ handler: App },
      Route({ name: 'home', handler: Home }),
      Route({ name: 'about', handler: About })
    )
  ),
  document.body
);

// React.renderComponent(
//   App({
//     fonts: fonts,
//     text: sampleText
//   }),
//   document.body
// );

