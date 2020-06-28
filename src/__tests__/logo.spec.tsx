import React from 'react';
import renderer from 'react-test-renderer';
import { Logo } from '../logo';

describe('Testing Logo component', () => {
  it('matches Logo snapshot,', () => {
    const wrapper = renderer.create(
      <Logo logo="MiscColor1" />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
