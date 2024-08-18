import React from "react";
import building from "../assets/image/photo-building.jpg";

export default function Home() {
  return (
    <div className="bg-gray-100 w-full h-screen ">
      {/* header section start */}
      <header>
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 text-xl font-semibold ">
          <p>Logo</p>
          <div className="">
            <ul className="flex gap-5">
              <li>About</li>
              <li>Property</li>
              <li>BLog</li>
            </ul>
          </div>
          <button className="bg-green-600 px-4 rounded-md text-white uppercase text-base py-1">
            Sign In
          </button>
        </div>
      </header>
      {/* header section end */}

      {/* banner section start */}
      <div className="max-w-screen-xl mx-auto pt-5 flex justify-between grid grid-cols-2 ">
        <div className="pt-7">
          <p className="text-3xl font-semibold">A Dream House</p>
          <h1 className="font-bold text-7xl py-3">
            The Best Place To Find Your Dream House
          </h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,hgerfasdf hfsdasdhf hsdfsdfh hfghgr9
            quisquam.
          </p>
          <div className="">
            <button className="bg-green-400 px-2 py-1 rounded-md">Contact us</button>
            <button className="bg-gray-400 ms-4 px-4 py-1 rounded-md">Search by location</button>
          </div>
        </div>
        <div className="flex items-center justify-center" >
          <img src={building} alt="building photo" className=" h-[450px]" />
        </div>
      </div>
      {/* banner section end */}
      {/* experience section start */}
      <div className="max-w-screen-xl mx-auto pt-10 grid grid-cols-4  items-center">
        <div>
            <img src={building} alt="" className="w-[150px] h-[150px] shadow-black shadow-md"/>
        </div>
        <div>
            <h1 className="font-bold text-6xl">10+</h1>
            <p className="font-semibold text-xl tracking-wider">Years of Experience</p>
        </div>
        <div>
            <h1 className="font-bold text-6xl">500</h1>
            <p  className="font-semibold text-xl tracking-wider">Project Completed</p>
        </div>
        <div>
            <h1 className="font-bold text-6xl">50</h1>
            <p  className="font-semibold text-xl tracking-wider">Award of Gained</p>
        </div>
      </div>
      {/* experience section end */}
    </div>
  );
}
