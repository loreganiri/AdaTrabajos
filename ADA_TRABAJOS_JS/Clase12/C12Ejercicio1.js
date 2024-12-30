const prompt = require("prompt-sync")({ sigint: true });
let nums = []; //Array donde guardaremos los números introducidos por el usuario
let num;

while (num >= 0) {
    num = prompt("Introduzca un número: ");
    nums.push(num);
} 
let total = 0;
    
for (let j = 0; j < nums.length; j++) {
        total += parseInt(nums[j]);
    }
console.log("La suma es: " + total);