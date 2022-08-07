import './App.css';
import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import LandingPage from './components/LandingPage';
import Learn from './components/Learn';
import Activities from './components/Activities';
import Quiz from './components/Quiz';
function App() {
  const [user,setUser] =React.useState(false)
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<LandingPage setUser={setUser}/>}/>
  <Route exact path="/home" element={ !user?<LandingPage/>:<Home/>}/>
  <Route exact path="/learn" element={!user?<LandingPage/>:<Learn/>}/>
  <Route exact path="/activities" element={!user?<LandingPage/>:<Activities/>}/>
  <Route exact path="/quiz" element={!user?<LandingPage/>:<Quiz/>}/>
</Routes>
</BrowserRouter>      
    </div>
  );
}

export default App;
