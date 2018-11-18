// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Editor from './Editor';

const stories = storiesOf('Editor', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Editor
    isWindShown={select('Is wind shown', { On: 'on', Off: 'off' }, 'on')}
    setIsWindShown={action('setIsWindShown')}
    setTitle={action('setTitle')}
    setUnits={action('setUnits')}
    title={text('Title')}
    units={select('Units', { C: 'metric', F: 'imperial' }, 'metric')}
  />
));
