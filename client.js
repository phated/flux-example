var React = window.React = require('react');

var BirdList = require('./components/bird-list.jsx');

var flux = require('./flux/flux');

React.renderComponent(BirdList({ flux: flux }),
  document.getElementById('main'));
