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
  }),
  rest.get(`${url}/api/foods/noproduct`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ success: true }));
  }),
  rest.get(`${url}/api/foods/unchecked`, (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        payload: {
          product_id: 9,
          product_name: 'all false',
          picture: 'picture here',
          lactose: false,
          fodmap: false,
          gluten: false,
          barcode_number: '03223529',
        },
      })
    );
  }),
  rest.get(`${url}/api/foods/checked`, (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        payload: {
          product_id: 9,
          product_name: 'all true',
          picture: 'picture here',
          lactose: true,
          fodmap: true,
          gluten: true,
          barcode_number: '03223529',
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Testing for negative outcome when gluten, fodmap or lactose are checked and they are the only intolerance', () => {
  test("I can't eat Gluten Food if gluten toggle is selected, negative outcome displays with not happy face and gluten as a reason", async () => {
    render(<Search />);
    const input = screen.getByTestId('search-input');
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
    const input = screen.getByTestId('search-input');
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
    const input = screen.getByTestId('search-input');
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

describe('Testing for positive outcome when gluten, fodmap or lactose are checked', () => {
  test('I can eat Gluten Food, but fodmap and lactose are checked, and expect a positive outcome', async () => {
    render(<Search />);
    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'glutenfood');
    const lactoseToggle = screen.getByTestId('lactose-toggle');
    fireEvent.click(lactoseToggle);
    const fodmapToggle = screen.getByTestId('fodmap-toggle');
    fireEvent.click(fodmapToggle);
    const searchButton = screen.getByText('Can I eat this?');
    fireEvent.click(searchButton);
    await screen.findByTestId('positive-outcome');
    const pPositive = screen.getByTestId('positive-outcome');
    expect(pPositive).toHaveTextContent('Gluten Food');
    await screen.findByTestId('happy-face');
    const HappyFace = screen.getByTestId('happy-face');
    expect(HappyFace).toBeInTheDocument();
  });
  test('I can eat Lactose Food, but fodmap and gluten are checked, and expect a positive outcome', async () => {
    render(<Search />);
    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'lactosefood');
    const glutenToggle = screen.getByTestId('gluten-toggle');
    fireEvent.click(glutenToggle);
    const fodmapToggle = screen.getByTestId('fodmap-toggle');
    fireEvent.click(fodmapToggle);
    const searchButton = screen.getByText('Can I eat this?');
    fireEvent.click(searchButton);
    await screen.findByTestId('positive-outcome');
    const pPositive = screen.getByTestId('positive-outcome');
    expect(pPositive).toHaveTextContent('Lactose Food');
    await screen.findByTestId('happy-face');
    const HappyFace = screen.getByTestId('happy-face');
    expect(HappyFace).toBeInTheDocument();
  });
  test('I can eat Fodmap Food, but gluten and lactose are checked, and expect a positive outcome', async () => {
    render(<Search />);
    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'fodmapfood');
    const lactoseToggle = screen.getByTestId('lactose-toggle');
    fireEvent.click(lactoseToggle);
    const glutenToggle = screen.getByTestId('gluten-toggle');
    fireEvent.click(glutenToggle);
    const searchButton = screen.getByText('Can I eat this?');
    fireEvent.click(searchButton);
    await screen.findByTestId('positive-outcome');
    const pPositive = screen.getByTestId('positive-outcome');
    expect(pPositive).toHaveTextContent('Fodmap Food');
    await screen.findByTestId('happy-face');
    const HappyFace = screen.getByTestId('happy-face');
    expect(HappyFace).toBeInTheDocument();
  });
});

describe('Testing no product and elements are present when rendering', () => {
  test('Product not found message appears when the searched product is not in the db', async () => {
    render(<Search />);
    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'noproduct');
    const searchButton = screen.getByText('Can I eat this?');
    fireEvent.click(searchButton);
    await screen.findByTestId('no-product');
    const pNoProduct = screen.getByTestId('no-product');
    expect(pNoProduct).toHaveTextContent('Product not found. Please try again');
  });
  test('When rendering the home page the toggles are present', async () => {
    render(<Search />);
    const glutenToggle = screen.getByTestId('gluten-toggle');
    const fodmapToggle = screen.getByTestId('fodmap-toggle');
    const lactoseToggle = screen.getByTestId('lactose-toggle');
    expect(glutenToggle).toBeDefined();
    expect(fodmapToggle).toBeDefined();
    expect(lactoseToggle).toBeDefined();
  });
  // Test that gluten, fodmap and lactose are true when rendering page - we don't know how to check this
});

test('testing when all toggles are selected and the product doesnt contain anything - expect positive response', async () => {
  render(<Search />);
  const input = screen.getByTestId('search-input');
  userEvent.type(input, 'unchecked');
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
  expect(pPositive).toHaveTextContent('all false');
  await screen.findByTestId('happy-face');
  const HappyFace = screen.getByTestId('happy-face');
  expect(HappyFace).toBeInTheDocument();
});

test('testing when all toggles are selected and the product contains everything - expect negative response', async () => {
  render(<Search />);
  const input = screen.getByTestId('search-input');
  userEvent.type(input, 'checked');
  const fodmapToggle = screen.getByTestId('fodmap-toggle');
  fireEvent.click(fodmapToggle);
  const lactoseToggle = screen.getByTestId('lactose-toggle');
  fireEvent.click(lactoseToggle);
  const glutenToggle = screen.getByTestId('gluten-toggle');
  fireEvent.click(glutenToggle);
  const searchButton = screen.getByText('Can I eat this?');
  fireEvent.click(searchButton);
  await screen.findByTestId('negative-outcome');
  const pNegative = screen.getByTestId('negative-outcome');
  expect(pNegative).toHaveTextContent('all true');
  await screen.findByTestId('not-happy-face');
  const notHappyFace = screen.getByTestId('not-happy-face');
  expect(notHappyFace).toBeInTheDocument();
  const reasonNegative = screen.getByTestId('negative-outcome-reason');
  expect(reasonNegative).toHaveTextContent('Fodmap');
  expect(reasonNegative).toHaveTextContent('Gluten');
  expect(reasonNegative).toHaveTextContent('Lactose');
});
