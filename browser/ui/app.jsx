
var React = require('react')
var Title = require('./title.jsx')
var FontList = require('./font-list.jsx')
var FontPreview = require('./font-preview.jsx')

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <Title>Font comparer</Title>
        <FontList fonts={this.props.fonts} />
        <FontPreview text={this.props.text} />
      </div>
    )
  }

})

