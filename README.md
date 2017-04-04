# limit-number

[![Travis Build Status](https://travis-ci.org/electerious/limit-number.svg?branch=master)](https://travis-ci.org/electerious/limit-number) [![AppVeyor Status](https://ci.appveyor.com/api/projects/status/7c43an7agjbo1bud?svg=true)](https://ci.appveyor.com/project/electerious/limit-number) [![Coverage Status](https://coveralls.io/repos/github/electerious/limit-number/badge.svg?branch=master)](https://coveralls.io/github/electerious/limit-number?branch=master) [![Dependencies](https://david-dm.org/electerious/limit-number.svg)](https://david-dm.org/electerious/limit-number#info=dependencies)

Limit a number between a min and max value.

## Install

```
npm install limit-number
```

## Usage

```js
const limit = require('limit-number')

limit(0, 10, 5) // 5
limit(0, 10, 15) // 10
limit(0, 10, -5) // 0
```

## Parameters

- `min` `{Number}` Min number.
- `max` `{Number}` Max number.
- `num` `{Number}` Number.

## Returns

- `{Number}` Limited number.