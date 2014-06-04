
var React = require('react')

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <pre><code>{this.props.text}</code></pre>
      </div>
    )
  }
})
