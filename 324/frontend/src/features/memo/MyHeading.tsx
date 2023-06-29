/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useMemo } from 'react';

function MyHeading(): JSX.Element {
  const [count, setCount] = useState(0);
  const [cssStyle, setCssStyle] = useState(false);

  const heavyFunction = (number: number): number => {
    console.log('Current value count: ', number);
    let some = 10000000000;
    for (let index = 0; index < 99999999; index += 1) {
      some = number * number * 10000000000;
    }
    return some;
  };

  // const countSquare = useMemo(() => heavyFunction(count), [count]);
  const result = heavyFunction(count);

  return (
    <div style={{ padding: '100px' }}>
      <h1 onClick={() => setCssStyle(!cssStyle)} style={{ color: cssStyle ? 'green' : 'red' }}>
        useMemo
      </h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <h2>{result}</h2>
    </div>
  );
}
export default MyHeading;
