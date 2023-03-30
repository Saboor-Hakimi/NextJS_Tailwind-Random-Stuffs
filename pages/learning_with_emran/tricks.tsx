export default function Home() {
  return (
    <>
      {/* first trick */}
      <div className="p-4 bg-teal-400 text-center text-3xl">
        <ul>
          <li>hi</li>
          <li>hi</li>
          <li className="text-5xl m-4">hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
      </div>

      {/* second trick */}
      <div className="bg-indigo-500 text-white text-xl text-center p-5 ">
        <ul className="space-y-5">
          <li>hey</li>
          <li>hey</li>
          <li>hey</li>
        </ul>
      </div>

      {/* third trick */}
      <div className="special-div border-white border-t-2 mt-2">
        <ul className="space-y-5">
          <li>hey</li>
          <li>hey</li>
          <li>hey</li>
        </ul>
      </div>

      {/* fourth trick */}
      <div className="grid grid-cols-3 grid-rows-1 text-center p-4 bg-violet-600 text-white text-xl gap-4 md:grid-cols-5 lg:grid-cols-7 transition-all duration-500 md:bg-teal-500 lg:bg-black lg:text-white">
        <div>here</div>
        <div>here</div>
        <div>here</div>
        <div>here</div>
        <div>here</div>
        <div>here</div>
        <div>here</div>
        <div>here</div>
        <div>here</div>
        <div>here</div>
      </div>
    </>
  );
}
