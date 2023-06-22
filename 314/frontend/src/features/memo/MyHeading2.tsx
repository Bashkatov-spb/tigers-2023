import React, { useState, useEffect, useCallback } from 'react';

function MyHeading2(): JSX.Element {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const addInConsole = useCallback((message: string) => console.log(message), []);

  useEffect(() => {
    addInConsole(text);
  }, [addInConsole, text]);

  return (
    <>
      <input type="text" onChange={(event) => setText(event.target.value)} value={text} />
      <button type="button" onClick={() => setCount(count + 1)}>
        Already {count} clicks
      </button>
    </>
  );
}
export default MyHeading2;
