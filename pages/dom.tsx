import { NextPage } from "next";
import { useState, useId } from "react";

const Home: NextPage = () => {
  const [number, setNumber] = useState(100);
  console.log("id", useId());
  console.log();
  return (
    <>
      <input
        type="number"
        name="number"
        id=""
        value={number}
        className="input w-full max-w-xs"
      />{" "}
      <br />
      <button
        className="btn"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        increase
      </button>
      <button
        className="btn"
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        decrease
      </button>
    </>
  );
};

export default Home;
