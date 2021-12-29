import EmberRouter from '@ember/routing/router';
import config from 'ember-spa/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('ember');
  this.route('react');
  this.route('react-shadow-dom');
  this.route('iframe1');
  this.route('iframe2');
});
