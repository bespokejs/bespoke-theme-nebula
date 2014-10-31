var bespoke = require('bespoke'),
  nebula = require('../../../lib/bespoke-theme-nebula.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  backdrop = require('bespoke-backdrop');

bespoke.from('article', [
  nebula(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(),
  progress(),
  backdrop()
]);
