/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

test('Button render', () => {
  const button = shallow(
    <Button buttonStyle="small" buttonText="I'm a button" />,
  );

  expect(button.text()).toEqual("I'm a button");

  const hasClass = button.hasClass('small');

  expect(hasClass).toEqual(true);
});
