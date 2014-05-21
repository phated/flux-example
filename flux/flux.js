'use strict';

var _ = require('lodash');
var fluxxor = require('fluxxor');

var BirdStore = require('./BirdStore');
var birdActions = require('./birdActions');

var stores = {
  birds: new BirdStore()
};
var actions = _.assign({}, birdActions);

var flux = new fluxxor.Flux(stores, actions);

module.exports = flux;
