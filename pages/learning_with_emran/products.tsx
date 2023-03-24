import { NextPage } from "next";
import { useState, useId, useEffect } from "react";

import { useProducts } from "medusa-react";
import { Product } from "@medusajs/medusa";

import axios from "axios";

import NewProduct from "./newProduct";

export default function Products() {
  let { products, isLoading } = useProducts();

  // make 3 copies of products
  products = [...products, ...products, ...products];

  return isLoading ? (
    <div className="flex h-screen text-lg font-bold justify-center items-center">
      <h1>Loading...</h1>
    </div>
  ) : (
    <>
      <div className="flex justify-center items-center h-full p-4 bg-[#0a0a23] text-white">
        <div className="grid grid-cols-5 grid-rows-2 gap-8">
          {products?.map((product: Product) => (
            <div key={product.id} className="hover:cursor-pointer group">
              <div className="bg-gray-700 relative">
                {/* randomly show or not show <NewProduct /> with the chance of 1/3 */}
                {Math.floor(Math.random() * 3) === 0 && <NewProduct />}
                <img
                  src={product.images[0].url}
                  alt={product.title}
                  className="rounded-md hover:filter hover:opacity-80 hover:trasation-all hover:duration-100"
                />
              </div>
              <h1 className="font-bold text-md my-2">{product.title}</h1>
              {/* <p className="text-md line-clamp-2 my-1">{product.description}</p> */}
              <p>
                $
                {(product.variants[0].prices[0].amount.toFixed(2) as any) /
                  100.0}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
