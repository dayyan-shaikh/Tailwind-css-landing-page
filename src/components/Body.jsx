import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-1 lg:justify-end">
        <img src="./assets/Blue-Shape.svg" className=" -rotate-45 h-64 md:h-72 lg:h-[400px]" />
        <img
          src="./assets/Pink-Shape.svg"
          className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./assets/Purple-Shape.svg"
          className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img src="./assets/Hero-Model.png" className="absolute h-64 md:h-72 lg:h-[400px]" />
      </div>
      <div className="lg:flex-1 lg:py-10">
        <h1 className="text-5xl font-bold leading-tight">Host your website in less than 5 minutes</h1>
        <p className="text-gray-400">
          With Hoster , get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input className="rounded-md px-4 py-3 placeholder:text-grey-400" type="email" placeholder="Enter email address" />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
        </form>
        <div className="flex gap-2">
          <img src="./assets/Checkmark.svg" />
          <p>No spam ,ever . Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
