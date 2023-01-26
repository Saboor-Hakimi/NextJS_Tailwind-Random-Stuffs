import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-evenly place-items-center h-screen flex-row  bg-blue-400 gap-4">
          <div className="h-[4rem] rounded items-center bg-lime-400 m-[3px] text-black text-center text-lg order-1">
            Home
          </div>
          <div className="h-[4rem] rounded items-center bg-lime-400 m-[3px] text-black text-center text-lg flex-[2]">
            Search
          </div>
          <div className="h-[4rem] rounded items-center bg-lime-400 m-[3px] text-black text-center text-lg flex-[2] self-center">
            Profile
          </div>
          <div className="h-[4rem] rounded items-center bg-lime-400 m-[3px] text-black text-center text-lg flex-1 order-1">
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
