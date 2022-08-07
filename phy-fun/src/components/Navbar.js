import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import {motion} from "framer-motion"
import { auth } from '../firebase'

const Navbar = ({setUser}) => {
  const navigate=useNavigate()
  const signOut=()=>{
auth.signOut().then(()=>
setUser(false),
navigate("/"))
  }
  return (
    <div className='bg-gray-700  opacity-80 text-white font-serif text-xl'>
<ul className='flex p-3 justify-evenly'>
<Link to="/home"><motion.li whileHover={{scale:1.1}} className="p-2">Home</motion.li></Link>
<Link to="/learn"><motion.li whileHover={{scale:1.1}} className="p-2">Learn</motion.li></Link>    
<Link to="/activities"><motion.li whileHover={{scale:1.1}} className="p-2">Activities</motion.li></Link>
 <Link to="/quiz"><motion.li whileHover={{scale:1.1}} className="p-2">Quiz</motion.li></Link>
 <Link to="/"><motion.li whileHover={{scale:1.1}} className="p-1" ><button className='bg-rose-800 p-2 text-lg rounded-md' onClick={signOut}>SignOut</button></motion.li></Link>
   
</ul>

    </div>
  )
}

export default Navbar