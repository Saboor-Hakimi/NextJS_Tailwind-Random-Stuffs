import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="w-screen bg-teal-400 text-black text-center border top-0 absolute h-8">
        header
      </div>
      <div
        className="w-screen bg-white text-black text-center border flex justify-center place-items-center text-xl overflow-y-auto"
        style={{ height: "calc(100vh - 2rem)" }}
      >
        <div className="w-24 h-24 bg-yellow-300 ring-1 rotate-45"></div>
        <div className="w-24 h-24 bg-yellow-300 ring-1 rotate-45 rounded-full ml-10"></div>
        <div className="w-0 h-0 bg-white ml-10 border-b-red-600 border-[100px] border-t-0 broder-l-0 border-r-0 transform-180 "></div>
      </div>
      <div className="w-screen bg-teal-400 text-black text-center border bottom-0 absolute h-8">
        footer
      </div>
    </>
  );
};

export default Home;
