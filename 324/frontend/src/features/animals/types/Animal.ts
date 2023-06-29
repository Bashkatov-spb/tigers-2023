export type Animal = {
  id: number;
  image: string;
  name: string;
};

export type AnimalId = Animal['id'];

export type AnimalWithOutId = {
  image: string;
  name: string;
};
