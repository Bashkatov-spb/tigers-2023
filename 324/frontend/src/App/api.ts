import { Animal, AnimalId, AnimalWithOutId } from '../features/animals/types/Animal';
import { User, UserAuthLog, UserAuthReg } from '../features/users/types/User';

export const loadAnimalsFetch = async (): Promise<Animal[]> => {
  const res = await fetch('/api/animals');
  return res.json();
};

export const loadUsersFetch = async (): Promise<User[]> => {
  const res = await fetch('/api/users');
  return res.json();
};

export const deleteAnimalFetch = async (value: AnimalId): Promise<AnimalId> => {
  const res = await fetch(`/api/animals/${value}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const addAnimalFetch = async (animal: AnimalWithOutId): Promise<Animal> => {
  const res = await fetch('/api/animals', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(animal),
  });

  return res.json();
};

export const registrationFetch = async (value: UserAuthReg): Promise<User> => {
  const res = await fetch('/api/auth/registration', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(value),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message);
  }
  return res.json();
};

export const authorizationFetch = async (value: UserAuthLog): Promise<User> => {
  const res = await fetch('/api/auth/authorization', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(value),
  });
  return res.json();
};

export const authCheckUserFetch = async (): Promise<User> => {
  const res = await fetch('/api/auth/check');
  return res.json();
};

export const logOutFetch = async (): Promise<void> => {
  await fetch('/api/auth/logout');
};
