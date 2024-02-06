
import fruits from './foods.js';
import { choice, remove } from './helpers.js';

let fruit = choice(fruits);

console.log(`Id like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remaining = remove(fruit, fruits);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);