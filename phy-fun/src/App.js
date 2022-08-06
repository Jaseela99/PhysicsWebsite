import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import LandingPage from './components/LandingPage';
import Learn from './components/Learn';
import Activities from './components/Activities';
import Quiz from './components/Quiz';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<LandingPage/>}/>
  <Route exact path="/home" element={<Home/>}/>
  <Route exact path="/learn" element={<Learn/>}/>
  <Route exact path="/activities" element={<Activities/>}/>
  <Route exact path="/quiz" element={<Quiz/>}/>
</Routes>
</BrowserRouter>      
    </div>
  );
}

export default App;
