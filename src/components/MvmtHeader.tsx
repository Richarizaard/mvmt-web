import logo from 'assets/test.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const MvmtHeader = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <nav className="hidden md:flex w-full justify-between text-base font-semibold">
      <div className="flex justify-start gap-16 items-center">
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
        <Link to={'/ministries'}>Ministries</Link>
        <Link to={'/sermons'}>Sermons</Link>
        <Link to={'/events'}>Events</Link>
        <Link to={'/aboutUs'}>About us</Link>
      </div>
      <div className="flex items-center">
        <button className="rounded-lg bg-sky-500 text-white p-2 px-5">
          Give
        </button>
      </div>
    </nav>
  )
}

export default MvmtHeader
