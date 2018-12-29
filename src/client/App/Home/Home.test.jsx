import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Home from '.';

describe('Home', () => {
  let wrapper;

  function render() {
    const element = (
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    wrapper = mount(element);
  }

  test('should render correctly', () => {
    render();
    expect(wrapper.text()).toBe('Starter First kit!Go To About Page');
  });
});
