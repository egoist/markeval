const markdown = require('markdown-it')

const md = markdown()
  .use(require('../'))

test('it renders', () => {
  const input = `
\`\`\`js
// @markeval
module.exports = 42
\`\`\`

\`\`\`js
// @markeval
module.exports = require('path').dirname('foo/bar.js')
\`\`\`

\`\`\`js
module.exports = 'lol'
\`\`\`
`
  expect(md.render(input)).toMatchSnapshot()
})
