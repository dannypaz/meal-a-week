const React = require('react');

const Body = React.createClass({
  render: function() {
    return (
      <body>
        <div className="pure-g">
          {this.props.children}
        </div>
      </body>
    )
  }
});

module.exports = Body;
