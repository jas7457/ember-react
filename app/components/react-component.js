// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import Component from '@glimmer/component';

export default class ReactComponent extends Component {
  onDidInsert(element) {
    console.log('Mounting react component', element);
    ReactDOM.render(<div>Hello World from react!</div>, element);
  }

  onWillDestroy(element) {
    console.log(`Unmounting react component`, element);
    ReactDOM.unmountComponentAtNode(element);
  }
}
