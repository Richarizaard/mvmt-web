import logo from "../assets/test.jpg";

const MvmtHeader = () => {
  return (
    <>
      <div className="pb-16 w-full flex justify-between  text-base font-semibold">
        <div className="flex justify-start gap-16 items-center">
          <img src={logo} alt="" />
          <div>Ministries</div>
          <div>About us</div>
          <div>Sermons</div>
          <div>Events</div>
        </div>
        <div className="flex items-center">
          <button className="rounded-lg bg-sky-500 text-white p-2 px-5">
            Donate
          </button>
        </div>
      </div>
    </>
  );
};

export default MvmtHeader;
