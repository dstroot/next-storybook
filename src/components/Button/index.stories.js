import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import Button from '../Button';

var divStyle = {
  width: '200px',
};

// Button section
storiesOf('VDS|Button', module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false,
      text: `
        Button is a component for use on forms to reflect the current state. It uses font awesome icons: https://fontawesome.com/how-to-use/on-the-web/using-with/react

        Add the library:
        
        ~~~sh
        $ yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
        ~~~
        
        Add this to your application (see "stories/index.js"):
        
        ~~~js
        import { library } from '@fortawesome/fontawesome-svg-core';
        import {
          faSpinner,
          faCheck,
          faCheckCircle,
          faExclamationTriangle,
        } from '@fortawesome/free-solid-svg-icons';
        
        // library of Font Awesome Icons
        library.add(faSpinner, faCheck, faCheckCircle, faExclamationTriangle);
        ~~~
        
        #### Font Awesome

        - https://fontawesome.com/icons?d=gallery
        - https://github.com/FortAwesome/react-fontawesome
        - https://fontawesome.com/how-to-use/on-the-web/using-with/react
        `,
    },
  })
  .add('show normal Button', () => (
    <div style={divStyle}>
      <Button submitted={false} />
    </div>
  ))
  .add('show submitted Button', () => (
    <div style={divStyle}>
      <Button submitted={true} success="wait" />
    </div>
  ))
  .add('show success Button', () => (
    <div style={divStyle}>
      <Button submitted={true} success="yes" />{' '}
    </div>
  ))
  .add('show failed Button', () => (
    <div style={divStyle}>
      <Button submitted={true} success="no" />
    </div>
  ));

// storiesOf('UI|Widgets/Basics/Button')
