import { faker } from '@faker-js/faker';
import AnimalsConstant from '../constants/animals.constant';

export function getAnimalType(animal: string) {
  switch (animal) {
    case 'bear':
      return faker.animal.bear();
    case 'bird':
      return faker.animal.bird();
    case 'cat':
      return faker.animal.cat();
    case 'cetacean':
      return faker.animal.cetacean();
    case 'cow':
      return faker.animal.cow();
    case 'crocodilia':
      return faker.animal.crocodilia();
    case 'dog':
      return faker.animal.dog();
    case 'fish':
      return faker.animal.fish();
    case 'horse':
      return faker.animal.horse();
    case 'insect':
      return faker.animal.insect();
    case 'lion':
      return faker.animal.lion();
    case 'rabbit':
      return faker.animal.rabbit();
    case 'rodent':
      return faker.animal.rodent();
    case 'snake':
      return faker.animal.snake();
    default:
      return '';
  }
}

export function checkAnimals(animal: string) {
  const isAnimal = AnimalsConstant.includes(animal);
  if (isAnimal) {
    return true;
  }

  return false;
}
