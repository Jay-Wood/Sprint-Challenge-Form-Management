import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from "react-testing-library";
import { render } from '@testing-library/react';
import "jest-dom/extend-expect";
import UserForm from "./UserForm";


describe('<UserForm />', () => {
    it('renders without crashing', () => {
      render(<UserForm />);
    });


    it('Submit button', () => {
        let clicked = false;
        const { getByText } = render(<UserForm submit={() => clicked = true} />);
        const submitButton = getByText(/submit/i);
        fireEvent.click(submitButton);
        expect(clicked).toBe(true);
    })
    
    it("Submit button with jest function", () => {
        const click = jest.fn();
        const { getByText } = render( <UserForm submit={click} /> );
        const subBtn = getByText(/submit/i);
        fireEvent.click(subBtn);
        expect(click).toBeCalled();       

    })
    
    
});