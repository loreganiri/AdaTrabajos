import { add, subtract, capitalize, reverse } from './index';
import createUser from './user';



const resultadoSuma = add(15, 20);
const resultadoResta = subtract(50, 18);

console.log('=== Resultados Matemáticos ===');
console.log(`15 + 20 = ${resultadoSuma}`);    
console.log(`50 - 18 = ${resultadoResta}`);   
//_____________________________________
const capitalized = capitalize('lorena');
const reversed = reverse('lorena');

console.log('=== Resultados de Strings ===');
console.log(`'hola mundo' => ${capitalized}`);
console.log(`'hola mundo' => ${reversed}`);
//_____________________________________

const newUser = createUser('Lorena', 41);
console.log(newUser.name + ' ' + newUser.age);

//_____________________________________
import { PI, E, PI2, E2 } from './constants';

console.log('Math Constants:');
console.log(`PI: ${PI}, E: ${E}`);
console.log(`PI2: ${PI2}, E2: ${E2}`);

//_____________________________________

