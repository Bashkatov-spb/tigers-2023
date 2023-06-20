import React, { useState, useContext } from 'react';
import StateContext from '../../context';

function FormAddAnimal(): JSX.Element {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const { dispatch } = useContext(StateContext);
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/animals', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, image }),
    });
    const data = await res.json();
    dispatch({ type: 'animals/add', payload: data });
    setImage('');
    setName('');
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        <input value={image} onChange={(e) => setImage(e.target.value)} type="text" />
        <button type="submit">Add animal</button>
      </form>
    </div>
  );
}

export default FormAddAnimal;
