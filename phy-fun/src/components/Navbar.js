import React from 'react'
import {Link} from "react-router-dom"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className='bg-gray-700  opacity-80 text-white font-serif text-xl'>
<ul className='flex p-3 justify-evenly'>
<Link to="/home"><motion.li whileHover={{scale:1.1}} className="p-2">Home</motion.li></Link>
<Link to="/learn"><motion.li whileHover={{scale:1.1}} className="p-2">Learn</motion.li></Link>    
<Link to="/activities"><motion.li whileHover={{scale:1.1}} className="p-2">Activities</motion.li></Link>
 <Link to="/quiz"><motion.li whileHover={{scale:1.1}} className="p-2">Quiz</motion.li></Link>
 <Link to="/"><motion.li whileHover={{scale:1.1}} className="p-1" ><button className='bg-rose-800 p-1 text-lg rounded-md'>SignOut</button></motion.li></Link>
   
</ul>

    </div>
  )
}

export default Navbar