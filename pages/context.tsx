import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* css style here to display this as grid */}
      </Head>
      <div className="flex flex-col-reverse gap-4" id="special">
        <div className="bg-teal-400 p-4 m-2 text-black w-48 text-center font-bold text-2xl">
          here
        </div>
        <div className="bg-teal-400 p-4 m-2 text-black w-48 text-center font-bold text-2xl">
          here
        </div>
        <div className="bg-teal-400 p-4 m-2 text-black w-48 text-center font-bold text-2xl">
          here
        </div>
        <div className="bg-teal-400 p-4 m-2 text-black w-48 text-center font-bold text-2xl">
          here
        </div>
        <div className="bg-teal-400 p-4 m-2 text-black w-48 text-center font-bold text-2xl">
          here
        </div>

        <div className="bg-teal-400 p-4 m-4">here</div>
      </div>
      <ul>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
      </ul>
      {/* create a button in the format of bootstrap buttons */}
      <div className="btn btn-primary m-4">Create</div>
    </div>
  );
};

export default Home;
