const React = require('react');
const DefaultLayoutHead = require('./_layout/head');
const DefaultLayoutBody = require('./_layout/body');

const DefaultLayout = React.createClass({
  render: function(){
    return (
      <html>
        <DefaultLayoutHead title="Meal A Week" />
        <DefaultLayoutBody>
          <div className="pure-u-1-3">Meal A Week</div>
          <div className="pure-u-1-3">Meal A Week</div>
          <div className="pure-u-1-3">
            <button className="pure-button pure-button-primary">
              My Button
            </button>
          </div>
        </DefaultLayoutBody>
      </html>
    );
  }
});

module.exports = DefaultLayout;
