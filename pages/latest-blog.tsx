// this is the page which stripe redirects to after a successful payment

import { NextPage } from "next";

const Home: NextPage = () => {
  // a huge big checkmark on the center of screen with a success message
  // and a button to go back to the home page

  return (
    <>
      <div>
        <div className="flex justify-center items-center mt-4">
          <span className="border-b-[3px] w-16 border-black mx-4 font-bold"></span>
          <h3 className="inline">LATEST FROM BLOG</h3>
          <span className="border-b-[3px] w-16 border-black mx-4 font-bold"></span>
        </div>

        <div className="text-center italic text-gray-500">
          The freshest and most exciting news
        </div>

        <div className="flex flex-row justify-center items-center mt-8 w-[100%] h-[24] px-4">
          <div className="w-1/4   h-full  min-h-[100%]">
            <img src="/blog/1.webp" alt="" className="min-h-full" />
            <h3 className="mt-4 text-md font-bold">
              Pamper the Mother in Your Life
            </h3>
            <p className="line-clamp-3 leading-5">
              Mothers' Day, a celebration in honor of mothers and motherhood is
              celebrated in many countries, typically in the month of May or
              March. ... Women's Day- Yay or Nay Women's Day- Yay or Nay As of
              2022, there were a little over 3.9 billion women in the world.
              This accounts for about 50% of the total world population and this
              figure is believed to be increasing steadily.
            </p>
          </div>
          <div className="w-1/4   h-full min-h-[100%] ">
            <img src="/blog/2.jpg" alt="" className="min-h-full" />
            <h3 className="mt-4 text-md font-bold">Women's Day- Yay or Nay</h3>
            <p className="line-clamp-3 leading-5">
              As of 2022, there were a little over 3.9 billion women in the
              world. This accounts for about 50% of the total world population
              and this figure is believed to be increasing steadily.
            </p>
          </div>
          <div className="w-1/4   h-full min-h-[100%] ">
            <img src="/blog/3.jpg" alt="" className="min-h-full" />
            <h3 className="mt-4 text-md font-bold">
              Clay and Creation: A Perfect Choice for Your Tableware
            </h3>
            <p className="line-clamp-3 leading-5">
              For centuries, creating a chic and inviting ambiance on dining
              tables has been a trend. People around the world search for
              beautiful, safe, and manageable tableware sets that complement
              their home decor.
            </p>
          </div>
          <div className="w-1/4   h-full min-h-[100%] ">
            <img src="/blog/4.jpg" alt="" className="min-h-full" />
            <h3 className="mt-4 text-md font-bold">
              Deck Out Your Space With Hand-Woven Afghan Oriental Rugs
            </h3>
            <p className="line-clamp-3 leading-5">
              Afghan carpets and rugs have always been well-renowned for their
              delicate vintage designs, impeccable craftsmanship, and vibrant
              color schemes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
