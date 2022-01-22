/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/screens/GitHubList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


test('renders correctly', async () => {
  const tree = await renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
