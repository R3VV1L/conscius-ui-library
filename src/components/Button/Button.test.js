import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('Button component', () => {
    it('renders the button component with the correct title and size', () => {
        const onClick = jest.fn();
        const { getByText } = render(
            <Button title="Click me!" size="medium" onClick={onClick} />
        );
        const button = getByText('Click me!');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('button-medium');
    });

    it('calls the onClick function when clicked', () => {
        const onClick = jest.fn();
        const { getByText } = render(
            <Button title="Click me!" size="medium" onClick={onClick} />
        );
        const button = getByText('Click me!');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });
});
