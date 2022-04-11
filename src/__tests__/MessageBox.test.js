import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../redux/store';
import MessageBox from '../components/MessageBox';

it('renders correctly', () => {
  const wrapper = shallow(
    <Provider store={store}>
        <MessageBox/>
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
});