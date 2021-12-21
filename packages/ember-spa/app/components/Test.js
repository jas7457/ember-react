import React from 'react';

// eslint-disable-next-line no-unused-vars
import EmberLinkTo from './EmberLinkTo';

export default function Test() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div>Hello world from React</div>
      <div>Clicks: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Add count</button>
      </div>

      <EmberLinkTo route="ember">
        Link back to Ember from a React component using Ember's router service
      </EmberLinkTo>
    </div>
  );
}
