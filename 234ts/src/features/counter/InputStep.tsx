import React from 'react';

function InputStep({
  step,
  onHandleChange,
}: {
  step: number;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element {
  return <input value={step} onChange={onHandleChange} type="number" />;
}

export default InputStep;
