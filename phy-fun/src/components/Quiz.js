import React from 'react'
import {motion} from "framer-motion"
import {useNavigate} from "react-router-dom"

const Quiz = () => {
  const navigate=useNavigate()

  const Questions=[
    {
    Question : "Property of a Luminous Object is ?",
    AnswerOptions:[
      {option:"Pass the light",isCorrect:false},
      {option:"Emit their own light",isCorrect:true},
      {option:"Blocks the light",isCorrect:false}
      
    ]
    },
    {
    Question : "Which type of objects create shadows when light falls on them?",
    AnswerOptions:[
      {option:"Opaque",isCorrect:true},
      {option:"Translucent",isCorrect:false},
      {option:"Transparent",isCorrect:false},
      
    ]
    },
    {
    Question : "which one is a property of light?",
    AnswerOptions:[
      {option:"Travels through straight line",isCorrect:false},
      {option:"produces reflection when falls on a mirror",isCorrect:false},
      {option:"both",isCorrect:true}
      
    ]
    }

  ]

  const [current,setcurrent]=React.useState(0)
  const [score,setScore]=React.useState(0)
  const [showScore,setShowScore]=React.useState(false)

const handleResponse=(isCorrect)=>{
if(isCorrect){
  setScore(score+1)

}

const next= current+1
  if(next<Questions.length){
    setcurrent(next)
  }else{
    setShowScore(true)  
  }
}

  const restartQuiz=()=>{
    setcurrent(0)
    setScore(0)
    setShowScore(false)
  }
  return (
    <div className="h-screen w-full bg-learned bg-no-repeat object-fill bg-center fixed ">
      <header className="flex justify-between bg-slate-700 opacity-80 p-3 shadow-md">
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
          Quiz Time!
        </motion.h4>
      </header>
      
      <div className="h-screen w-full p-3 flex  bg-sky-200 opacity-90 ">
      <div className='w-1/2 h-3/4 bg-sky-800 rounded-md shadow-md m-10 p-5 text-white font-domin'>
       {showScore?(
        <div>
        <img className="w-full h-40" src="https://i.pinimg.com/originals/fc/09/47/fc0947e836d0049c4f53b55c11f73575.gif" alt="celeb"/>
        <div className='p-5 m-3 text-2xl'>You have scored {score} outof {Questions.length}</div>
        <button className='p-5 bg-black rounded-md shadow-md m-3' onClick={restartQuiz}> Go Again!!</button>
          </div>
       ):(
        <>
       <div className='w-full p-3 m-2 flex flex-col justify-center'>
        <div className='text-xl p-2 m-2'>
          <span>{current+1}</span>/{Questions.length}
        </div> 
        <div className='flex justify-center p-2'>
        <div className='text-lg'> {Questions[current].Question}</div>
      </div>
      <div className=' flex flex-col p-2 m-2'>
        {Questions[current].AnswerOptions.map((answer)=>{
        return  <motion.button whileHover={{ scale: 1.1 }} className={`bg-gray-600 rounded-md p-2 border-2 m-2 shadow-md`} onClick={()=>handleResponse(answer.isCorrect)}>{answer.option}</motion.button>
        })}
      </div>
      </div>
      </>)}
      </div>
      <div className='w-1/2 m-10 p-5'>
        {!showScore?
        (<div>
<img className=" rounded-md shadow-md ml-12 w-3/4 h-3/4"src="https://c.tenor.com/A_H_GjwWCecAAAAC/qoobee-doubt.gif" alt="quiz"/>
        </div>):
(<div>
<img className=" rounded-md shadow-md m-5 w-3/4 h-full "src="https://media.baamboozle.com/uploads/images/203330/1614108826_489040_gif-url.gif" alt="quiz"/>

</div>)}

      </div>
      </div>
      </div>
  )
}
export default Quiz