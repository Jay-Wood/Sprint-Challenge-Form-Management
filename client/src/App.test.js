import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from "react-testing-library";
import { render } from '@testing-library/react';
import "jest-dom/extend-expect";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("User Form text is present", () => {
  const wrapper = rtl.render ( <App/> );
  const element = wrapper.queryByText(/user form/i);
  expect(element).toBeInTheDocument;

})

