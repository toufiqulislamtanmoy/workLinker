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
import { data } from 'autoprefixer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('joblist.json')
      },
      {
        path: '/statistic',
        element: <Statistic />
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs />
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/jobDetails/:jobId',
        element: <JobDetails />,
        loader:({params}) => fetch('featuredJob.json').then(res=>res.json()).then(data=> data.job_posts.find(job => job.unique_id === params.jobId))
          
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
