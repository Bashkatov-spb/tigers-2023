import React from 'react';

type Props = {
  onHandleMinus: () => void;
};

function BtnMinus({ onHandleMinus }: Props): JSX.Element {
  return (
    <button
      style={{ backgroundColor: 'tomato', padding: '20px' }}
      onClick={onHandleMinus}
      type="button"
    >
      -
    </button>
  );
}

export default BtnMinus;
