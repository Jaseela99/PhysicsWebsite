import React from "react";

const Reflections = () => {
  return (
    <div className="h-screen w-full p-3 flex flex-col bg-white opacity-90">
      <h1 className="font-lobster text-5xl flex justify-center m-2 w-3/4 opacity-100 p-3">
        Mirrors and Reflections
      </h1>
      <div className="flex w-full justify-center opacity-100 p-1 m-1">
        <div className="font-domin w-1/2 text-lg pt-2 ">
          <h6 className="p-2 font-semibold">
            We all use Mirrors, what we can see ourselves on the mirror called{" "}
            <span className="text-sky-700 font-semibold">Reflection .</span>
          </h6>
          <p className="p-2">
            When You look on pond we could see reflection of trees and ourselves
            in it. Let's Try an Activity.
          </p>
          <p className="p-2">
            Fix a comb on one side of a large thermoCol sheet and fix a mirror
            on the other side as shown. Spread a dark coloured sheet of paper
            betweenthe mirror and the comb. Keep this insunlight or send a beam
            of light from a torch through the comb.
          </p>
          <p className="p-2">
            Amazing Isn't it? Light travels in a straight line and get reflected
            back in the mirror.
          </p>
        </div>
        <img
          src=" https://cdn1.byjus.com/wp-content/uploads/2020/02/Light-Shadows-and-Reflection-5-700x445.png"
          alt="power"
          className=" ml-3 h-full w-1/2  rounded-md shadow-md "
        />
      </div>
    </div>
  );
};

export default Reflections;
