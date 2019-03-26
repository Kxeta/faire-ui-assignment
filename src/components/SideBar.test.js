import React from 'react';
import { Sidebar } from './SideBar';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import '../setupTests.js';

describe('Rendering - Sidebar', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Sould render with props correctly', () => {
    const wrapper = shallow(
      <Sidebar list={[{ name: 'Champs', linkTo: '/champs' }]} />,
    );
    expect(wrapper.find(Link).length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
