import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from 'domains/Homepage'
import Ministries from 'domains/Ministries'
import AboutUs from 'domains/AboutUs'
import Sermons from 'domains/Sermons'
import Events from 'domains/Events'
import Give from 'domains/Give'
import ErrorPage from 'routes/ErrorPage'
import MvmtHeader from 'components/MvmtHeader'
import MvmtFooter from 'components/MvmtFooter'
import ContactUs from 'domains/ContactUs'
import NewHere from 'domains/NewHere'

const PublicRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <MvmtHeader />
          <Homepage />
          <MvmtFooter />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/ministries',
      element: (
        <>
          <MvmtHeader />
          <Ministries />
          <MvmtFooter />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/sermons',
      element: (
        <>
          <MvmtHeader />
          <Sermons />
          <MvmtFooter />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/events',
      element: (
        <>
          <MvmtHeader />
          <Events />
          <MvmtFooter />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/about-us',
      element: (
        <>
          <MvmtHeader />
          <AboutUs />
          <MvmtFooter />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/give',
      element: (
        <>
          <MvmtHeader />
          <Give />
          <MvmtFooter />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/contact-us',
      element: (
        <>
          <MvmtHeader />
          <ContactUs />
          <MvmtFooter />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/new-here',
      element: (
        <>
          <MvmtHeader />
          <NewHere />
          <MvmtFooter />
        </>
      ),
      errorElement: <ErrorPage />,
    },
  ])
  return <RouterProvider router={router} />
}

export default PublicRoutes
