import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from './Input';

const mockFn = jest.fn();

it('renders correctly', () => {
  const component = render(<Input onChange={mockFn} placeholder="Title" />);
  expect(toJson(component)).toMatchSnapshot();
});
