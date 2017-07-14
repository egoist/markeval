const req = require('require-from-string')

module.exports = function (md, opts = {}) {
  const originalFence = md.renderer.rules.fence

  // eslint-disable-next-line max-params
  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    const token = tokens[idx]

    if (shouldEval(token)) {
      return req(token.content, {
        filename: opts.filename
      })
    }

    return originalFence.call(this, tokens, idx, options, env, self)
  }
}

function shouldEval(token) {
  return /@markeval/.test(token.content) || (token.info === 'markeval')
}
