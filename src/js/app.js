import Validator from './validator';

const validator = new Validator();
console.log(validator.validateUsername('new-user_name'), true);

console.log(validator.validateUsername('u456ser-nam6e'), true);

console.log(validator.validateUsername('1new-user_name'), false);

console.log(validator.validateUsername('new-user_name2'), false);

console.log(validator.validateUsername('new-u1234ser_name'), false);

console.log(validator.validateUsername('-new-user_name'), false);

console.log(validator.validateUsername('new-user_name_'), false);
