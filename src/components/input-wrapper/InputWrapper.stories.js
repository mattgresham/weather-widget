// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import InputWrapper from './InputWrapper';

const stories = storiesOf('Input Wrapper', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <InputWrapper title={text('Title', 'Title')}>
    {text('Children', 'Children')}
  </InputWrapper>
));
