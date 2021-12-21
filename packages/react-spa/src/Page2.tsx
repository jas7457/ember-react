import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/page1">React Page 1 (react-router transition)</Link>
      </div>
    </div>
  );
}
