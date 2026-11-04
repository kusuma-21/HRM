const { test: base } = require('@playwright/test');
const { PageManager } = require('../pageobject/PageManager');

const test = base.extend({
  pageManager: async ({ page }, use) => {

    await use(new PageManager(page));
  },
});

module.exports = { test };
