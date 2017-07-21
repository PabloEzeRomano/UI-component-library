/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';

test('Label render', () => {
  const label = shallow(
    <Label labelStyle="small" labelText="I'm a label" />,
  );

  expect(label.text()).toEqual("I'm a label");

  const hasClass = label.hasClass('small');

  expect(hasClass).toEqual(true);
});
