import React from 'react';
import { shallow } from 'enzyme';
import App from './src/index';

describe("Rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
});