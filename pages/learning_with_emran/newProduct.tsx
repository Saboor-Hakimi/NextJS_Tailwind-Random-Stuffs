import { NextPage } from "next";
import { useState, useId } from "react";

export default function NewProduct() {
  return (
    <>
      <div className="absolute right-2 top-2 group-hover:hidden">
        <div className="bg-[#005e8e] text-white flex justify-center items-center w-16 text-sm py-1">
          <div>New</div>
        </div>
      </div>
    </>
  );
}
