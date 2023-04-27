import { Link } from 'react-router-dom'
import SVGIcon from 'utils/Icon'

const MvmtFooter = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-12 sm:pt-24">
      <div className="flex gap-4 pb-4 ">
        <Link
          to="https://www.facebook.com/groups/653653698104901/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SVGIcon name="facebook" className="hover:fill-sky-500" />
        </Link>
        <Link
          to="https://www.instagram.com/azmovement/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SVGIcon name="instagram" className="hover:fill-sky-500" />
        </Link>
        <Link
          to="https://www.youtube.com/@MovementMinistry"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SVGIcon name="youtube" className="hover:fill-sky-500" />
        </Link>
        <Link to="/contact-us">
          <SVGIcon name="email" className="hover:fill-sky-500" />
        </Link>
      </div>
      <div className="text-center">
        1150 South Dobson Road | Chandler, AZ 85286
        <br />
        <br />© 2023 Movement Ministry. All rights reserved.
      </div>
    </div>
  )
}

export default MvmtFooter
