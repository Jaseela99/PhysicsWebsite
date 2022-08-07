import React from 'react'
import { motion } from 'framer-motion'
 import { signInWithGoogle } from "../firebase"
import {useNavigate} from "react-router-dom"


const LandingPage = ({setUser}) => {
  
const navigate=useNavigate()
    const login=()=>{
    signInWithGoogle().then(()=>{
      setUser(true)
      navigate("/home")
    }) 
  } 
  return (
    <div className=' h-screen w-full align-middle flex justify-center bg-landing bg-fixed bg-center'>
        <div className='flex w-1/2 justify-center align-middle m-auto'>
            <img className="  rounded-full shadow-md bg-center border-r-2 border-b-2 m-auto" src="https://data.whicdn.com/images/147466284/original.gif" alt="hi"/>   
        </div>
        <div className='flex flex-col justify-evenly w-1/2 text-white gap-2 m-auto'>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3, duration:2 }} className=' border-t-2 border-r-2 rounded-md font-script text-4xl font-thin ml-4 p-6'>Learn Physics with <span className=' font-medium text-6xl '>PhyFun</span>!!!</motion.p>
            <button  className=' bg-rose-800 hover:bg-rose-600 p-4 font-satisfy font-normal text-xl rounded-md shadow-md m-auto ' onClick={login} >
                Login to Learn
            </button>
        </div>


        
    </div>
  )
}

export default LandingPage