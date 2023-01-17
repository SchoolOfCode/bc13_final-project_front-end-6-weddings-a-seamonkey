import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

test('gluten toggle on', () => {
    render(<Search/>);
    const toggle = screen.getByTestId('gluten');
    userEvent.click(toggle)
    expect(search.gluten).toBeFalsy

   //onclick change true to false
})