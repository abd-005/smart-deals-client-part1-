import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/home/Home.jsx';
import MainLayout from './MainLayout/MainLayout.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import AllProducts from './components/All Products/AllProducts.jsx';
import Register from './components/Register/Register.jsx';
import MyProducts from './components/MyProducts/MyProducts.jsx';
import MyBids from './components/MyBids/MyBids.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "all-products", Component: AllProducts },
      { path: "register", Component: Register },
      
      { path: "myProducts", element: <MyProducts></MyProducts> },
      { path: "myBids", element: <MyBids/> },

        ],
      },
    ],
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
