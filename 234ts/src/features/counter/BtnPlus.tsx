import React from 'react';

function BtnPlus({ onHandlePlus }: { onHandlePlus: () => void }): JSX.Element {
  return (
    <button type="button" onClick={onHandlePlus}>
      Plus
    </button>
  );
}

export default BtnPlus;
