import * as Types from './types';
const newPerson = Types.createPerson('Lorena', 41);
console.log(`Person: ${newPerson.name}, Age: ${newPerson.age}`);