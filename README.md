# sub-index

[![NPM version](https://img.shields.io/npm/v/sub-index.svg)](https://www.npmjs.com/package/sub-index)
[![Bower version](https://img.shields.io/bower/v/sub-index.svg)](https://github.com/shinnn/sub-index/releases)
[![Build Status](https://travis-ci.org/shinnn/sub-index.svg?branch=master)](https://travis-ci.org/shinnn/sub-index)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/sub-index.svg)](https://coveralls.io/r/shinnn/sub-index)
[![devDependencies Status](https://david-dm.org/shinnn/sub-index/dev-status.svg)](https://david-dm.org/shinnn/sub-index?type=dev)

Find an array index of the substitute value that should be chosen when a given index is deleted

```javascript
import subIndex from 'sub-index';

const array = new Array(3);

subIndex(array, 1); //=> 0
subIndex(array, 2); //=> 1

subIndex(array, 0); //=> 1
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install sub-index
```

### [bower](https://bower.io/)

```
bower install sub-index
```

## API

### subIndex(*array*, *index*)

*array*: `Array` (non-empty array)  
*index*: `Number` (index of the array assumed to be deleted)  
Return: `Number` or `null`

Essentially, it returns the predecessor number of a given `index`.

```
index:      0 1 2
value:      A B C
deleted:      ^
substitute: ^
```

```javascript
subIndex(['A', 'B', 'C'], 1); //=> 0
```

If `index` is `0`, it returns the successor number `1` because the first element has no predecessor elements.

```
index:      0 1 2
value:      A B C
deleted:    ^
substitute:   ^
```

```javascript
subIndex(['A', 'B', 'C'], 0); //=> 1
```

If the array includes only a single value, it returns `null` because no value exists after deletion.

```
index:      0
value:      A
deleted:    ^
substitute: (none)
```

```javascript
subIndex(['A'], 0); //=> null
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
