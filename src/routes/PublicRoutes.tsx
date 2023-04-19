import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from 'domains/Homepage'
import Ministries from 'domains/Ministries'
import AboutUs from 'domains/AboutUs'
import Sermons from 'domains/Sermons'
import Events from 'domains/Events'
import Give from 'domains/Give'
import ErrorPage from 'routes/ErrorPage'

const PublicRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/ministries',
      element: <Ministries />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/sermons',
      element: <Sermons />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/events',
      element: <Events />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/aboutUs',
      element: <AboutUs />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/give',
      element: <Give />,
      errorElement: <ErrorPage />,
    },
  ])
  return <RouterProvider router={router} />
}

export default PublicRoutes
