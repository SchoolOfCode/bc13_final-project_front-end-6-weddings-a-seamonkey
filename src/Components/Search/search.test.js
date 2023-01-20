import userEvent from '@testing-library/user-event';
import Search from './Search';
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { fabClasses } from '@mui/material';

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

//test outcome contains name and the reason - if tick gluten is displayed

//test all states that they are using the correct initial states

//test input not on database no product message

const url = process.env.REACT_APP_SERVER_URL;

const server = setupServer(
  rest.get(`${url}/api/foods/glutenfood`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        payload: {
          product_id: 1,
          product_name: 'Gluten Food',
          picture: 'picture here',
          lactose: false,
          fodmap: false,
          gluten: true,
          barcode_number: '5010044000701',
        },
      })
    );
  }),
  rest.get(`${url}/api/foods/lactosefood`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        payload: {
          product_id: 2,
          product_name: 'Lactose Food',
          picture: 'picture here',
          lactose: true,
          fodmap: false,
          gluten: false,
          barcode_number: '5010044000701',
        },
      })
    );
  }),
  rest.get(`${url}/api/foods/fodmapfood`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        payload: {
          product_id: 1,
          product_name: 'Fodmap Food',
          picture: 'picture here',
          lactose: false,
          fodmap: true,
          gluten: false,
          barcode_number: '5010044000701',
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Testing for negative outcome when gluten, fodmap or lactose are checked and they are the only intolerance', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  test("I can't eat Gluten Food if gluten toggle is selected, negative outcome displays with not happy face and gluten as a reason", async () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Find by food or barcode');
    userEvent.type(input, 'glutenfood');
    const glutenToggle = screen.getByTestId('gluten-toggle');
    fireEvent.click(glutenToggle);
    const searchButton = screen.getByText('Can I eat this?');
    fireEvent.click(searchButton);
    await screen.findByTestId('negative-outcome');
    const pNegative = screen.getByTestId('negative-outcome');
    expect(pNegative).toHaveTextContent('Gluten Food');
    await screen.findByTestId('not-happy-face');
    const notHappyFace = screen.getByTestId('not-happy-face');
    expect(notHappyFace).toBeInTheDocument();
    const reasonNegative = screen.getByTestId('negative-outcome-reason');
    expect(reasonNegative).toHaveTextContent('Gluten');
  });
  test("I can't eat Lactose Food if lactose toggle is selected, negative outcome displays with not happy face and lactose as a reason", async () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Find by food or barcode');
    userEvent.type(input, 'lactosefood');
    const lactoseToggle = screen.getByTestId('lactose-toggle');
    fireEvent.click(lactoseToggle);
    const searchButton = screen.getByText('Can I eat this?');
    fireEvent.click(searchButton);
    await screen.findByTestId('negative-outcome');
    const pNegative = screen.getByTestId('negative-outcome');
    expect(pNegative).toHaveTextContent('Lactose Food');
    await screen.findByTestId('not-happy-face');
    const notHappyFace = screen.getByTestId('not-happy-face');
    expect(notHappyFace).toBeInTheDocument();
    const reasonNegative = screen.getByTestId('negative-outcome-reason');
    expect(reasonNegative).toHaveTextContent('Lactose');
  });
  test("I can't eat Fodmap Food if fodmap toggle is selected, negative outcome displays with not happy face and fodmap as a reason", async () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Find by food or barcode');
    userEvent.type(input, 'fodmapfood');
    const fodmapToggle = screen.getByTestId('fodmap-toggle');
    fireEvent.click(fodmapToggle);
    const searchButton = screen.getByText('Can I eat this?');
    fireEvent.click(searchButton);
    await screen.findByTestId('negative-outcome');
    const pNegative = screen.getByTestId('negative-outcome');
    expect(pNegative).toHaveTextContent('Fodmap Food');
    await screen.findByTestId('not-happy-face');
    const notHappyFace = screen.getByTestId('not-happy-face');
    expect(notHappyFace).toBeInTheDocument();
    const reasonNegative = screen.getByTestId('negative-outcome-reason');
    expect(reasonNegative).toHaveTextContent('Fodmap');
  });
});

