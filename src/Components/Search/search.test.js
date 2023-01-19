import userEvent from '@testing-library/user-event';
import Search from './Search';
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

test('Can you type in Crumpet', () => {
  render(<Search />);
  const input = screen.getByPlaceholderText('Find by food or barcode');
  userEvent.type(input, 'Crumpet');
  expect(input.value).toBe('Crumpet');
});

// test('select a button', () => {
//   render(<Search />);
//   const searchButton = screen.getByText('Can I eat this?');
//   const input = screen.getByPlaceholderText('Find by food or barcode');
//   userEvent.type(input, 'Crumpet');
//   userEvent.click(searchButton);
//   const loading = screen.findByText('Loading...');
//   expect(loading).toBeInTheDocument();
// });

//test barcode button work

//if you call an item that is not suitable for gluten and other two you get correct output and a test for positive

//product by name or barcode outcome contains name - type crumpet state contain crumpet

//test outcome contains name and the reason - if tick gluten gluten is displayed

//test all states that they are using the correct initial states

//test input not on database no product message

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('I can eat Crumpets if no allergies are selected, positive outcome displays with happy face', async () => {
  server.use(
    rest.get('/api/foods/crumpet', (req, res, ctx) => {
      return res(
        ctx.json({
          success: true,
          payload: {
            product_id: 1,
            product_name: 'warburtons crumpets',
            picture: 'picture here',
            lactose: true,
            fodmap: true,
            gluten: true,
            barcode_number: '5010044000701',
            // Check that there is no bug when gluten is checked if product contains all of it, change fodmap and lactose to false here ^^ to check that we are testing correctly - Change back to true afterwards obvs
          },
        })
      );
    })
  );
  render(<Search />);
  const input = screen.getByPlaceholderText('Find by food or barcode');
  userEvent.type(input, 'Crumpet');
  const searchButton = screen.getByText('Can I eat this?');
  fireEvent.click(searchButton);
  await screen.findByTestId('positive-outcome');
  const pPositive = screen.getByTestId('positive-outcome');
  expect(pPositive).toHaveTextContent('warburtons crumpets');
  await screen.findByTestId('happy-face');
  const happyFace = screen.getByTestId('happy-face');
  expect(happyFace).toBeInTheDocument();
});

// Test that gluten, fodmap and lactose are true when rendering page
// data-testid="gluten-toggle" click and check Negative outcome displays - look for "li" that says "gluten", and check the face is not happy
// Write a test that breaks first and then fix it

// Two test for fodmap, two for lactose and two for gluten (positive and negative)
