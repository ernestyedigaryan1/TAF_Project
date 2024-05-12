const { defineConfig } = require('cypress')
const {
    addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor')

module.exports = defineConfig({
    // These settings apply everywhere unless overridden
    viewportWidth: 1920,
    viewportHeight: 1080,
    fixturesFolder: 'cypress/fixtures',
    video: false,
    videoUploadOnPasses: false,
    e2e: {
        numTestsKeptInMemory: 15,
        experimentalMemoryManagement: true,
        specPattern: ['**/*.{feature,features}'],
        supportFile: 'cypress/support/index.js',
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config)
            const regexp = /(local|web|).js/g
            const matchResult = [...config.configFile.matchAll(regexp)]
            const env = matchResult[0][1].toUpperCase()

            config.env.users.baseUser.password =
                config.env['password']

            return config
        },
    },
    scrollBehavior: false,
    defaultCommandTimeout: 10000,
    taskTimeout: 65000,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    requestTimeout: 10000,
})