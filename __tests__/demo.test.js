// Jest expects to find our tests in a __tests__ folder, which has become a 
// popular convention in the JavaScript community, and it’s one we’re going to 
// stick to here. If you’re not a fan of the __tests__ setup, out of the box
//  Jest also supports finding any .test.js and .spec.js files too.

describe('Multiply', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2*2).toBe(4);
    });
  });