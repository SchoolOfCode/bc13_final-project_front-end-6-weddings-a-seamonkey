import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';

test('Can you type in Crumpet', () => {
    render(<Search />)
    const input = screen.getByPlaceholderText("Find by food or barcode")
    userEvent.type(input, "Crumpet")
    expect(input.value).toBe("Crumpet")
})

test('select a button', () => {
    render(<Search />)
    const searchButton = screen.getByText("Can I eat this?")
    const input = screen.getByPlaceholderText("Find by food or barcode")
    userEvent.type(input, "Crumpet")
    userEvent.click(searchButton)
    const loading = screen.findByText("Loading...")
    expect(loading).toBeInTheDocument()
})

//test barcode button work 

//if you call an item that is not suitable for gluten and other two you get correct output and a test for positive

//product by name or barcode outcome contains name - type crumpet state contain crumpet

//test outcome contains name and the reason - if tick gluten gluten is displayed

//test all states that they are using the correct initial states

//test input not on database no product message



