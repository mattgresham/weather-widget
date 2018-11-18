import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import WeatherWidget from './WeatherWidget';

const mockFn = jest.fn();

it('renders correctly with metric no data', () => {
  const component = render(
    <WeatherWidget
      getWeather={mockFn}
      icon=""
      isWindShown
      location=""
      temperature=""
      title=""
      units="metric"
      wind=""
    />
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('renders correctly with imperial no data', () => {
  const component = render(
    <WeatherWidget
      getWeather={mockFn}
      icon=""
      isWindShown
      location=""
      temperature=""
      title=""
      units="imperial"
      wind=""
    />
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('renders correctly with a title, wind and metric units', () => {
  const component = render(
    <WeatherWidget
      getWeather={mockFn}
      icon="00"
      isWindShown
      location="Australia"
      temperature="10"
      title="Weather"
      units="metric"
      wind="N 10"
    />
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('renders correctly with a title, no wind and metric units', () => {
  const component = render(
    <WeatherWidget
      getWeather={mockFn}
      icon="00"
      isWindShown={false}
      location="Australia"
      temperature="10"
      title="Weather"
      units="metric"
      wind="N 10"
    />
  );
  expect(toJson(component)).toMatchSnapshot();
});
