import React from 'react';

function InputStep({
  step,
  onHandleChange,
}: {
  step: number;
  onHandleChange: React.ChangeEventHandler<HTMLInputElement>;
}): JSX.Element {
  return <input value={step} onChange={onHandleChange} type="number" />;
}

export default InputStep;
