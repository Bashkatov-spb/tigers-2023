import React from 'react';

function BtnPlus({ onHandlePlus }: { onHandlePlus: () => void }): JSX.Element {
  return (
    <button
      style={{ backgroundColor: 'tomato', padding: '20px' }}
      onClick={onHandlePlus}
      type="button"
    >
      +
    </button>
  );
}

export default BtnPlus;
