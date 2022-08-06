import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Introduction from "./Introduction";
import Types from "./Types";
import Shadows from "./Shadows";
import Reflections from "./Reflections";
import Summary from "./Summary";
const Learn = () => {
  const [intro, setIntro] = React.useState(true);
  const [types, setTypes] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);
  const [reflection, setReflection] = React.useState(false);
  const [summary, setSummary] = React.useState(false);
  const navigate = useNavigate();
  const showIntroduction = () => {
    setIntro(true);
    setTypes(false);
    setShadow(false);
    setReflection(false);
    setSummary(false)
  };
  const showTypes = () => {
    setIntro(false);
    setTypes(true);
    setShadow(false);
    setReflection(false);
    setSummary(false)
  };
  const showShadow = () => {
    setIntro(false);
    setTypes(false);
    setShadow(true);
    setReflection(false);
    setSummary(false)
  };
  const showReflection = () => {
    setIntro(false);
    setTypes(false);
    setShadow(false);
    setReflection(true);
    setSummary(false)
  };
  const showSummary=()=>{
    setIntro(false);
    setTypes(false);
    setShadow(false);
    setReflection(false);
    setSummary(true)
  }
  React.useEffect(() => {
    showIntroduction();
  }, []);
  React.useEffect(() => {
    showTypes();
  }, []);
  React.useEffect(() => {
    showShadow();
  }, []);
  React.useEffect(() => {
    showReflection();
  }, []);
  React.useEffect(() => {
    showSummary();
  }, []);
  return (
    <div className="h-screen w-full bg-learned bg-no-repeat object-fill bg-center fixed">
      <header className="flex justify-between bg-slate-700 opacity-80 p-3 shadow-md">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-black text-white rounded-md shadow-md p-2 font-satisfy"
          onClick={() => navigate("/home")}
        >
          {" "}
          Go Home
        </motion.button>
        <motion.h4
          className="font-script text-2xl text-white mr-2"
          whileHover={{ scale: 1.1 }}
        >
          Light, Shadows And Reflections
        </motion.h4>
      </header>
      <div className="w-full h-full flex justify-center">
        <div className="w-1/5 bg-zinc-700 opacity-80 p-3 text-white font-script font-bold text-xl shadow-md">
          <ul>
            <motion.li
              className="p-4"
              onClick={showIntroduction}
              whileHover={{ scale: 1.1 }}
            >
              Introduction To Light
            </motion.li>
            <hr />
            <motion.li
              className="p-4"
              onClick={showTypes}
              whileHover={{ scale: 1.1 }}
            >
              Types Of Objects
            </motion.li>
            <hr />
            <motion.li
              className="p-4"
              onClick={showShadow}
              whileHover={{ scale: 1.1 }}
            >
              Shadows
            </motion.li>
            <hr />
            <motion.li
              className="p-4"
              onClick={showReflection}
              whileHover={{ scale: 1.1 }}
            >
              Reflections
            </motion.li>
            <hr />
            <motion.li
              className="p-4"
              onClick={showReflection}
              whileHover={{ scale: 1.1 }}
            >
              Summary
            </motion.li>
            <hr />
          </ul>
        </div>
        <div className="w-4/5">
          <div>{intro && <Introduction />}</div>
          <div>{types && <Types />}</div>
          <div>{shadow && <Shadows />}</div>
          <div>{reflection && <Reflections />}</div>
          <div>{summary && <Summary />}</div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
