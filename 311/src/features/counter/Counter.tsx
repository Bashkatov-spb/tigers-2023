import React, { useEffect, useState } from 'react';
import BtnMinus from './BtnMinus';
import BtnPlus from './BtnPlus';
import InputStep from './InputStep';

function Counter(): JSX.Element {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const onHandlePlus = (): void => {
    setCount((prev) => prev + step);
  };
  const onHandleMinus = (): void => {
    setCount((prev) => prev - step);
  };

  const onHandleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setStep(+e.target.value);
  };

  useEffect(() => {
    console.log(count, 'effect 1');
    return () => console.log('clear effect 1');
  });

  useEffect(() => {
    console.log(count, 'effect 2');
    return () => console.log('clear effect 2');
  }, []);

  useEffect(() => {
    console.log(count, 'effect 3');
    return () => console.log('clear effect 3');
  }, [count, step]);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log(count);
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // });

  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <InputStep step={step} onHandleChange={onHandleChange} />
      <BtnPlus onHandlePlus={onHandlePlus} />
      <BtnMinus onHandleMinus={onHandleMinus} />
    </div>
  );
}

export default Counter;
