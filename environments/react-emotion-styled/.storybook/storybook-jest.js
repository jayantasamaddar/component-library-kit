const { setGlobalConfig } = require('@storybook/testing-react');
const globalStorybookConfig = require('./preview'); // path of your preview.js file

setGlobalConfig(globalStorybookConfig);
