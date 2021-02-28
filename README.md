# limit-number

![Build](https://github.com/electerious/limit-number/workflows/Build/badge.svg) [![Coverage Status](https://coveralls.io/repos/github/electerious/limit-number/badge.svg?branch=master)](https://coveralls.io/github/electerious/limit-number?branch=master)

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