
import React from 'react';
import { render } from '@testing-library/react';
import PeepsDisplay from './PeepsDisplay.js';

describe('<PeepsDisplay />', () => {
    it('renders without crashing', () => {
      render(<PeepsDisplay />);
    });


    it('Submit button', () => {
        let clicked = false;
        const { getByText } = render(<Controls strike={() => clicked = true} />);
        const submitButton = getByText(/submit/i);
        fireEvent.click(submitButton);
        expect(clicked).toBe(true);
      });
    
});
