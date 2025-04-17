import { Geometry } from "./geometry";
import createMultiplier from './higherOrderFunctions';


console.log(Geometry.areaOfCircle(5));
console.log(Geometry.areaOfRectangle(5, 10));
//_____________________________________
console.log("-------------------------------");
const double = createMultiplier(2);
const result = double(5); 
console.log(result);
//_____________________________________
import { Person, createPerson } from './types';
const newPerson: Person = createPerson('Lorena', 41);
console.log(`Person: ${newPerson.name}, Age: ${newPerson.age}`);