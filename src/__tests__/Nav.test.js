import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../redux/store';
import Nav from '../components/Nav';

it('renders correctly', () => {
  const wrapper = shallow(
    <Provider store={store}>
        <Nav/>
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
});