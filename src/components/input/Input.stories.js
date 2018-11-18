// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import Input from './Input';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Input
    onChange={action('onChange')}
    placeholder={text('Placeholder', 'Placeholder')}
    value={text('value')}
  />
));
