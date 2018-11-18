// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import RadioButtonGroup from './RadioButtonGroup';

const stories = storiesOf('Radio Button Group', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <RadioButtonGroup
    onChange={action('onChange')}
    value={select('Selected value', { On: 'on', Off: 'off' }, 'on')}
    values={{ on: 'On', off: 'Off' }}
  />
));
