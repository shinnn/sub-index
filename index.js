'use strict';

/*!
 * sub-index | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/sub-index
*/
function subIndex(arr, index) {
  if (!Array.isArray(arr)) {
    var arrType = typeof arr;
    var stringifiedArr = String(arr);

    throw new TypeError(
      'Expected an array, but got ' +
      (stringifiedArr === arrType ? stringifiedArr : stringifiedArr + ' (' + arrType + ')') +
      '.'
    );
  }

  if (arr.length === 0) {
    throw new Error('Expected a non-empty array, but got [].');
  }

  var indexType = typeof index;
  var stringifiedIndex = String(index);

  if (indexType !== 'number') {
    throw new TypeError(
      'Expected an index of array (integer), but got ' +
      (stringifiedIndex === indexType ? stringifiedIndex : stringifiedIndex + ' (' + indexType + ')') +
      '.'
    );
  }

  if (!isFinite(index) || Math.floor(index) !== index) {
    throw new Error('Expected an index of array (integer), but got ' + String(index) + '.');
  }

  if (index < 0) {
    throw new Error('Expected an index of array (positive integer), but got ' + String(index) + '.');
  }

  var arrLength = arr.length;

  if (index >= arrLength) {
    throw new Error(
      'Expected an index of array, but got ' +
      String(index) +
      ' that exceeds the last index of the array (' + (arrLength - 1) + ').');
  }

  if (arr.length === 1) {
    return null;
  }

  if (index === 0) {
    return 1;
  }

  return index - 1;
}

module.exports = subIndex;
