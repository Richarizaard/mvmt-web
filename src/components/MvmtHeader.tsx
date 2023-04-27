import logo from 'assets/test.jpg'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SVGIcon from 'utils/Icon'

const MvmtHeader = () => {
  const [menu, setMenu] = useState<boolean>(false)
  const currentRoute = useLocation()

  const openMenu = () => {
    document.body.style.overflowY = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    setMenu(true)
  }

  const closeMenu = () => {
    document.body.style.overflowY = 'visible'
    document.body.style.position = 'static'
    document.body.style.width = 'auto'
    setMenu(false)
  }

  return (
    <>
      <nav className="hidden sm:flex w-full justify-between text-base font-semibold">
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
      <div className="sm:hidden flex justify-end">
        <button onClick={openMenu}>
          <SVGIcon name="hamburger" />
        </button>
        {menu && (
          <div className="fixed z-10 left-0 top-0 backdrop-blur-lg bg-gray-300/60 h-full w-full">
            <div className="flex flex-col h-full w-full justify-start items-center space-y-1 pb-3 pt-2 mt-8">
              <div className="flex justify-end w-full pr-10 mr-4">
                <button onClick={closeMenu}>
                  <SVGIcon name="cancel" />
                </button>
              </div>
              {currentRoute.pathname !== '/' && (
                <Link
                  to={'/'}
                  onClick={closeMenu}
                  className="hover:text-sky-500 block rounded-md px-3 py-4 font-semibold text-lg"
                >
                  Home
                </Link>
              )}
              <Link
                to={'/ministries'}
                onClick={closeMenu}
                className="hover:text-sky-500 block rounded-md px-3 py-4 font-semibold text-lg"
              >
                Ministries
              </Link>

              <Link
                to="/sermons"
                onClick={closeMenu}
                className="hover:text-sky-500 block rounded-md px-3 py-4 font-semibold text-lg"
              >
                Sermons
              </Link>

              <Link
                to="/events"
                onClick={closeMenu}
                className="hover:text-sky-500 block rounded-md px-3 py-4 font-semibold text-lg"
              >
                Events
              </Link>

              <Link
                to="/about-us"
                onClick={closeMenu}
                className="hover:text-sky-500 block rounded-md px-3 py-4 font-semibold text-lg"
              >
                About us
              </Link>
              <Link
                to="/give"
                onClick={closeMenu}
                className="hover:text-sky-500 block rounded-md px-3 py-4 font-semibold text-lg"
              >
                Give
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default MvmtHeader
