test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

// Numbers
// Most ways of comparing numbers have matcher equivalents.
test('two plus two', () => {
    const val = 2 + 2;
    expect(val).toBeGreaterThan(3);
    expect(val).toBeGreaterThanOrEqual(3.5);
    expect(val).toBeLessThan(5);
    expect(val).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(val).toBe(4);
    expect(val).toEqual(4);
});

// For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.
test('addition of floating point numbers', () => {
    const val = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work
    expect(val).toBeCloseTo(0.3); // This works.
});

// Strings
// You can check strings against regular expressions with toMatch method:
test('there is no U in college', () => {
    expect('College').not.toMatch(/U/);
});

test('there is city in Velocity', () => {
    const word = 'Velocity';
    expect(word).toMatch(/city/);
});

// Arrays and iterables
// You can check if an array or iterable object contains a particular item using the toContain method:

const shoppingCart = [
    'milk',
    'bread',
    'butter',
    'cereal',
    'honey',
    'sugar'
]

test('the shopping list has cereal or sugar in it', () => {
    expect(shoppingCart).toContain('cereal');
    expect(new Set(shoppingCart)).toContain('sugar');
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

// Exceptions
// If you want to test whether a particular function throws an error when it's called, use toThrow

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});