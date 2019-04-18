import React from 'react';
import { storiesOf } from '@storybook/react';
import Section from '../Section';

storiesOf('NEXT|Section', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `This supports markdown!
      
      ~~~js
      console.log("hello");
      ~~~
      `,
    },
  })
  .add('show Section', () => <Section />);
