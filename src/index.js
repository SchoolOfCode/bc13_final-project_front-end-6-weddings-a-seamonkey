import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App.js';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Search from './Components/Search/Search.js';
import About from './Components/About/index.js';
import Instructions from './Components/Instructions/index.js';
import AuthenticationButton from './Components/Login-Logout/AuthenticationButton.js';
import LoginButton from './Components/Login-Logout/LoginButton.js';
import List from './Components/List/List.js';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Search />} />
      <Route path="/about" element={<About />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/Login" element={<AuthenticationButton />} />
      <Route path="/List" element={<List/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
