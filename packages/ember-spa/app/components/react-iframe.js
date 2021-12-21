import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ReactIframeComponent extends Component {
  @service('router') routerService;

  @action
  onDidInsert() {
    // a fairly hacky way to have the iframe'd react app communicate it wants to load external Ember links
    window.addEventListener('message', (s) => {
      switch (s?.data?.event) {
        case 'external-link': {
          // TODO - figure this out more, I'm sure we need more things like the correct route model and options, not just the route name
          // TODO - also, I'm not cleaning up this window.addEventListener and more and more will be added, we might want to use a controller which is a singleton instead
          const props = this.routerService.recognize(s.data.href);
          this.routerService.transitionTo(props.name);
          break;
        }
      }
    });
  }
}
