import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../redux/store';
import Paging from '../components/Paging';

it('renders correctly', () => {
  const wrapper = shallow(
    <Provider store={store}>
        <Paging/>
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
});