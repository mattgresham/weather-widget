import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Editor from './Editor';

const mockFn = jest.fn();

it('renders correctly', () => {
  const component = render(
    <Editor
      isWindShown="on"
      setIsWindShown={mockFn}
      setTitle={mockFn}
      setUnits={mockFn}
      title=""
      units="metric"
    />
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('renders correctly with a title', () => {
  const component = render(
    <Editor
      isWindShown="on"
      setIsWindShown={mockFn}
      setTitle={mockFn}
      setUnits={mockFn}
      title="Title"
      units="metric"
    />
  );
  expect(toJson(component)).toMatchSnapshot();
});
