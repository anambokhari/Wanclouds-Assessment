import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from './Sidebar/sidebar';
import Header from './Header/header';
import Form from './Form/form';
import Content from './Content/content';
import Footer from './Footer/footer';

import './App.css';

// const router = createBrowserRouter([
//   { path: "/",
//     element: <Form />
//    },
//   { path: "/Content",
//    element: <Content /> 
//   }
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div  >
        <Header />
        <Sidebar />
        <Form />
        <Footer />
      </div>
    ),
  },
  {
    path: "/Content",
    element: (
      <div >
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    ),
  },
]);


function App() {
  return (
    <div>
      {/* <Header/>
      <Sidebar/>
      <RouterProvider router={router} />
      <Footer/> */}
       <RouterProvider router={router} />
      </div>
  );
}

export default App;
