import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import InputWrapper from './InputWrapper';

it('renders correctly', () => {
  const component = render(<InputWrapper title="Title" />);
  expect(toJson(component)).toMatchSnapshot();
});
