import exp from "constants";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";

import TipTap from "../components/tiptap";

import TestRenderer from "react-test-renderer";
import Link from "next/link.js";

const ReactTestRenderer = require("react-test-renderer");

const HomePage: NextPage = () => {
  TestRenderer.act(() => {
    console.log("test");
  });
  const testRenderer = TestRenderer.create(
    <Link href="https://www.facebook.com/">Facebook</Link>
  );
  console.log(testRenderer.toJSON());
  return <></>;
};

export default HomePage;
