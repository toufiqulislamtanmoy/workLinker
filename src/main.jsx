import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Statistic from './Components/Statistic/Statistic';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
import JobDetails from './Components/JobDetails/JobDetails';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element: <Home/>,
        loader: () => fetch('joblist.json')
      },
      {
        path:'/statistic',
        element: <Statistic/>
      },
      {
        path:'/appliedjobs',
        element: <AppliedJobs/>
      },
      {
        path:'/blogs',
        element: <Blogs/>,
      },
      {
        path:'/jobDetails',
        element: <JobDetails/>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
