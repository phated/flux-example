/**
 * @jsx React.DOM
 */

var React = require('react');

var _ = require('lodash');

var fluxxor = require('fluxxor');

var flux = require('../flux/flux');

var Bird = require('./bird.jsx');

var BirdList = React.createClass({

  mixins: [fluxxor.StoreWatchMixin('birds')],

  getStateFromFlux: function(){
    return {
      birds: flux.store('birds'),
      input: ''
    };
  },

  handleChange: function(e){
    this.setState({
      input: e.target.value
    });
  },

  saveBird: function(){
    flux.actions.birdSighted(this.state.input);
  },

  render: function() {
    var birds = _.map(this.state.birds.birds, function(birdProps){
      return Bird(birdProps);
    });

    return (
      <div>
        <ul>{birds}</ul>
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.saveBird}>Save Bird</button>
      </div>
    );
  }

});

module.exports = BirdList;
