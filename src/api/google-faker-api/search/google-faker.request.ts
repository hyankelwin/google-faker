import { faker } from '@faker-js/faker';
import { getAnimalType } from '../../../utils/getAnimalType';
import { Animal } from './interfaces/animal.interface';

export function createRandomAnimal(animal: string): Animal {
  return {
    id: faker.number.int(),
    name: getAnimalType(animal),
    image: faker.image.url(),
    description: faker.word.words({ count: 10 }),
    site: faker.internet.url(),
  };
}

export const getAnimals = async (value: string) => {
  const results = [];
  for (let i = 0; i < 10; i++) {
    const animal = await createRandomAnimal(value);
    results.push(animal);
  }

  return results;
};
