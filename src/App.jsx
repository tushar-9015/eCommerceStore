import {children} from 'react';
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Product from './pages/Product/Product'


import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

const AppLayout = () => (
  <div className="app">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
