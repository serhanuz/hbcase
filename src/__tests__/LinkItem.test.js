import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../redux/store';
import LinkItem from '../components/LinkItem';

it('renders correctly', () => {
  const wrapper = shallow(
    <Provider store={store}>
        <LinkItem/>
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
});