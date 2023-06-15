import React from 'react';

function BtnMinus({ onHandleMinus }: { onHandleMinus: () => void }): JSX.Element {
  return (
    <button type="button" onClick={onHandleMinus}>
      Minus
    </button>
  );
}

export default BtnMinus;
