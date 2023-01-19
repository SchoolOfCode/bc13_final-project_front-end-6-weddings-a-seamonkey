import userEvent from '@testing-library/user-event';
import Search from './Search';
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

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

/* test('I can eat Crumpets if no allergies are selected, positive outcome displays with happy face', async () => {
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
*/

/* test("I can't eat Crumpets if gluten toggle is selected, negative outcome displays with not happy face", async () => {
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
  const glutenToggle = screen.getByTestId('gluten-toggle');
  fireEvent.click(glutenToggle);
  const searchButton = screen.getByText('Can I eat this?');
  fireEvent.click(searchButton);
  await screen.findByTestId('negative-outcome');
  const pNegative = screen.getByTestId('negative-outcome');
  expect(pNegative).toHaveTextContent('warburtons crumpets');
  await screen.findByTestId('not-happy-face');
  const notHappyFace = screen.getByTestId('not-happy-face');
  expect(notHappyFace).toBeInTheDocument();
});

*/

/* test("I can't eat spaghetti if gluten toggle is selected, negative outcome displays with not happy face and gluten as a reason", async () => {
  server.use(
    rest.get('/api/foods/spaghetti', (req, res, ctx) => {
      return res(
        ctx.json({
          success: true,
          payload: {
            product_id: 4,
            product_name: ' tesco spaghetti',
            picture: 'picture here',
            lactose: false,
            fodmap: false,
            gluten: true,
            barcode_number: '5057545092514',
          },
        })
      );
    })
  );
  render(<Search />);
  const input = screen.getByPlaceholderText('Find by food or barcode');
  userEvent.type(input, 'spaghetti');
  const glutenToggle = screen.getByTestId('gluten-toggle');
  fireEvent.click(glutenToggle);
  const searchButton = screen.getByText('Can I eat this?');
  fireEvent.click(searchButton);
  await screen.findByTestId('negative-outcome');
  const pNegative = screen.getByTestId('negative-outcome');
  expect(pNegative).toHaveTextContent('tesco spaghetti');
  await screen.findByTestId('not-happy-face');
  const notHappyFace = screen.getByTestId('not-happy-face');
  expect(notHappyFace).toBeInTheDocument();
  const reasonNegative = screen.getByTestId('negative-outcome-reason');
  expect(reasonNegative).toHaveTextContent('Gluten');
});

*/

/*test("I can't eat Crumpets if gluten, fodmap and lactose toggles are selected, negative outcome displays with not happy face and gluten, fodmap and lactose as the reason", async () => {
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
          },
        })
      );
    })
  );
  render(<Search />);
  const input = screen.getByPlaceholderText('Find by food or barcode');
  userEvent.type(input, 'Crumpet');
  const glutenToggle = screen.getByTestId('gluten-toggle');
  fireEvent.click(glutenToggle);
  const fodmapToggle = screen.getByTestId('fodmap-toggle');
  fireEvent.click(fodmapToggle);
  const lactoseToggle = screen.getByTestId('lactose-toggle');
  fireEvent.click(lactoseToggle);
  const searchButton = screen.getByText('Can I eat this?');
  fireEvent.click(searchButton);
  await screen.findByTestId('negative-outcome');
  const pNegative = screen.getByTestId('negative-outcome');
  expect(pNegative).toHaveTextContent('warburtons crumpets');
  await screen.findByTestId('not-happy-face');
  const notHappyFace = screen.getByTestId('not-happy-face');
  expect(notHappyFace).toBeInTheDocument();
  const reasonNegative = screen.getByTestId('negative-outcome-reason');
  expect(reasonNegative).toHaveTextContent('Gluten');
  expect(reasonNegative).toHaveTextContent('Lactose');
  expect(reasonNegative).toHaveTextContent('High Fodmap');
});
*/

/*test('I can eat spaghetti if fodmap and lactose toggles are selected, positive outcome displays with happy face', async () => {
  server.use(
    rest.get('/api/foods/spaghetti', (req, res, ctx) => {
      return res(
        ctx.json({
          success: true,
          payload: {
            product_id: 4,
            product_name: ' tesco spaghetti',
            picture: 'picture here',
            lactose: false,
            fodmap: false,
            gluten: true,
            barcode_number: '5057545092514',
          },
        })
      );
    })
  );
  render(<Search />);
  const input = screen.getByPlaceholderText('Find by food or barcode');
  userEvent.type(input, 'spaghetti');
  const fodmapToggle = screen.getByTestId('fodmap-toggle');
  fireEvent.click(fodmapToggle);
  const lactoseToggle = screen.getByTestId('lactose-toggle');
  fireEvent.click(lactoseToggle);
  const searchButton = screen.getByText('Can I eat this?');
  fireEvent.click(searchButton);
  await screen.findByTestId('positive-outcome');
  const pPositive = screen.getByTestId('positive-outcome');
  expect(pPositive).toHaveTextContent('tesco spaghetti');
  await screen.findByTestId('happy-face');
  const happyFace = screen.getByTestId('happy-face');
  expect(happyFace).toBeInTheDocument();
});
*/

// Test that gluten, fodmap and lactose are true when rendering page
// data-testid="gluten-toggle" click and check Negative outcome displays - look for "li" that says "gluten", and check the face is not happy
// Write a test that breaks first and then fix it
// Two test for fodmap, two for lactose and two for gluten (positive and negative)
// Check that there is no bug when gluten is checked if product contains all of it, change fodmap and lactose to false here ^^ to check that we are testing correctly - Change back to true afterwards obvs

test('I can eat strawberries even if gluten, fodmap and lactose toggles are selected, positive outcome displays with happy face', async () => {
  server.use(
    rest.get('/api/foods/spaghetti', (req, res, ctx) => {
      return res(
        ctx.json({
          success: true,
          payload: {
            product_id: 9,
            product_name: 'tesco strawberries',
            picture: 'picture here',
            lactose: false,
            fodmap: false,
            gluten: false,
            barcode_number: '03223529',
          },
        })
      );
    })
  );
  render(<Search />);
  const input = screen.getByPlaceholderText('Find by food or barcode');
  userEvent.type(input, 'strawberries');
  const fodmapToggle = screen.getByTestId('fodmap-toggle');
  fireEvent.click(fodmapToggle);
  const lactoseToggle = screen.getByTestId('lactose-toggle');
  fireEvent.click(lactoseToggle);
  const glutenToggle = screen.getByTestId('gluten-toggle');
  fireEvent.click(glutenToggle);
  const searchButton = screen.getByText('Can I eat this?');
  fireEvent.click(searchButton);
  await screen.findByTestId('positive-outcome');
  const pPositive = screen.getByTestId('positive-outcome');
  expect(pPositive).toHaveTextContent('tesco strawberries');
  await screen.findByTestId('happy-face');
  const happyFace = screen.getByTestId('happy-face');
  expect(happyFace).toBeInTheDocument();
});

/*
Test gluten toggle - Only contain gluten: tesco spaghetti
^^Can also test fodmap and lactose with positive outcome

Test fodmap toggle - Only contain fodmap: NO PRODUCT
^^Can also test gluten and lactose with positive outcome

Test lactose toggle - Only contain lactose: nutella
^^Can also test fodmap and gluten with positive outcome

Test all toggles -  Contains everything: crumpets
                    Contains nothing: strawberries
*/
