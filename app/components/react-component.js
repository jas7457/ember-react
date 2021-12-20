// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

// eslint-disable-next-line no-unused-vars
import EmberContext from '../context/EmberContext';

// eslint-disable-next-line no-unused-vars
import Test from './Test';

export default class ReactComponent extends Component {
  @service('router') routerService;

  @action
  onDidInsert(element) {
    ReactDOM.render(
      <EmberContext.Provider value={{ routerService: this.routerService }}>
        <Test />
      </EmberContext.Provider>,
      element
    );
  }

  onWillDestroy(element) {
    ReactDOM.unmountComponentAtNode(element);
  }
}