/* 1. test('I can eat Crumpets if no toggles are selected, positive outcome displays with happy face', async () => {
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

/* 2. test("I can't eat spaghetti if gluten toggle is selected, negative outcome displays with not happy face and gluten as a reason", async () => {
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

/* 
   3. *Waiting on onion*
*/

/* 4. */
/*
test("I can't eat nutella if lactose toggle is selected, negative outcome displays with not happy face and lactose as a reason", async () => {
  server.use(
    rest.get('/api/foods/nutella', (req, res, ctx) => {
      return res(
        ctx.json({
          success: true,
          payload: {
            product_id: 2,
            product_name: 'nutella',
            picture:
              'https://thumbs.dreamstime.com/b/jar-nutella-jar-nutella-wood-background-179890683.jpg',
            lactose: true,
            fodmap: false,
            gluten: false,
            barcode_number: '3017620422003',
          },
        })
      );
    })
  );
  render(<Search />);
  const input = screen.getByPlaceholderText('Find by food or barcode');
  userEvent.type(input, 'nutella');
  const lactoseToggle = screen.getByTestId('lactose-toggle');
  fireEvent.click(lactoseToggle);
  const searchButton = screen.getByText('Can I eat this?');
  fireEvent.click(searchButton);
  await screen.findByTestId('negative-outcome');
  const pNegative = screen.getByTestId('negative-outcome');
  expect(pNegative).toHaveTextContent('nutella');
  await screen.findByTestId('not-happy-face');
  const notHappyFace = screen.getByTestId('not-happy-face');
  expect(notHappyFace).toBeInTheDocument();
  const reasonNegative = screen.getByTestId('negative-outcome-reason');
  expect(reasonNegative).toHaveTextContent('Lactose');
});
*/

/* 5. test("I can't eat Crumpets if gluten, fodmap and lactose toggles are selected, negative outcome displays with not happy face and gluten, fodmap and lactose as the reason", async () => {
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

/*
   6.
*/

/*
   7.
*/

/*
   8.
*/

/* 1.B */

/* test('I can eat strawberries even if gluten, fodmap and lactose toggles are selected, positive outcome displays with happy face', async () => {
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

/* 2.B test('I can eat spaghetti if fodmap and lactose toggles are selected, positive outcome displays with happy face', async () => {
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

/* 
   3.B *Waiting on onion*
*/

/*
   4.B
*/

/*
   5.B
*/

/*
   6.B
*/

/*
   7.B
*/

/*
   8.B
*/

// Test that gluten, fodmap and lactose are true when rendering page

/* MAYBE DELETE? test("I can't eat Crumpets if gluten toggle is selected, negative outcome displays with not happy face", async () => {
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

// data-testid="gluten-toggle" click and check Negative outcome displays - look for "li" that says "gluten", and check the face is not happy
// Write a test that breaks first and then fix it
// Two test for fodmap, two for lactose and two for gluten (positive and negative)
// Check that there is no bug when gluten is checked if product contains all of it, change fodmap and lactose to false here ^^ to check that we are testing correctly - Change back to true afterwards obvs

/*
1. Test no toggles - ✅

2. Test gluten toggle - Only contain gluten: tesco spaghetti
^^Can also test fodmap and lactose with positive outcome

3. Test fodmap toggle - Only contain fodmap: LIDL onion
^^Can also test gluten and lactose with positive outcome

4. Test lactose toggle - Only contain lactose: nutella
^^Can also test fodmap and gluten with positive outcome

5. Test all toggles -  Contains everything: crumpets
                    Contains nothing: strawberries

6. Test gluten and fodmap - only contain gluten and fodmap: couscous

7. Test gluten and lactose - the same as testing all three together, as you cannot have both lactose and gluten but no fodmap.

8. Test fodmap and lactose - Häagen-Dazs Vanilla Ice Cream


*/
