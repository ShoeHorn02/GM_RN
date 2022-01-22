const {defaults} = require('jest-config');
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'json', 'jsx', 'ts', 'tsx', 'node', 'ts', 'tsx', 'android.js', 'io.js', 'android', 'ios'],
  moduleDirectories: ["node_modules", "src"],
  transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
    ],
  globals:  {"__DEV__": true},
  preset: "react-native"
  // ...
};
