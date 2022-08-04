import React from 'react'

const LandingPage = () => {
  return (
    <div className=' h-screen w-full align-middle flex justify-center bg-landing bg-fixed bg-center'>
        <div className='flex w-1/2 justify-center align-middle m-auto'>
            <img className="  rounded-full shadow-md bg-center border-r-2 border-b-2 m-auto" src="https://data.whicdn.com/images/147466284/original.gif" alt="hi"/>   
        </div>
        <div className='flex flex-col justify-evenly w-1/2 text-white font-serif gap-2 m-auto'>
            <p className=' border-t-2 border-r-2 rounded-md shadow-md text-5xl font-medium  m-2 p-4'>Learn Physics with <span className=' font-semibold text-6xl '>PhyFun</span>!!!</p>
            <button className=' bg-rose-800 hover:bg-rose-600 p-4  font-normal text-xl rounded-md shadow-md m-auto '>
                Login to Learn
            </button>
        </div>


        
    </div>
  )
}

export default LandingPage