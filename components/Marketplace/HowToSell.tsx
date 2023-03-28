function HowToSell() {
  return (
    <>
      <div className="pt-8 text-aseel ">
        <div className="flex justify-center items-center text-3xl font-bold">
          How to sell through Aseel?
        </div>
        <div className="grid grid-cols-3 grid-rows-2 py-4 gap-8">
          {/* this div is row 1 and row two of first column */}
          <div className="row-start-1 row-end-3">
            <img
              src="https://aseelapp.com/media/ced/csmarketplace/login_landing_page/howaseelwork.webp"
              alt=""
            />
          </div>
          <div className="mt-12">
            <div className="text-lg font-bold mb-4">Step 1:</div>
            <div className="text-lg">Register</div>
            <div className="text-sm mt-2">Register here as a vendor.</div>
          </div>
          <div className="mt-12">
            <div className="text-lg font-bold mb-4">Step 2:</div>
            <div className="text-lg">List Products</div>
            <div className="text-sm mt-2">
              Add your product’s eye-catching photos, include descriptions, and
              set the prices.
            </div>
          </div>
          <div className="">
            <div className="text-lg font-bold mb-4">Step 3:</div>
            <div className="text-lg">Ship Products</div>
            <div className="text-sm mt-2">
              Use Aseel supply chain to ship your products to your customers
              globally.
            </div>
          </div>
          <div className="">
            <div className="text-lg font-bold mb-4">Step 4:</div>
            <div className="text-lg">Receive Payments</div>
            <div className="text-sm mt-2">
              Include details of your account to receive payments for each sale
              you make through Aseel.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowToSell;
