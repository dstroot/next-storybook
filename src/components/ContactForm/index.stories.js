import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import ContactForm from '../ContactForm';

// ContactForm section
storiesOf('VDS|ContactForm', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
    },
  })
  .add('show ContactForm', () => <ContactForm />);
