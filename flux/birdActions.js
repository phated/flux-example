'use strict';

var birdActions = {
  birdSighted: function(name){
    this.dispatch('BIRD_SIGHTING', { name: name, type: 'bird' });
  }
};

module.exports = birdActions;
