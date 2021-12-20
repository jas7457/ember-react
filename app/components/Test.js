import React from 'react';

export default function Test() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div>Hello world from React</div>
      <div>Clicks: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Add count</button>
      </div>
    </div>
  );
}
