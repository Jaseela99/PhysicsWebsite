import React from 'react'

const Types = () => {
  return (
    <div className="h-screen w-full p-3 flex flex-col bg-white opacity-80">
    <h1 className="font-lobster text-5xl flex justify-center m-2 w-3/4 opacity-100 p-3">
      Types Of Objects
    </h1>
    <div className="flex w-full justify-center opacity-100 pt-3 m-1">
      <div className="font-domin w-1/2 text-lg pt-3">
        <h6 className='p-3 font-semibold'>According to the ability of passing light through objects are classified in to :</h6>
        <p className="p-3">
        1. Objects which do not pass any light through them are called <span className='text-sky-700 font-semibold'> Opaque </span> objects.
        </p>
        <p className="p-3">
         2. Objects which partially passes light through them are called <span className='text-sky-700 font-semibold'> Translucent</span> objects.
        </p>
        <p className="p-3">
        3.Objects which completely allows the light through pass through them are called <span className='text-sky-700 font-semibold'>Transparent</span> objects.
        </p>
        <p className='p-2 font-serif text-lg'> Now Observe some objects and try to find it's type.</p>
      </div>
      <img
      src="https://cdn.dribbble.com/users/1700221/screenshots/8634944/li6.gif"
        alt="power"
        className=" ml-3 h-full w-1/2 rounded-md shadow-md opacity-100" whileHover={{scale:1.1}}
      />
    </div>
  </div>
  )
}

export default Types