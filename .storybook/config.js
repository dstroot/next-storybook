import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { create } from '@storybook/theming';

// Theming
// https://github.com/storybooks/storybook/blob/next/docs/src/pages/configurations/options-parameter/index.md
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Our Library',
      // brandUrl: 'https://storybook.js.org',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
    isFullscreen: false,
    showPanel: true,
    panelPosition: 'bottom',
  },
});

// Get stories
const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  require('../src/stories'); // from setup
  req.keys().forEach(filename => req(filename)); // from components
}

// NOTE: It is important to declare "withInfo" as the first decorator
//       (https://github.com/storybooks/storybook/tree/master/addons/info)

// Global decorators
addDecorator(withInfo());
// https://github.com/storybooks/storybook/blob/master/addons/a11y/README.md
addDecorator(withA11y);

configure(loadStories, module);
