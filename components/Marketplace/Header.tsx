function Header() {
  return (
    <>
      <div className="px-44 bg-white shadow-md py-4">
        <div className="flex justify-start items-center gap-4 font-bold">
          <img
            src="https://aseelapp.com/static/version1679759900/frontend/Ced/ced_2k18/en_US/images/login_landing_page/bluelogo.png"
            className="h-10"
            alt=""
          />
          <ol className="flex flex-row gap-4 text-sm font-sans">
            <li className="hover:cursor-pointer">Why sell with Aseel?</li>
            <li className="hover:cursor-pointer">How to sell through Aseel?</li>
            <li className="hover:cursor-pointer">Start selling</li>
          </ol>

          <div className="ml-auto">
            <div className="btn btn-primary bg-[#11608f] hover:bg-[#163382] btn-sm">
              Sign In
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
