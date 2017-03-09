# temp-dir-cp
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![XO code style][xo-image]][xo-url] ![][node-version-image]

> ⚡️ Copy folder to a unique temp location

## Install

```sh
yarn add temp-dir-cp
# same as npm install --save
```

## Usage

Assume that in the current directory, there is a directory called `fixtures`:

```sh
$ tree
.
├── fixtures
│   └── file.txt
└── index.js
```

Call `temp-dir-cp` with `"fixtures"`

```js
// index.js
const tempDirCp = require('temp-dir-cp');

tempDirCp('fixtures');
//=> '/var/folders/6r/cyh35ykj4h77jnn0lz0xqx580000gn/T/87166550876/fixtures'

tempDirCp('fixtures');
//=> '/var/folders/6r/cyh35ykj4h77jnn0lz0xqx580000gn/T/75704852254/fixtures'
```

Both of these newly created directory's have the contents of the `fixtures` directory. Each can be mutated separately without affecting one another or the source.

```sh
$ tree /var/folders/6r/cyh35ykj4h77jnn0lz0xqx580000gn/T/87166550876
└── fixtures
    └── file.txt

$ tree /var/folders/6r/cyh35ykj4h77jnn0lz0xqx580000gn/T/75704852254
└── fixtures
    └── file.txt
```

For any tests which modify the file-system, you can't `cd` into your fixtures and then run the tests. That would  modify your fixtures and therefore break future tests. Use `tempDirCp` instead and you will have a fresh copy of your files in a unique directory every time. The unique directory is temporary too, so it gets removed on computer startup!

## API

### tempDirCp(sourceDir)

#### Arguments

| Name    | Description                     |   Type   |  Default  |
| ------- | ------------------------------- | -------- |  -------  |
| sourceDir  | Directory that should be copied | `string` |   None    |

#### Returns

Type: `string`

## License

MIT © [Dawson Botsford](https://dawsonbotsford.com)

[npm-image]: https://badge.fury.io/js/temp-dir-cp.svg
[npm-url]: https://npmjs.org/package/temp-dir-cp
[travis-image]: https://travis-ci.org/dawsbot/temp-dir-cp.svg?branch=master
[travis-url]: https://travis-ci.org/dawsbot/temp-dir-cp
[xo-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo
[node-version-image]: https://img.shields.io/badge/Node-%3E%3Dv4.0.0-ff69b4.svg
