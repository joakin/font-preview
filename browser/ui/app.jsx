
var React = require('react')
  , Title = require('./title.jsx')
  , FontList = require('./font-list.jsx')

var fonts = [{
  name: 'Inconsolata',
  path: 'inconsolata.ttf'
}, {
  name: 'Consolas',
  path: 'consolas.otf'
}]

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <Title>Font comparer</Title>
        <FontList fonts={fonts} />
      </div>
    )
  }

})

