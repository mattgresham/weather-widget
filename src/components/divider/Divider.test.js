import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Divider from './Divider';

it('renders correctly', () => {
  const component = render(<Divider />);
  expect(toJson(component)).toMatchSnapshot();
});
