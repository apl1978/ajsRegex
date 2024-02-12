import Validator from '../validator';

test('name only letters', () => {
  const validator = new Validator();
  const result = validator.validateUsername('new-user_name');
  expect(result).toBe(true);
});

test('name letters and 3 digits', () => {
  const validator = new Validator();
  const result = validator.validateUsername('u456ser-nam6e');
  expect(result).toBe(true);
});

test('name starts with a digit', () => {
  const validator = new Validator();
  const result = validator.validateUsername('1new-user_name');
  expect(result).toBe(false);
});

test('name ends with a digit', () => {
  const validator = new Validator();
  const result = validator.validateUsername('new-user_name2');
  expect(result).toBe(false);
});

test('name more than three digits', () => {
  const validator = new Validator();
  const result = validator.validateUsername('new-u1234ser_name');
  expect(result).toBe(false);
});

test('name starts with a dash', () => {
  const validator = new Validator();
  const result = validator.validateUsername('-new');
  expect(result).toBe(false);
});

test('name ends with a dash', () => {
  const validator = new Validator();
  const result = validator.validateUsername('name_');
  expect(result).toBe(false);
});
