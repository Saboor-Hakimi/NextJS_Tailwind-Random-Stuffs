import { NextPage } from "next";
import { useState, useId, useEffect } from "react";

import Header from "../../components/Marketplace/Header";
import HowToSell from "../../components/Marketplace/HowToSell";
import Intro from "../../components/Marketplace/Intro";

export default function Products() {
  return (
    <>
      <div className="container bg-[#f5f5f5]">
        <Header />
        <div className="h-full px-44 py-4">
          <Intro />
          <div className="bg-white rounded-xl h-full text-aseel p-12 gap-8 mb-8 flex flex-col items-center">
            <div className="text-3xl font-bold">Why sell with Aseel?</div>
            <div className="flex justify-around items-center ">
              <div className="justify-center flex flex-col w-[30%]">
                <div className="text-xl my-2 font-bold">Global Customers</div>
                <img
                  src="https://aseelapp.com/media/ced/csmarketplace/login_landing_page/whyaseel1.webp"
                  alt=""
                  width={250}
                />
                Aseel connects you with customers all over the world. Our online
                platforms allow you to sell and ship your products to anywhere
                in the world.
              </div>
              <div className="justify-center flex flex-col w-[30%]">
                <div className="text-xl my-2 font-bold">Handmade Products</div>
                <img
                  src="https://aseelapp.com/media/ced/csmarketplace/login_landing_page/whyaseel2.webp"
                  alt=""
                  width={250}
                />
                Do you have beautiful handmade products you want to sell to a
                wider customer base? We can help. Team up with us and we will
                help boost your sales into countries like the US, UK, and
                Australia.
              </div>
              <div className="justify-center flex flex-col w-[30%]">
                <div className="text-xl my-2 font-bold">Vendors like You</div>
                <img
                  src="https://aseelapp.com/media/ced/csmarketplace/login_landing_page/whyaseel3.webp"
                  alt=""
                  width={250}
                />
                Aseel directly supports vendors that specialize in handmade
                artisanal products. We are experienced with highlighting your
                products, your shop, and your story to global audiences.
              </div>
            </div>
          </div>

          <div className="flex justify-around items-center bg-aseel rounded-xl h-full text-white p-12 gap-8 mb-8">
            <div className="justify-center flex flex-col items-center text-center">
              <img
                src="https://aseelapp.com/media/ced/csmarketplace/login_landing_page/fees.webp"
                alt=""
                width={140}
              />
              <div className="text-xl m-2 font-bold">No Hidden Fees</div>
              Create a shop for free with no monthly fee. We will charge a 5%
              referral fee only if you make a sale.
            </div>
            <div className="justify-center flex flex-col items-center text-center">
              <img
                src="https://aseelapp.com/media/ced/csmarketplace/login_landing_page/secure.webp"
                alt=""
                width={140}
              />
              <div className="text-xl m-2 font-bold">Secure Payment</div>
              As soon as a customer pays you, you may ship the order. We will
              transfer it into your bank account via a Payoneer.
            </div>
            <div className="justify-center flex flex-col items-center text-center">
              <img
                src="https://aseelapp.com/media/ced/csmarketplace/login_landing_page/support.webp"
                alt=""
                width={140}
              />
              <div className="text-xl m-2 font-bold">Support & Education</div>
              Get support throughout your journey with dedicated seller services
              in your own language.
            </div>
          </div>

          <HowToSell />
        </div>
      </div>
    </>
  );
}
