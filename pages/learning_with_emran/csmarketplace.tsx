import { NextPage } from "next";
import { useState, useId, useEffect } from "react";

import Header from "../../components/Marketplace/Header";
import HowToSell from "../../components/Marketplace/HowToSell";

export default function Products() {
  return (
    <>
      <div className="container bg-[#f5f5f5]">
        <Header />
        <div className="h-full">
          <HowToSell />
        </div>
      </div>
    </>
  );
}
