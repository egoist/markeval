# markeval

[![NPM version](https://img.shields.io/npm/v/markeval.svg?style=flat)](https://npmjs.com/package/markeval) [![NPM downloads](https://img.shields.io/npm/dm/markeval.svg?style=flat)](https://npmjs.com/package/markeval) [![CircleCI](https://circleci.com/gh/egoist/markeval/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/markeval/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add markdown-it markdown-it-markeval
```

## Usage

```js
const md = require('markdown-it')()
const markeval = require('markdown-it-markeval')

const html = md
  .use(markeval, {
    // Required if you want to require non-native node modules
    filename: '/path/to/markdown/file'
  })
  .render('markdown code')
```

### Example

Input:

````markdown
This is your pokemon:

```js
// @markeval
module.exports = require('pokemon').random()
```
````

Output:

```js
This is your pokemon:

Pikacho
```

### Syntax

- Add `// @markeval` comment into the code block
- Or three backticks + `markeval`: <code>`\``markeval</code>

The code blocks that match the syntax with be replaced by the exported content.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**markeval** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/markeval/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
