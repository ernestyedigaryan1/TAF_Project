const { defineConfig } = require('cypress')
const { mergePartially } = require('merge-partially')
const baseConfig = require('./base')

// eslint-disable-next-line import/no-default-export
module.exports = defineConfig(
    mergePartially.shallow(baseConfig, {
      e2e: {
        baseUrl: 'https://localhost:5000/',
          env: {
              users: {
                  baseUser: {
                      username: 'ErnestYedigaryan',
                  },
              },
          },
      },
    })
)