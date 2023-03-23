import { NextPage } from "next";

import Search from "../../components/Search/search";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-slate-700 h-screen w-screen">
        <div className="absolute top-0 h-[17vh] bg-[#f6f6f8] w-screen">
          <div className="flex h-[60%]  w-full pr-8 pl-16 justify-between item-center">
            <div className=" h-full">
              <img
                src="https://aseelapp.com/media/logo/stores/1/aseel-buy-good-do-good-logo.webp"
                alt=""
                className="h-full"
              />
            </div>

            <div className="flex justify-center items-center w-[50%]">
              <input
                type="text"
                placeholder="Search for anything ..."
                className="h-[60%] w-[100%] rounded-lg border border-gray p-2 active:border-none active:outline-none active:ring-none focus:ring-none focus:border-none focus:outline-none"
              ></input>
              <div>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="-translate-x-8"
                >
                  <path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                </svg>
              </div>
            </div>

            <div className="flex gap-2  justify-center items-center">
              <div className="hover:cursor-pointer text-sm font-semibold m-2">
                USD
              </div>
              <div className="hover:cursor-pointer text-sm font-semibold m-2">
                American English
              </div>
              <div className="hover:cursor-pointer">
                <img
                  src="https://aseelapp.com/static/version1679483640/frontend/Mgs/claue/en_US/Algolia_CustomAlgolia/img/icon/Fav.svg"
                  data-src="https://aseelapp.com/static/version1679483640/frontend/Mgs/claue/en_US/Algolia_CustomAlgolia/img/icon/Fav.svg"
                ></img>
              </div>
              <div className="hover:cursor-pointer">
                <img
                  src="https://aseelapp.com/static/version1679483640/frontend/Mgs/claue/en_US/Algolia_CustomAlgolia/img/icon/Profile.svg"
                  data-src="https://aseelapp.com/static/version1679483640/frontend/Mgs/claue/en_US/Algolia_CustomAlgolia/img/icon/Profile.svg"
                ></img>
              </div>
              <div className="hover:cursor-pointer">
                <img src="https://aseelapp.com/static/version1679483640/frontend/Mgs/claue/en_US/Algolia_CustomAlgolia/img/icon/Cart.svg"></img>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 text-md font-semibold m-2">
            <a
              href="https://aseelapp.com"
              className="hover:text-[#428bca] hover:cursor-pointer"
            >
              Shop
            </a>
            <a
              href="https://aseelapp.com"
              className="hover:text-[#428bca] hover:cursor-pointer"
            >
              Emergency Response
            </a>
            <a
              href="https://aseelapp.com"
              className="hover:text-[#428bca] hover:cursor-pointer"
            >
              Grand Challenges
            </a>
            <a
              href="https://aseelapp.com"
              className="hover:text-[#428bca] hover:cursor-pointer"
            >
              Support Afghan Women
            </a>
            <a
              href="https://aseelapp.com"
              className="hover:text-[#428bca] hover:cursor-pointer"
            >
              Sellers
            </a>
            <a
              href="https://aseelapp.com"
              className="hover:text-[#428bca] hover:cursor-pointer"
            >
              Sell with ASEEL
            </a>
            <a
              href="https://aseelapp.com"
              className="hover:text-[#428bca] hover:cursor-pointer"
            >
              Stories
            </a>
            <a
              href="https://aseelapp.com"
              className="hover:text-[#428bca] hover:cursor-pointer"
            >
              About Us
            </a>
          </div>
        </div>
        <div className="absolute bottom-[40vh]  flex items-center w-screen text-center justify-center text-white text-lg">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Home;
