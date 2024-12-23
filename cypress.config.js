module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  video: true, // Ensure this is set to true
  videosFolder: 'cypress/videos', // Default folder for videos
  e2e: {
    baseurl : "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  env : {
    url : "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  }
  }
};
