'use strict';

const subIndex = require('.');
const test = require('tape');

test('subIndex()', t => {
  t.strictEqual(
    subIndex(['a', 'b', 'c', 'd', 'e'], 3),
    2,
    'should return the previous index.'
  );

  t.strictEqual(
    subIndex(['a', 'b'], 0),
    1,
    'should return 1 when the index is 0.'
  );

  t.strictEqual(
    subIndex(['a'], 0),
    null,
    'should return null when the array length is 1.'
  );

  t.throws(
    () => subIndex(),
    /^TypeError.*Expected an array, but got undefined\./,
    'should throw a type error when it tkes no arguments.'
  );

  t.throws(
    () => subIndex(true, 1),
    /^TypeError.*Expected an array, but got true \(boolean\)\./,
    'should throw a type error when the first argument is not an array.'
  );

  t.throws(
    () => subIndex([], 0),
    /^Error.*Expected a non-empty array, but got \[]\./,
    'should throw an error when the first argument is an empty array.'
  );

  t.throws(
    () => subIndex([true]),
    /^TypeError.*Expected an index of array \(integer\), but got undefined\./,
    'should throw a type error when it takes only one argument.'
  );

  t.throws(
    () => subIndex([true], '100'),
    /^TypeError.*Expected an index of array \(integer\), but got 100 \(string\)\./,
    'should throw a type error when the second argument is non-number value.'
  );

  t.throws(
    () => subIndex([true], NaN),
    /^Error.*Expected an index of array \(integer\), but got NaN\./,
    'should throw an error when the second argument is NaN.'
  );

  t.throws(
    () => subIndex([true], Infinity),
    /^Error.*Expected an index of array \(integer\), but got Infinity\./,
    'should throw an error when the second argument is infinite.'
  );

  t.throws(
    () => subIndex([true], 0.1),
    /^Error.*Expected an index of array \(integer\), but got 0\.1\./,
    'should throw an error when the second argument is non-integer number.'
  );

  t.throws(
    () => subIndex([true], -1),
    /^Error.*Expected an index of array \(positive integer\), but got -1\./,
    'should throw an error when the second argument is a negative number.'
  );

  t.throws(
    () => subIndex(['A', 'B'], 2),
    /^Error.*Expected an index of array, but got 2 that exceeds the last index of the array \(1\)\./,
    'should throw an error when the second argument exceeds the last index of array.'
  );

  t.end();
});
