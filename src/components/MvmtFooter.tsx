import SVGIcon from 'utils/Icon'

const MvmtFooter = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-12 sm:pt-24">
      <div className="flex gap-4 pb-4 ">
        <SVGIcon name="facebook" fill="#0ea5e9" />
        <SVGIcon name="instagram" fill="#0ea5e9" />
        <SVGIcon name="youtube" className="stroke-sky-500" />
        <SVGIcon name="email" className="stroke-sky-500" />
      </div>
      <div>
        1150 South Dobson Road | Chandler, AZ 85286
        <br />
        <br />© 2023 Movement Ministry. All rights reserved.
      </div>
    </div>
  )
}

export default MvmtFooter
