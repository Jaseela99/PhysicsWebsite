import React from 'react'

const Summary = () => {
  return (
    <div className="h-screen w-full p-3 flex flex-col bg-white opacity-90">
    <h1 className="font-lobster text-5xl flex justify-center m-2 w-full opacity-100 p-3">
      Sum It Up..
    </h1>
    <div className="flex w-full justify-center opacity-100 p-1 m-1">
      <div className="font-domin text-xl pt-2 ">
        <p className="p-2">
        Opaque objects do not allow light to pass through them.
        </p>
        <p className="p-2">
        Transparent objects allow light to pass through them.

        </p>
        <p className="p-2">
        Translucent objects allow light to pass through them partially.
        </p>
        <p className="p-2">
        Shadows are formed when an opaque object comes in the path of light
        </p>
        <p className="p-2">
            Light travels in a straight line.
        </p>
        <p className="p-2 font-mono text-xl m-5">
        Now Let's do an Activity !
        </p>
      </div>
      <img
      src="https://data.whicdn.com/images/330995257/original.gif"
        alt="power"
        className=" m-3 h-3/4 w-1/2  rounded-md shadow-md "
      />
      
    </div>
  </div>
  )
}

export default Summary