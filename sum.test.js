const sum = require('./sum');

test ('a soma de 1 + 2 é idual a 3', () => {
    expect(sum(1, 2)).toBe(3);
});
