import logo from 'assets/test.jpg'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SVGIcon from 'utils/Icon'
import useMediaQuery from 'utils/hooks/useMediaQuery'

const MvmtHeader = () => {
  const [menu, setMenu] = useState<boolean>(false)
  const isMobile = useMediaQuery(`(max-width: ${'639px'})`)
  const currentRoute = useLocation()

  const handleLink = () => {
    setMenu(false)
    window.scrollTo(0, 0)
  }
  return (
    <>
      {!isMobile && (
        <nav className="flex w-full justify-between text-base font-semibold">
          <div className="flex justify-start gap-8 lg:gap-16 items-center">
            <Link to={'/'}>
              <img src={logo} alt="" />
            </Link>
            <Link to={'/ministries'} className="hover:text-sky-500">
              Ministries
            </Link>
            <Link to={'/sermons'} className="hover:text-sky-500">
              Sermons
            </Link>
            <Link to={'/events'} className="hover:text-sky-500">
              Events
            </Link>
            <Link to={'/about-us'} className="hover:text-sky-500">
              About us
            </Link>
          </div>
          <div className="flex items-center">
            <button className="rounded-lg bg-sky-500 text-white p-2 px-5">
              Give
            </button>
          </div>
        </nav>
      )}
      {isMobile && (
        <div className="overflow-hidden">
          <div className="flex justify-end">
            <button onClick={() => setMenu(true)}>
              <SVGIcon name="hamburger" />
            </button>
          </div>
          {menu && (
            <div className="absolute z-10 left-0 top-0 backdrop-blur-lg bg-gray-300/60 h-full w-full">
              <div className="flex flex-col h-full w-full justify-start items-center space-y-1 pb-3 pt-8 mt-12">
                <div className="flex justify-end w-full pr-10 mr-4">
                  <button onClick={() => setMenu(false)}>
                    <SVGIcon name="cancel" />
                  </button>
                </div>
                {currentRoute.pathname !== '/' && (
                  <Link
                    to={'/'}
                    onClick={handleLink}
                    className="hover:text-sky-500 block rounded-md px-3 py-4 font-semibold text-lg"
                  >
                    Home
                  </Link>
                )}
                <Link
                  to={'/ministries'}
                  onClick={handleLink}
                  className="hover:text-sky-500 block rounded-md px-3 py-4 font-semibold text-lg"
                >
                  Ministries
                </Link>

                <Link
                  to="/sermons"
                  onClick={handleLink}
                  className="hover:text-sky-500 block rounded-md px-3 py-4 font-semibold text-lg"
                >
                  Sermons
                </Link>

                <Link
                  to="/events"
                  onClick={handleLink}
                  className="hover:text-sky-500 block rounded-md px-3 py-4 font-semibold text-lg"
                >
                  Events
                </Link>

                <Link
                  to="/about-us"
                  onClick={handleLink}
                  className="hover:text-sky-500 block rounded-md px-3 py-4 font-semibold text-lg"
                >
                  About us
                </Link>
                <Link
                  to="/give"
                  onClick={handleLink}
                  className="hover:text-sky-500 block rounded-md px-3 py-4 font-semibold text-lg"
                >
                  Give
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default MvmtHeader
