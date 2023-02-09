import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/styles/common.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import SearchPage from './pages/Search/SearchPage';
import { DetailedPage } from './pages/Detailed';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter([
  {
    path: "/tvmaze-tv-series-app-improved",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchPage/>,
  },
  {
    path: "/detailed",
    element: <DetailedPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
