import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Activities = () => {
  const navigate=useNavigate()
  return (
    <div className="h-screen w-full bg-activity bg-no-repeat object-fill bg-center fixed">
      <header className="flex justify-between bg-slate-700 opacity-90 p-3 shadow-md">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-black text-white rounded-md shadow-md p-3 font-satisfy"
          onClick={() => navigate("/home")}
        >
          {" "}
          Go Home
        </motion.button>
        <motion.h4
          className="font-script text-2xl text-white mr-2"
          whileHover={{ scale: 1.1 }}
        >
          Pin hole Camera
        </motion.h4>
      </header>
      
      <motion.div initial={{opacity:0.7}} animate={{opacity:1}} transition={{delay:0.05, duration:2 }} className="h-screen w-full p-3 flex flex-col bg-sky-200  overflow-y-auto">
      <motion.h1 className="font-lobster text-5xl m-2 w-full opacity-100 p-3"  whileHover={{ scale: 1.1 }}>
        Make Your Own Pinhole Camera
      </motion.h1>
      <div className="flex w-full justify-center opacity-100 p-4 m-1">

<ol className='w-1/2'>
  <li className="font-domin text-lg pt-2 ">
 1. Take two boxes of cardboard such that
one can slide into another with no gap
in between them.
  </li>
  <li className="font-domin text-lg pt-2 ">
 2.  Cut open one side of
each box. On the opposite face of the
larger box, make a small hole in the
middle[Fig (a)].
  </li>
  <li className="font-domin text-lg pt-2 ">
  3.In the smaller box,
cut out from the middle a square with a
side of about 5 to 6 cm. Cover this open
square in the box with tracing paper
(translucent screen) [Fig (b)].
  </li>
  <li className="font-domin text-lg pt-2 ">
  4.Slide
the smaller box inside the larger one
with the hole, in such a way that the
side with the tracing paper is inside
[Fig (c)].
  </li>
  <li className="font-domin text-lg pt-2 ">
  5.And It's Ready To Use
  </li>

</ol>
      <div className='w-1/2 '>
<img className='rounded-md border-b-2 border-r-2 shadow-md' src="https://haygot.s3.amazonaws.com/questions/635907_95452ae375c8437a8d2785de71bcbcab.png" alt="pinhole"/>
      </div>
      </div>
      <div className='m-2 '>
      <motion.h1  whileHover={{ scale: 1.1 }} className="font-lobster text-5xl m-2 w-full opacity-100 p-3">
        Lets Use It
      </motion.h1>
      <div className="flex w-full justify-center opacity-100 p-4 mb-12">

<ol className='w-1/2'>
  <li className="font-domin text-lg pt-2 ">
1.  Holding the pinhole camera look
through the open face of the smaller
box. 
  </li>
  <li className="font-domin text-lg pt-2 ">
2.  You should use a piece of black
cloth to cover your head and the pinhole
camera. 
  </li>
  <li className="font-domin text-lg pt-2 ">
3.  try to look at some distant
objects like a tree or a building through
the pinhole camera.
  </li>
  <li className="font-domin text-lg pt-2 ">
4.  Make sure that the
objects you wish to look at through your
pinhole camera are in bright sun shine.
  </li>
  <li className="font-domin text-lg pt-2 ">
5.  Move the smaller box forward or
backward till you get a picture on the
tracing paper pasted at the other end.
  </li>
  <li className="font-domin text-lg pt-2 ">
6. Write down your Observations
  </li>

</ol>
<img src="https://i.stack.imgur.com/JCuSP.gif" className=' w-1/2 font-satisfy text-5xl m-auto rounded-md border-b-2 border-r-2 shadow-md' alt="hi"/>

</div>
      </div>

        </motion.div>
      </div>
  )
}

export default Activities