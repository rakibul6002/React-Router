import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';
import About from './components/About/About.jsx';
// import Contact from './components/Contact/Contact.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,

      },
      {
        path: "/blogs",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Blogs></Blogs>

      },
      {
        path: "/about",
        element: <About></About>,

      },
      // {
      //   path: "/contact",
      //   element: <Contact></Contact>,

      // },
      {
        path: `/user/:userId`,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,

      },
      {
        path: `/blog/:blogId`,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`),
        element: <PostDetails></PostDetails>

      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
