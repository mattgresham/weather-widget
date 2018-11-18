// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  boolean,
  number,
  text,
  select
} from '@storybook/addon-knobs';
import WeatherWidget from './WeatherWidget';

const stories = storiesOf('Weather Widget', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div style={{ maxWidth: '22rem' }}>
    <WeatherWidget
      getWeather={action('getWeather')}
      icon={text('Icon', '01d')}
      isWindShown={boolean('Is wind shown')}
      location={number('location')}
      temperature={number('Temperature')}
      title={text('Title')}
      units={select('Units', { C: 'metric', F: 'imperial' }, 'metric')}
      wind={text('Wind')}
    />
  </div>
));
