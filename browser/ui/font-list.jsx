
var React = require('react')

module.exports = React.createClass({
  render: function() {
    var fontsList = this.props.fonts.map(function (font) {
      return <li key={font.name}>{font.name}</li>
    })
    return (
      <div className='FontList'>
        <ul>{fontsList}</ul>
      </div>
    )
  }
})
