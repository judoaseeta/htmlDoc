const JSDOMEnvironment = require('jest-environment-jsdom-11.0.0');
new JSDOMEnvironment('');
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};