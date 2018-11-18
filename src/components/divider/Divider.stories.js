// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Divider from './Divider';

const stories = storiesOf('Divider', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => <Divider />);
