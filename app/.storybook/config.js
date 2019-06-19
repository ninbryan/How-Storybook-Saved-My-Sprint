import { addParameters, configure } from '@storybook/react';
import bmoTheme from './bmoTheme';

addParameters({
  options: {
    panelPosition: 'right',
  },
  theme: bmoTheme
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /\.stories\.jsx?$/);
function loadStories() {
  require('./index.stories.jsx');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
