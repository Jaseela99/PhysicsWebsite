import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Facts = [
  {
    fact: "Due to differences in gravity, a 200 pound person would only weigh 76 pounds on Mars.",
    image:
      "https://i.pinimg.com/originals/8f/9a/77/8f9a7793fa101c6cae05c065446a67af.jpg",
  },
  
  {
    fact: "Sound travels at a speed of around 767 miles per hour (1,230 kilometres per hour).",
    image:
      "https://thumbs.gfycat.com/TightAlienatedHairstreakbutterfly-max-1mb.gif",
  },
  {
    fact: "A magnifying glass uses the properties of a convex shaped lens to magnify an image, making it easier to see.",
    image: "https://c.tenor.com/cviPPk6fEjAAAAAC/duffy-duck-investigating.gif",
  },
  {
    fact: "Light from the Earth takes just 1.255 seconds to reach the Moon.",
    image:
      "https://i0.wp.com/brightestyoungthings.com/wp-content/uploads/2018/06/earth-gif-13.gif?fit=498%2C498&quality=100&ssl=1",
  },
];
const Home = () => {
  return (
   <motion.div  
   className="h-screen w-full bg-science fixed">
      <Navbar />
     <h5 className="text-4xl font-script p-2 font-semibold text-red-800 m-2 animate-bounce ">Fun Facts</h5>
      <motion.div  drag="x"   dragConstraints={{right:0,left:0}} className="overflow-hidden h-3/4 cursor-grab ml-25">
        <motion.div className="flex " initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1, duration:2 }}>
          {Facts.map((fact,index) => {
            return <motion.div className=" p-5 w-full" whileHover={{scale:1.1}} whileTap={{scale:0.9}} key={index}>
              <img src={fact.image} alt="facts" className="h-3/4 w-full rounded-md shadow-md border-r-2"/>
              <p className="bg-white p-2 border-b-2 border-r-2 shadow-md  font-mono ">{fact.fact}</p>
            </motion.div>;
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
