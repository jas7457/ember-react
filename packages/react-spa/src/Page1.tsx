import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from './ExternalLink';

export default function Page1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Page 1</h1>
      <button
        type="button"
        onClick={() => {
          setCount((count) => count + 1);
          (window.top ?? window).postMessage('hey 2', '*');
        }}
      >
        count is: {count}
      </button>

      <div style={{ marginTop: 20 }}>
        <Link to="/page2">React Page 2 (react-router transition)</Link>
      </div>

      <div style={{ marginTop: 20 }}>
        <ExternalLink href="/ember">
          External link back to Ember route (hacky postMessage to Ember app)
        </ExternalLink>
      </div>
    </div>
  );
}
