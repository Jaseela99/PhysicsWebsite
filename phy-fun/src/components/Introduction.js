import React from "react";

const Introduction = () => {
  return (
    <div className="h-screen w-full p-3 flex flex-col bg-white opacity-90">
      <h1 className="font-lobster text-5xl flex justify-center m-5 w-3/4 opacity-100 p-3">
        How Do We See Things???
      </h1>
      <div className="flex w-full justify-center opacity-100 p-2">
        <div className="font-domin w-1/2 text-lg">
          <p className="p-2">
            In a completely dark room, will you be able to see anything? No,
            right?But Lighting a candle or torch can bring light to the room .
            Yes, <span className="text-sky-700 font-semibold">LIGHT </span> 
            helps us see objects.So Where does this light comes from?
          </p>
          <p className="p-2">
            Torch can give light on its own. Now, Imagine Sun ,It gives us light
            all day. The Objects which can emit their own light are called{" "}
            <span className="text-sky-700 font-semibold">luminous </span>object.
          </p>
          <p className="p-2">
            When luminous objects emits light it falls on the other objects and travels towards our eye. That's How we see .Interesting Right?
          </p>
        </div>
        <img
          src="https://monophy.com/media/X8Vx8K7fv54g9jMWQ5/monophy.gif"
          alt="power"
          className=" ml-12 h-3/4 w-1/4    rounded-md shadow-md opacity-100"
        />
      </div>
    </div>
  );
};

export default Introduction;
