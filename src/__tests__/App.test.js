import React from 'react';
import { shallow } from 'enzyme';
import App from '../containers/App';

it('renders correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});