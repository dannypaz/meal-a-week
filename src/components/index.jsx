const React = require('react');

const DefaultLayoutHead = React.createClass({
  render: function() {
    return (
      <head>
        <title>{this.props.title}</title>
      </head>
    );
  }
});

const DefaultLayoutBody = React.createClass({
  render: function() {
    return (
      <body>
        <div className="container">
          {this.props.children}
        </div>
      </body>
    );
  }
});

const DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <DefaultLayoutHead></DefaultLayoutHead>
      </html>
      <div className="sup">
      </div>
    );
  }
});
