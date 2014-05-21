'use strict';

var fluxxor = require('fluxxor');

var BirdStore = fluxxor.createStore({
  actions: {
    'BIRD_SIGHTING': 'addToBirdList'
  },

  initialize: function(){
    this.birds = [{ name: 'sparrow', type: 'bird' }];
  },

  addToBirdList: function(payload){
    this.birds.push(payload);
    this.emit('change');
  }
});

module.exports = BirdStore;
