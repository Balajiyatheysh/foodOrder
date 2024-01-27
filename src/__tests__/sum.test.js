import { sum } from "../components/Sum";

test('should return sum of two numbers', () => {
  const result = sum(3, 5);

  //Assertion
  expect(result).toBe(8);
})
