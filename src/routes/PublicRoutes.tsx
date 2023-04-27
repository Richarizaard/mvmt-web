import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from 'domains/Homepage'
import Ministries from 'domains/Ministries'
import AboutUs from 'domains/AboutUs'
import Sermons from 'domains/Sermons'
import Events from 'domains/Events'
import Give from 'domains/Give'
import ContactUs from 'domains/ContactUs'
import NewHere from 'domains/NewHere'
import Missions from 'domains/Missions'
import ScrollToTopOnRoute from 'utils/hooks/ScrollToTopOnRoute'

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTopOnRoute />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/give" element={<Give />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/new-here" element={<NewHere />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRoutes
