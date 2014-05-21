/**
 * @jsx React.DOM
 */

var React = require('react');

var Bird = React.createClass({

  render: function() {
    return (
      <li className={this.props.type}>{this.props.name}</li>
    );
  }

});

module.exports = Bird;
