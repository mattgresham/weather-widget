import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import RadioButtonGroup from './RadioButtonGroup';
import TemperatureUnitConstants from '../../constants/temperatureUnits';

const mockFn = jest.fn();

it('renders correctly', () => {
  const component = render(
    <RadioButtonGroup
      onChange={mockFn}
      value="metric"
      values={TemperatureUnitConstants}
    />
  );
  expect(toJson(component)).toMatchSnapshot();
});
