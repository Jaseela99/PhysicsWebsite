import React from 'react'

const Shadows = () => {
  return (
    <div className="h-screen w-full p-3 flex flex-col bg-white opacity-90">
    <h1 className="font-lobster text-5xl flex justify-center m-2 w-3/4 opacity-100 p-3">
      Play With Shadows!!
    </h1>
    <div className="flex w-full justify-center opacity-100 pt-3 m-1">
      <div className="font-domin w-1/2 text-lg pt-2 ">
        <h6 className='p-3 font-semibold'>When light falls on opaque objects they form shadows. In a dark room we cannot observe shadows. So, we need a source of light for seeing shadows.</h6>
        <p className="p-3">
        Now , Lets make some animals with shadow.
        </p>
        <p className="p-3">
        Light a torch facing a wall, bring your hand on to the light and make your favourite animals shadows.
        </p>
        <p className='p-3'>Thus Shadows can be viewed on screens like walls. Shadows gives us information about shape of the object.</p>
      </div>
      <img
      src="https://i.giphy.com/media/26ufm6aESpxci5baM/giphy.webp"
        alt="power"
        className=" m-3 h-full w-1/2  rounded-md shadow-md "
      />
    </div>
  </div>
  )
}

export default Shadows