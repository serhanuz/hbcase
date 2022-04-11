import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../redux/store';
import ListContainer from '../containers/ListContainer';

it('renders correctly', () => {
  const wrapper = shallow(
    <Provider store={store}>
        <ListContainer/>
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
});