import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
//import renderer from 'react-test-renderer';
import { store } from '../redux/store';
import AddLinkContainer from '../containers/AddLinkContainer';

it('renders correctly', () => {
  const wrapper = shallow(
    <Provider store={store}>
        <AddLinkContainer/>
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
});

// test('renders correctly', () => {
//   const tree = renderer.create(<AddLinkContainer/>).toJSON();
  
//   expect(tree).toMatchInlineSnapshot();
// });