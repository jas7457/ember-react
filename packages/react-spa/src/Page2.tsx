import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from './ExternalLink';

export default function Page2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Page 2</h1>
      <div>{count}</div>
      <div>
        <button type="button" onClick={() => setCount((count) => count - 1)}>
          -
        </button>

        <button type="button" onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/page1">
          React Page 1 (react-router transition, Ember will be unaware, active
          links won't update in the sidebar and the URL won't change)
        </Link>
      </div>

      <div style={{ marginTop: 20 }}>
        <ExternalLink href="/iframe1">
          React Page 1 (hacky postMessage to Ember app, Ember will take care of
          navigation)
        </ExternalLink>
      </div>
    </div>
  );
}
