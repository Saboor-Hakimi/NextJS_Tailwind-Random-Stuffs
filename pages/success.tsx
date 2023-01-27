// this is the page which stripe redirects to after a successful payment

import { NextPage } from "next";

const Home: NextPage = () => {
  // a huge big checkmark on the center of screen with a success message
  // and a button to go back to the home page

  return (
    <>
      <div className="h-screen flex justify-center place-items-center">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h1 className="text-2xl font-bold text-gray-700">Success!</h1>
          <p className="text-gray-500">Your payment was successful.</p>

          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/">Go back to home</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
