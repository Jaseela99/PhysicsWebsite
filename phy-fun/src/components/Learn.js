import React from "react";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import Introduction from "./Introduction";
import Types from "./Types"
const Learn = () => {

  const [intro,setIntro] =React.useState(true)
  const [types,setTypes] =React.useState(false)
  const [shadow,setShadow] =React.useState(false)
  const [reflection,setReflection] =React.useState(false)
  const navigate = useNavigate();
  const showIntroduction=()=>{
    setIntro(!intro)
    setTypes(types)
    setShadow(shadow)
   setReflection(reflection)
  }
  const showTypes=()=>{
    setIntro(intro)
    setTypes(!types)
   setShadow(shadow)
   setReflection(reflection)
  }
  /* React.useEffect(()=>{
  showIntroduction()
},[])  
  React.useEffect(()=>{
  showTypes()
},[])    */
  return (
    <div className="h-screen w-full bg-learned bg-no-repeat object-fill bg-center fixed">
      <header className="flex justify-between bg-slate-700 opacity-80 p-3 shadow-md">
        <motion.button whileHover={{scale:1.1}}
          className="bg-black text-white rounded-md shadow-md p-2 font-satisfy"
          onClick={() => navigate("/home")}
        >
          {" "}
          Go Home
        </motion.button>
        <motion.h4 className="font-script text-2xl text-white mr-2" whileHover={{scale:1.1}}>
          Light, Shadows And Reflections
        </motion.h4>
      </header>
      <div className="w-full h-full flex justify-center">
      <div className="w-1/5 bg-zinc-700 opacity-80 p-3 text-white font-script font-bold text-lg shadow-md">
     <ul >
      <li className="p-4" onClick={showIntroduction}>Introduction To Light</li>
      <hr/>
      <li className="p-4" onClick={showTypes}>Types Of Objects</li>
      <hr/>
      <li className="p-4">Shadows</li>
      <hr/>
      <li className="p-4">Reflection</li>
      <hr/>
     </ul>
      </div>
      <div className="w-4/5 flex justify-center">
        <div>{ intro && <Introduction/>}</div>
        <div>{ types && <Types/>}</div>
      </div>
      </div>
    </div>
  );
};

export default Learn;
