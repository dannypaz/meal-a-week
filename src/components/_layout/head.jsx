const React = require('react');

const Head = React.createClass({
  render: function() {
    return (
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css" />
        <link rel="stylesheet" href="https://yui.yahooapis.com/pure/0.6.0/pure-min.css" />
      </head>
    )
  }
});

module.exports = Head;
