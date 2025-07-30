module.exports = {
  default: {
    require: ['step_definitions/**/*.js'],
    format: [
      'progress-bar',
      '@cucumber/pretty-formatter',
      'allure-cucumberjs/reporter'
    ],
    formatOptions: {
      resultsDir: 'allure-results'
    },
    dryRun: false,
    failFast: false,
    parallel: 1  
  }
};
