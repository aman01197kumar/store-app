import React from "react";
import banner from "../../public/banner.jpg";
import Books from "./Books";

const Body = () => {
  return (
    <div className="max-w-full-screen-2xl container mx:auto md:px-20 px-4 space-y-20 md:mt-40">
      <div className="flex flex-col md:flex-row mt-10">
        <div className="w-full order-2 md:order-1 md:w-1/2">
          <div className="space-y-20">
            <h1 className="text-3xl font-bold">
              Hello. Welcome here to learn something{" "}
              <span className="text-pink-400">new something</span>
            </h1>
            <p className="text-normal">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="space-y-6">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
              <button className="btn btn-secondary">Send</button>
            </div>
          </div>
        </div>
        <div className="w-full order-1 md:w-1/2">
          <img src={banner} alt="banner" className="w-full" />
        </div>
      </div>
      
    </div>
  );
};

export default Body;
