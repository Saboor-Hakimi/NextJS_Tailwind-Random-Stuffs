// this is the page which stripe redirects to after a successful payment

import { NextPage } from "next";

const Home: NextPage = () => {
  // a huge big cross on the center of screen with a failure
  // and a button to go back to the home page

  return (
    <>
      <div className="h-screen flex justify-center place-items-center">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <h1 className="text-2xl font-bold text-gray-700">Failure!</h1>
          <p className="text-gray-500">Your payment was unsuccessful.</p>

          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/">Go back to home</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
