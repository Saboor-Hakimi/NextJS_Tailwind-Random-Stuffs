function Header() {
  return (
    <>
      <div className="flex p-8 items-center text-aseel">
        <div>
          <div className=" text-3xl font-extrabold w-[69%] mb-8">
            Sell with Aseel and connect with millions of buyers around the world
          </div>
          <div className="text-2xl font-semibold">
            Download Aseel app for free and start exploring
          </div>
          <div>
            {/* appstore and playstore logos links */}
            <div className="flex gap-4 mt-4">
              <img
                src="https://aseelapp.com/media/ced/csmarketplace/login_landing_page/iosapp.webp"
                alt=""
                width={150}
              />
              <img
                src="https://aseelapp.com/media/ced/csmarketplace/login_landing_page/androidapp.webp"
                alt=""
                width={150}
              />
            </div>
            <div>
              <div className="btn btn-primary bg-aseel hover:bg-[#163382] btn-md my-12 text-lg">
                Start Selling
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://aseelapp.com/media/ced/csmarketplace/login_landing_page/lpmainimg.webp"
            alt=""
            width={555}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
