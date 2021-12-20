// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import Component from '@glimmer/component';

// eslint-disable-next-line no-unused-vars
import Test from './Test';

export default class ReactComponent extends Component {
  onDidInsert(element) {
    console.log('Mounting react component', element);
    ReactDOM.render(<Test />, element);
  }

  onWillDestroy(element) {
    console.log(`Unmounting react component`, element);
    ReactDOM.unmountComponentAtNode(element);
  }
}
